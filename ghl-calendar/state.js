window.WorkflowState = (function () {
  var KEY = "loom_demo_state_ghl_calendar_v1";

  var DEFAULT = {
    title: "Automatic GHL calendar & booking",
    counter: 5,
    nodes: [
      { id: "n1", title: "Lead fills form", badge: "form", colorClass: "c0", x: 24, y: 170, detail: "The moment a lead submits the form, the automation kicks off — no manual follow-up needed." },
      { id: "n2", title: "GHL auto-books slot", badge: "cal", colorClass: "c1", x: 290, y: 170, detail: "GoHighLevel checks the calendar and grabs the next open slot automatically." },
      { id: "n3", title: "Confirmation sent", badge: "&#10003;", colorClass: "c1", x: 556, y: 170, detail: "Confirmation goes out immediately by text and email so the lead knows it's locked in." },
      { id: "n4", title: "Reminder sequence", badge: "&#9201;", colorClass: "c2", x: 822, y: 170, detail: "Automated reminders run leading up to the appointment to cut down no-shows." },
      { id: "n5", title: "No-show follow-up", badge: "&#8635;", colorClass: "c2", x: 1088, y: 170, detail: "If someone doesn't show, it automatically follows up to get them rebooked." }
    ],
    wires: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" },
      { from: "n3", to: "n4" },
      { from: "n4", to: "n5" }
    ],
    open: "“Hey, just saw your post — I'm Dominic. I've got a GoHighLevel calendar automation I can walk you through real quick.”",
    steps: [
      { nodeId: "n1", text: "The second a lead fills out the form, GoHighLevel checks the calendar and grabs the next open slot — no back-and-forth emails." },
      { nodeId: "n2", text: "It books the appointment automatically and blocks that time so nobody double-books." },
      { nodeId: "n3", text: "Confirmation goes out immediately by text and email, so the lead knows it's locked in." },
      { nodeId: "n4", text: "Then it runs a reminder sequence leading up to the appointment — that's what cuts down no-shows." },
      { nodeId: "n5", text: "And if someone still doesn't show, it automatically follows up to get them rebooked instead of just falling off." }
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
