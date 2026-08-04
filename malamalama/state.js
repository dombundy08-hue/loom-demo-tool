window.WorkflowState = (function () {
  var KEY = "loom_demo_state_malamalama_v1";

  var DEFAULT = {
    title: "Website + GoHighLevel build — Jeneesa's Malamalama",
    counter: 5,
    nodes: [
      { id: "n1", title: "Discovery call", badge: "call", colorClass: "c0", x: 24, y: 170, detail: "Nailed down what she needed — a site plus a way to manage clients and leads without juggling five tools." },
      { id: "n2", title: "Design mockup", badge: "&#9998;", colorClass: "c1", x: 290, y: 170, detail: "Mocked up the site so the look was agreed on before any code got written." },
      { id: "n3", title: "Build website", badge: "&lt;/&gt;", colorClass: "c1", x: 556, y: 170, detail: "Built every page out — content, layout, responsive design." },
      { id: "n4", title: "GoHighLevel setup", badge: "GHL", colorClass: "c2", x: 822, y: 170, detail: "Set up her CRM — pipelines, automations, and marketing workflows all in one place." },
      { id: "n5", title: "Launch &amp; handoff", badge: "&#10003;", colorClass: "c2", x: 1088, y: 170, detail: "Tested it, launched it, and handed it over — live and ready to use." }
    ],
    wires: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" },
      { from: "n3", to: "n4" },
      { from: "n4", to: "n5" }
    ],
    open: "“This one's from a completed client project — a site called Jeneesa's Malamalama. I handled the whole build plus the CRM setup.”",
    steps: [
      { nodeId: "n1", text: "Started with a call to nail down what she needed — a site plus a way to manage clients and leads without juggling five different tools." },
      { nodeId: "n2", text: "From there I mocked up the design so she could see it and sign off before any code got written." },
      { nodeId: "n3", text: "Then I built out every page — about two weeks start to finish." },
      { nodeId: "n4", text: "I set up GoHighLevel on top of it — pipelines, automations, and marketing workflows, all in one place instead of five different tools." },
      { nodeId: "n5", text: "Last step was launch — tested, live, and handed over ready to use." }
    ],
    tieIn: "",
    close: "“That's a real project, live and in use today. Happy to walk you through how the same approach could work for what you're building.”"
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
