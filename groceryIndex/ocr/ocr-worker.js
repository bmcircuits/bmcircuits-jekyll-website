// Runs Tesseract (tesseract.js-core, WebAssembly) in a worker, one request at a time.
// In:  { type: "init", core, lang } | { type: "params", params } | { type: "read", png }
// Out: { type: "ready" } | { type: "ack" } | { type: "progress", p } | { type: "text", text } | { type: "error", message }
let M = null, api = null;

self.onmessage = async e => {
  const m = e.data;
  try {
    if (m.type === "init") {
      importScripts(m.core);
      M = await self.TesseractCore({ TesseractProgress: p => self.postMessage({ type: "progress", p }) });
      const r = await fetch(m.lang);
      if (!r.ok) throw new Error("Could not load the language file");
      M.FS.writeFile("./eng.traineddata", new Uint8Array(await r.arrayBuffer()));
      api = new M.TessBaseAPI();
      if (api.Init(null, "eng", 1) === -1) throw new Error("The reader could not start");
      api.SetVariable("tessedit_pageseg_mode", "6");
      api.SetVariable("preserve_interword_spaces", "1");
      self.postMessage({ type: "ready" });
    } else if (m.type === "params") {
      for (const k of Object.keys(m.params || {})) api.SetVariable(k, String(m.params[k]));
      self.postMessage({ type: "ack" });
    } else if (m.type === "read") {
      M.FS.writeFile("/input", new Uint8Array(m.png));
      if (api.SetImageFile(1, 0) === 1) throw new Error("Could not open the photo");
      api.Recognize(null);
      self.postMessage({ type: "text", text: api.GetUTF8Text() });
    }
  } catch (err) {
    self.postMessage({ type: "error", message: String((err && err.message) || err) });
  }
};
