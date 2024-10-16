// Import the functions to be tested
const { formatSessionTimes } = require("../js/positions");

// Mock the convertTimeToZone function to return predictable values
jest.mock("../js/positions", () => ({
  ...jest.requireActual("../js/positions"),
  convertTimeToZone: jest.fn((time, zone) => {
    // Mocking conversion based on the time and zone for testing
    if (zone === "America/New_York") {
      return time; // Assume ET times are returned as is for testing
    } else if (zone === "America/Los_Angeles") {
      return time.replace("pm", "PM").replace("am", "AM"); // Mock PT conversion
    }
    return time;
  }),
}));

describe("formatSessionTimes", () => {
  it("should format session times correctly for Eastern and Pacific Time", () => {
    const sessionTime = "12:30pm-1:30pm";
    const expectedOutput = "12:30 PM-1:30 PM ET (9:30 AM-10:30 AM PT)";

    const result = formatSessionTimes(sessionTime);

    expect(result).toBe(expectedOutput);
  });

  it("should handle edge cases, such as different times", () => {
    const sessionTime = "10:00am-11:00am";
    const expectedOutput = "10:00 AM-11:00 AM ET (7:00 AM-8:00 AM PT)";

    const result = formatSessionTimes(sessionTime);

    expect(result).toBe(expectedOutput);
  });

  it("should handle times with AM/PM in various formats", () => {
    const sessionTime = "5:00pm-6:00pm";
    const expectedOutput = "5:00 PM-6:00 PM ET (2:00 PM-3:00 PM PT)";

    const result = formatSessionTimes(sessionTime);

    expect(result).toBe(expectedOutput);
  });
});
