window.WorkflowState = (function () {
  var KEY = "loom_demo_state_mission_companion_v1";

  var DEFAULT = {
    title: "Mission Companion — a PWA for LDS missionaries",
    counter: 5,
    nodes: [
      { id: "n1", title: "Discovery call", badge: "call", colorClass: "c0", x: 24, y: 170, detail: "Scoped what missionaries actually needed — one app for daily spiritual habits, language practice, and health tracking instead of paper journals and five different tools." },
      { id: "n2", title: "Build the core app", badge: "&lt;/&gt;", colorClass: "c1", x: 290, y: 170, detail: "Built out the core app — journal, Spanish practice, scripture mastery, glossary, plus health and exercise tracking, as a React PWA." },
      { id: "n3", title: "Cloud sync", badge: "&#9729;", colorClass: "c1", x: 556, y: 170, detail: "Layered Supabase cloud sync on top of local storage so progress isn't stuck on one phone." },
      { id: "n4", title: "Offline-first &amp; installable", badge: "PWA", colorClass: "c2", x: 822, y: 170, detail: "Made it offline-first and installable — works with no connection and installs like a native app." },
      { id: "n5", title: "Launch &amp; handoff", badge: "&#10003;", colorClass: "c2", x: 1088, y: 170, detail: "Tested it, launched it — live on its own domain and ready to use." }
    ],
    wires: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" },
      { from: "n3", to: "n4" },
      { from: "n4", to: "n5" }
    ],
    open: "“This one's a PWA I built for LDS missionaries — a companion app for their daily spiritual habits, language practice, and health tracking.”",
    steps: [
      { nodeId: "n1", text: "Started with a call to scope what missionaries actually needed — one app for daily spiritual habits, language practice, and health tracking, instead of paper journals and five different tools." },
      { nodeId: "n2", text: "From there I built out the core app — journal, Spanish practice, scripture mastery, glossary, plus health and exercise tracking, as a React PWA." },
      { nodeId: "n3", text: "I layered Supabase cloud sync on top of local storage, so progress isn't stuck on one phone." },
      { nodeId: "n4", text: "Made it offline-first and installable — it works with no connection and installs like a native app, which matters when you're in a low-connectivity area." },
      { nodeId: "n5", text: "Last step was launch — tested, live on its own domain, ready to use." }
    ],
    tieIn: "",
    close: "“That's live today at missionarycompanion.com. Happy to walk through how the same approach fits what you're building.”"
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
