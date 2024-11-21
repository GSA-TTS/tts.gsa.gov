const { getStateFromDates } = require("../js/global");

describe("getStateFromDates", () => {
  beforeEach(() => {
    // Mock the system time to ensure consistent results
    jest.useFakeTimers().setSystemTime(new Date("2024-11-21T12:00:00Z")); // Mock current time: 7 AM ET
  });

  afterEach(() => {
    jest.useRealTimers(); // Restore real timers
  });

  test('should return "unknown" if both opens and closes are undefined', () => {
    expect(getStateFromDates(null, null)).toBe("unknown");
    expect(getStateFromDates(undefined, undefined)).toBe("unknown");
  });

  test('should return "upcoming" if now is before opens', () => {
    const opens = "2024-11-22T00:00:00Z"; // Opens tomorrow at midnight UTC
    expect(getStateFromDates(opens, null)).toBe("upcoming");
  });

  test('should return "open" if now is after opens and before closes', () => {
    const opens = "2024-11-20T00:00:00Z"; // Opened yesterday at midnight UTC
    const closes = "2024-11-22T00:00:00Z"; // Closes tomorrow at midnight UTC
    expect(getStateFromDates(opens, closes)).toBe("open");
  });

  test('should return "closed" if now is after closes', () => {
    const opens = "2024-11-19T00:00:00Z"; // Opened two days ago at midnight UTC
    const closes = "2024-11-20T23:59:59Z"; // Closed yesterday at 11:59:59 PM UTC
    expect(getStateFromDates(opens, closes)).toBe("closed");
  });

  test("should handle cases with only opens defined", () => {
    const opens = "2024-11-20T00:00:00Z"; // Opened yesterday at midnight UTC
    expect(getStateFromDates(opens, null)).toBe("open");
  });

  test("should handle cases with only closes defined", () => {
    const closes = "2024-11-22T00:00:00Z"; // Closes tomorrow at midnight UTC
    expect(getStateFromDates(null, closes)).toBe("unknown"); // No opens means "unknown"
  });

  test("should handle edge cases for opens and closes on the same day", () => {
    const opens = "2024-11-21T00:00:00Z"; // Opens today at midnight UTC
    const closes = "2024-11-21T23:59:59Z"; // Closes today at 11:59:59 PM UTC
    expect(getStateFromDates(opens, closes)).toBe("open"); // Current time is 7 AM ET
  });
});
