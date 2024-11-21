/**
 * @jest-environment jsdom
 */

const { renderInfoSessions } = require("../js/positions");

describe("renderInfoSessions", () => {
  let linkItem;

  beforeEach(() => {
    // Create a mock container element for each test
    linkItem = document.createElement("div");
  });

  it("renders valid upcoming info sessions into the link item", () => {
    const mockInfoSessions = [
      {
        date: "2024-12-15T00:00:00Z",
        time: "2:00pm-3:00pm",
        link: "https://example.com/session1",
      },
      {
        date: "2024-12-20T00:00:00Z",
        time: "1:00pm-2:00pm",
        link: "https://example.com/session2",
      },
    ];

    renderInfoSessions(mockInfoSessions, linkItem, "Software Engineer");
    const listItems = linkItem.querySelectorAll("ul li");

    expect(listItems.length).toBe(2);
    expect(listItems[0].querySelector("a").href).toBe(mockInfoSessions[0].link);
    expect(listItems[0].querySelector("a").innerText).toContain("Sunday");
    expect(listItems[1].querySelector("a").href).toBe(mockInfoSessions[1].link);
  });

  it("does not render anything if infoSessions is an empty array", () => {
    const mockInfoSessions = [];

    renderInfoSessions(mockInfoSessions, linkItem, "Software Engineer");
    expect(linkItem.childElementCount).toBe(0);
  });

  it("does not render anything if infoSessions is undefined", () => {
    renderInfoSessions(undefined, linkItem, "Software Engineer");
    expect(linkItem.childElementCount).toBe(0);
  });

  it("does not render anything if infoSessions is null", () => {
    renderInfoSessions(null, linkItem, "Software Engineer");
    expect(linkItem.childElementCount).toBe(0);
  });

  it("does not render past info sessions", () => {
    const mockInfoSessions = [
      {
        date: "2023-12-01T00:00:00Z",
        time: "10:00am-11:00am",
        link: "https://example.com/session1",
      },
      {
        date: "2023-12-05T00:00:00Z",
        time: "1:00pm-2:00pm",
        link: "https://example.com/session2",
      },
    ];

    renderInfoSessions(mockInfoSessions, linkItem, "Software Engineer");
    expect(linkItem.childElementCount).toBe(0);
  });

  it("renders only future info sessions when mixed with past sessions", () => {
    const mockInfoSessions = [
      {
        date: "2023-12-01T00:00:00Z",
        time: "10:00am-11:00am",
        link: "https://example.com/past-session",
      },
      {
        date: "2024-12-15T00:00:00Z",
        time: "2:00pm-3:00pm",
        link: "https://example.com/future-session",
      },
    ];

    renderInfoSessions(mockInfoSessions, linkItem, "Software Engineer");
    const listItems = linkItem.querySelectorAll("ul li");

    expect(listItems.length).toBe(1);
    expect(listItems[0].querySelector("a").href).toBe(
      "https://example.com/future-session",
    );
  });

  it("renders a styled wrapper with correct classes for /join/ page layout", () => {
    const mockInfoSessions = [
      {
        date: "2024-12-15T00:00:00Z",
        time: "2:00pm-3:00pm",
        link: "https://example.com/session1",
      },
    ];

    renderInfoSessions(mockInfoSessions, linkItem, "Product Manager", "join");
    const wrapper = linkItem.querySelector("aside.usa-alert-info");

    expect(wrapper).not.toBeNull();
    expect(wrapper.querySelector(".usa-alert-body p").innerHTML).toContain(
      "Upcoming or ongoing info sessions for Product Manager",
    );
  });

  it("renders a styled wrapper with correct classes for position layout", () => {
    const mockInfoSessions = [
      {
        date: "2024-12-15T00:00:00Z",
        time: "2:00pm-3:00pm",
        link: "https://example.com/session1",
      },
    ];

    renderInfoSessions(mockInfoSessions, linkItem, "Data Analyst", "position");
    const wrapper = linkItem.querySelector(".info-session-summary-box");

    expect(wrapper).not.toBeNull();
    expect(wrapper.querySelector("p").innerHTML).toContain(
      "Attend an information session for this position",
    );
  });
});
