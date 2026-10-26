# ZAFERU static site

This repository contains a 20-page local mirror with working relative navigation. Its Webflow styles, scripts, fonts, images, and videos are bundled in `assets/vendor/`; the ZAFERU logo is in `assets/images/`, and the homepage hero video is `lv_0_20261027014209.mp4` at the repository root.

## Run without an internet connection

From the repository root, start a local static server:

```sh
python -m http.server 8000
```

Open `http://localhost:8000/`. The page links and static assets work without internet when served locally. Using a server is recommended over opening `index.html` via `file://`, because browser security rules can limit local scripts and video playback.

The source site's social/booking links are disabled in this local version. Contact and newsletter forms are not connected to a backend; submitting them shows an explanatory message instead of sending data to the original Webflow site. `mailto:` links open the user's mail application.
