# BMC Jekyll Website

## install and basic setup
```bash
gem install bundler jekyll
bundle install
bundle exec jekyll serve
```

## setup for viewing locally:
Run `ipconfig` inside bash terminal, then look for the IPv4 Address:

Wireless LAN adapter Wi-Fi:

   Connection-specific DNS Suffix  . : lan\
   IPv4 Address. . . . . . . . . . . : **192.168.8.160**\
   Subnet Mask . . . . . . . . . . . : 255.255.255.0\
   Default Gateway . . . . . . . . . : 192.168.8.1\

Then inside bash terminal on the root directory of website repo, run the following command:
```bash
bundle exec jekyll serve --host 0.0.0.0
```
\--host 0.0.0.0, is important as it allows other devices on the network to connect.

Then open `http://192.168.8.160:4000/bmcircuits/`, where the IP address is the one found above in the IPv4 Address above.

---

## Project structure

```
bmc-jekyll/
├── _config.yml          # Site configuration
├── _layouts/
│   ├── default.html     # Base layout (nav + footer)
│   ├── post.html        # Blog post layout
│   └── project.html     # Portfolio project layout
├── _includes/
│   ├── nav.html         # Navigation bar
│   └── footer.html      # Footer
├── _posts/              # Blog posts (YYYY-MM-DD-title.md)
├── _portfolio/          # Portfolio projects
├── assets/
│   ├── css/main.css     # All styles
│   └── images/          # Logo and project images
├── index.html           # Home page
├── portfolio/index.html # Portfolio listing
├── blog/index.html      # Blog listing
└── contact/index.html   # Contact page
```

---

## Adding a blog post

Create a new file in `_posts/` named `YYYY-MM-DD-title.md`:

```markdown
---
title: Post Title
date: 2025-06-01
read_time: 5 min read
tags: [PCB Design, Firmware]
excerpt: One sentence summary shown in the blog listing.
---

post content...
```

---

## Adding a portfolio project

Create a new file in `_portfolio/` named `project.md`:

```markdown
---
title: Project Name
category: PCB Design
date: 2025-06-01
tech: STM32 · 4-layer
image: /assets/images/projects/my-project.jpg   # optional
specs:
  - label: MCU
    value: STM32F4
  - label: Year
    value: "2025"
---

Project description...
```

Add any project images to `assets/images/projects/`.

---

## Formating videos

Using ffmepg, the following was the last command used:  
`ffmpeg -i bike_light_tail_raw.mp4 -ss 00:00:01 -to 00:00:04 -vcodec libx264 -crf 28 -an -vf "crop=in_w:in_h/2:0:in_h/3" output.mp4`  

`-ss` is start time, `-to` is end time, `-t` is duration from the start point
`-an` removes audio  
`-crf 28` controls quality — lower = better quality, larger file. Range is 0–51, 18–28 is typical for web  
`-vf scale=576:512` forces exact dimensions — if the aspect ratio doesn't match it will stretch. Use `-vf scale=576:-1` to set width and auto-calculate height, or `-vf scale=-1:512` for height and auto-calculate width  
`-vf crop=w:h:x:y` Cuts a region out — x/y is the top-left starting point of the crop  
You can chain filters: `-vf "crop=576:512:0:0,scale=288:256"` crops then scales  
Phone videos often have rotation in metadata — add `-vf transpose=1` to physically rotate if it displays sideways  

