window.WorkflowState = (function () {
  var KEY = "loom_demo_state_website_v1";

  var DEFAULT = {
    title: "Website build — from call to launch",
    counter: 5,
    nodes: [
      { id: "n1", title: "Discovery call", badge: "call", colorClass: "c0", x: 24, y: 170, detail: "Quick call to nail down exactly what pages and features are needed." },
      { id: "n2", title: "Design mockup", badge: "&#9998;", colorClass: "c1", x: 290, y: 170, detail: "A visual mockup of the site so the design is agreed on before any code gets written." },
      { id: "n3", title: "Build pages", badge: "&lt;/&gt;", colorClass: "c1", x: 556, y: 170, detail: "Every page gets built out — content, layout, responsive design." },
      { id: "n4", title: "Connect domain &amp; hosting", badge: "www", colorClass: "c2", x: 822, y: 170, detail: "Domain and hosting connected so the site is live under the client's own name." },
      { id: "n5", title: "Launch &amp; handoff", badge: "&#10003;", colorClass: "c2", x: 1088, y: 170, detail: "Final testing, then handoff — live, tested, ready for customers." }
    ],
    wires: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" },
      { from: "n3", to: "n4" },
      { from: "n4", to: "n5" }
    ],
    open: "“Hey, just saw your post — I'm Dominic. I've got a website build I can walk you through real quick.”",
    steps: [
      { nodeId: "n1", text: "First step is a quick call to nail down exactly what pages and features you need — no guessing." },
      { nodeId: "n2", text: "From there I mock up the design so you can see it before any code gets written." },
      { nodeId: "n3", text: "Then I build out every page — this one took about two weeks start to finish." },
      { nodeId: "n4", text: "I connect your domain and hosting so it's live under your own name, not a placeholder link." },
      { nodeId: "n5", text: "Last step is launch — I hand over everything working, tested, and ready for customers." }
    ],
    tieIn: "",
    close: "“Based on what you wrote, I'm confident I can do this. Message me here and we'll hop on a call.”"
  };

  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : clone(DEFAULT);
    } catch (e) {
      return clone(DEFAULT);
    }
  }

  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  function onChange(cb) {
    window.addEventListener("storage", function (e) {
      if (e.key === KEY) cb(load());
    });
  }

  function reset() {
    var fresh = clone(DEFAULT);
    save(fresh);
    return fresh;
  }

  return { load: load, save: save, onChange: onChange, reset: reset, DEFAULT: DEFAULT };
})();
