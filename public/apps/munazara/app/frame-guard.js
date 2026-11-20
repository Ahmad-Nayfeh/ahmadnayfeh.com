// A meta CSP cannot set frame-ancestors, and the host (GitHub Pages, serving ahmadnayfeh.com) sends no custom headers; refuse to run inside a frame.
if (window.top !== window.self) { document.documentElement.innerHTML = ''; window.top.location = window.self.location; }
