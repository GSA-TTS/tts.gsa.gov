/**
 * @jest-environment jsdom
 */

const { renderGlobalInfoSessions } = require("../js/positions");

describe("renderGlobalInfoSessions", () => {
  let globalInfoSessionsWrapper;

  beforeEach(() => {
    // Set up a mock DOM element for globalInfoSessionsWrapper
    globalInfoSessionsWrapper = document.createElement("div");
    globalInfoSessionsWrapper.id = "global-info-sessions-wrapper";
    document.body.appendChild(globalInfoSessionsWrapper);
  });

  afterEach(() => {
    // Clean up after each test
    document.body.innerHTML = "";
  });

  it("does not render anything if infoSessions is undefined", () => {
    renderGlobalInfoSessions(undefined);

    // Check that nothing is rendered
    expect(globalInfoSessionsWrapper.childElementCount).toBe(0);
  });

  it("does not render anything if infoSessions is null", () => {
    renderGlobalInfoSessions(null);

    // Check that nothing is rendered
    expect(globalInfoSessionsWrapper.childElementCount).toBe(0);
  });

  it("does not render anything if infoSessions is an empty array", () => {
    renderGlobalInfoSessions([]);

    // Check that nothing is rendered
    expect(globalInfoSessionsWrapper.childElementCount).toBe(0);
  });

  it("does not render anything if there are no future info sessions", () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1); // Set a date in the past

    const infoSessions = [
      {
        date: pastDate.toISOString().split("T")[0],
        time: "2:00pm-3:00pm",
        link: "http://example.com/past-session",
      },
    ];

    renderGlobalInfoSessions(infoSessions);

    // Verify that no sessions are rendered
    expect(globalInfoSessionsWrapper.querySelector("ul")).toBeNull();
    expect(globalInfoSessionsWrapper.childElementCount).toBe(0);
  });

  it("renders only future info sessions if mixed with past sessions", () => {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1); // Set a date in the future
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1); // Set a date in the past

    const infoSessions = [
      {
        date: pastDate.toISOString().split("T")[0],
        time: "2:00pm-3:00pm",
        link: "http://example.com/past-session",
      },
      {
        date: futureDate.toISOString().split("T")[0],
        time: "4:00pm-5:00pm",
        link: "http://example.com/future-session",
      },
    ];

    renderGlobalInfoSessions(infoSessions);

    // Check that only the future session is rendered
    const renderedSessions = globalInfoSessionsWrapper.querySelectorAll("li");
    expect(renderedSessions.length).toBe(1);
    expect(renderedSessions[0].querySelector("a").href).toBe(
      "http://example.com/future-session",
    );
  });
});
