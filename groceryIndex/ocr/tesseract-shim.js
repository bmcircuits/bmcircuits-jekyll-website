// Lets the page use the receipt reader stored beside it, instead of one fetched from a CDN.
// Offers the small part of the tesseract.js API the page uses: createWorker, setParameters, recognize, terminate.
(function () {
  const BASE = new URL(".", document.currentScript.src).href;
  const SIMD = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);

  function createWorker(lang, oem, opts) {
    const log = (opts && opts.logger) || function () {};
    return new Promise((resolve, reject) => {
      const w = new Worker(BASE + "ocr-worker.js");
      let pending = null;
      const ask = (msg, transfer) => new Promise((res, rej) => { pending = { res, rej }; w.postMessage(msg, transfer || []); });
      const api = {
        setParameters: params => ask({ type: "params", params }),
        recognize: async canvas => {
          const blob = await new Promise(r => canvas.toBlob(r, "image/png"));
          const png = await blob.arrayBuffer();
          return ask({ type: "read", png }, [png]).then(text => ({ data: { text } }));
        },
        terminate: () => { w.terminate(); return Promise.resolve(); }
      };
      w.onerror = () => reject(new Error("The receipt reader could not start."));
      w.onmessage = e => {
        const m = e.data;
        if (m.type === "ready") resolve(api);
        else if (m.type === "progress") log({ status: "recognizing text", progress: Math.max(0, (m.p - 30) / 70) });
        else if ((m.type === "text" || m.type === "ack") && pending) { const p = pending; pending = null; p.res(m.text); }
        else if (m.type === "error") {
          const err = new Error(m.message);
          if (pending) { const p = pending; pending = null; p.rej(err); } else reject(err);
        }
      };
      const core = BASE + (WebAssembly.validate(SIMD) ? "tesseract-core-simd-lstm.wasm.js" : "tesseract-core-lstm.wasm.js");
      w.postMessage({ type: "init", core, lang: BASE + "eng.traineddata" });
    });
  }
  window.Tesseract = { createWorker, selfHosted: true };
})();
