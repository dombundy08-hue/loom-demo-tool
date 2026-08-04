window.WorkflowState = (function () {
  var KEY = "loom_demo_state_v1";

  var DEFAULT = {
    title: "Automated lead outreach system",
    counter: 5,
    nodes: [
      { id: "n1", title: "Schedule 7am", badge: "7am", colorClass: "c0", x: 24, y: 170, detail: "Runs automatically every morning at 7am — no manual kickoff needed." },
      { id: "n2", title: "Scrape leads", badge: "&darr;", colorClass: "c1", x: 290, y: 170, detail: "Pulls fresh leads from the source, zero manual list-building." },
      { id: "n3", title: "Clean & dedupe", badge: "&perp;", colorClass: "c1", x: 556, y: 170, detail: "Strips duplicates and bad data before anything gets sent." },
      { id: "n4", title: "Enroll in campaign", badge: "@", colorClass: "c2", x: 822, y: 170, detail: "Every lead is auto-enrolled into a live email sequence." },
      { id: "n5", title: "Auto follow-up", badge: "&orarr;", colorClass: "c2", x: 1088, y: 170, detail: "Keeps following up on its own until someone responds." }
    ],
    wires: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" },
      { from: "n3", to: "n4" },
      { from: "n4", to: "n5" }
    ],
    open: "“Hey, just saw your post — I'm Dominic. I've got something built that does exactly this kind of thing, let me show you.”",
    steps: [
      { nodeId: "n1", text: "This runs itself every morning at 7am — no one has to remember to kick it off." },
      { nodeId: "n2", text: "It pulls fresh leads automatically — this used to be manual list-building, now it's zero-touch." },
      { nodeId: "n3", text: "Before anything gets sent, it cleans and dedupes the list, so nobody gets emailed twice." },
      { nodeId: "n4", text: "Then every lead gets automatically enrolled in a live email campaign — that's the follow-up that used to eat hours every week." },
      { nodeId: "n5", text: "And it keeps following up on its own until someone replies — nothing falls through the cracks." }
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
