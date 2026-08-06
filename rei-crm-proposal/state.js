window.WorkflowState = (function () {
  var KEY = "loom_demo_state_rei_crm_proposal_v1";

  var DEFAULT = {
    title: "Proposed GHL architecture — Multi-Vertical REI CRM",
    counter: 5,
    nodes: [
      { id: "n1", title: "Multi-vertical pipelines", badge: "GHL", colorClass: "c0", x: 24, y: 170, detail: "One sub-account with four parallel pipelines (wholesale, land, multi-family, single-family), each with its own stages but sharing unified contact and reporting data." },
      { id: "n2", title: "AI seller qualification", badge: "AI", colorClass: "c1", x: 290, y: 170, detail: "Conversation AI and Voice AI handle inbound and outbound seller contact, asking discovery questions and scoring leads cold, warm, or hot." },
      { id: "n3", title: "AI buyer matching", badge: "&#8646;", colorClass: "c1", x: 556, y: 170, detail: "Buyer buy-box data captured on intake, then an automated workflow matches new deals against buyer criteria and notifies matching buyers." },
      { id: "n4", title: "Workflow automation", badge: "&#9881;", colorClass: "c2", x: 822, y: 170, detail: "End-to-end automation from lead intake through qualification, nurture, booking, and closing handoff, routing to a live call only once a lead is ready." },
      { id: "n5", title: "Reporting dashboard", badge: "&#128202;", colorClass: "c2", x: 1088, y: 170, detail: "A KPI dashboard tracking lead volume, qualification rate, cost per lead, and buyer match/close rate, segmented by vertical." }
    ],
    wires: [
      { from: "n1", to: "n2" },
      { from: "n2", to: "n3" },
      { from: "n3", to: "n4" },
      { from: "n4", to: "n5" }
    ],
    open: "“Hey, I saw your post about building a hands-off CRM system, I'm Dominic. Let me walk you through exactly how I'd architect this for your four verticals.”",
    steps: [
      { nodeId: "n1", text: "I'd set up one sub-account structured around your four verticals, wholesale, land, multi-family, and single-family, each with its own acquisition and disposition pipeline, but sharing the same contact and reporting data underneath." },
      { nodeId: "n2", text: "For seller qualification I'd configure GoHighLevel's own Conversation AI and Voice AI to handle inbound and outbound contact, asking the discovery questions on motivation, timeline, and condition, then scoring and tagging each lead cold, warm, or hot automatically." },
      { nodeId: "n3", text: "On the buyer side, I'd build an intake process that captures each buyer's buy box, then an automated workflow that matches new deals against that criteria and notifies the right buyers the moment a property fits, so you're only looped in once someone confirms real interest." },
      { nodeId: "n4", text: "All of it ties together in one automation chain, lead intake through qualification, nurture, booking, and closing handoff, so you only pick up the phone once a seller or buyer is actually ready." },
      { nodeId: "n5", text: "Last piece is a reporting dashboard so you can see lead volume, qualification rate, and close rate broken out by vertical, without digging through each pipeline manually." }
    ],
    tieIn: "a fully automated acquisition-to-disposition system where you only get on the phone once someone's ready to sign",
    close: "“That's the architecture I'd bring to your project. I'll be straight with you, I haven't built this specific setup for real estate investors before, but this is exactly the kind of GHL pipeline and automation work I do. Message me here and let's talk through it.”"
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
