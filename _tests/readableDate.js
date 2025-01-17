const { DateTime } = require("luxon");
const { readableDate } = require("../js/global");

describe("readableDate", () => {
  test('should return the formatted date in "LLL dd yyyy" format for valid dates', () => {
    const date = new Date("2024-11-21T15:30:00Z"); // Example date
    const expected = DateTime.fromJSDate(date).toFormat("LLL dd yyyy");
    expect(readableDate(date)).toBe(expected);
  });

  test("should return consistent output regardless of input time zone", () => {
    const date = new Date("2024-07-04T12:00:00Z");
    const expected = DateTime.fromJSDate(date).toFormat("LLL dd yyyy");
    expect(readableDate(date)).toBe(expected);
  });

  test("should throw an error when input is not a valid date", () => {
    const invalidInputs = [null, undefined, "invalid date", {}, [], 12345];
    invalidInputs.forEach((input) => {
      expect(() => readableDate(input)).toThrow("Invalid date object");
    });
  });

  test("should handle edge case dates correctly", () => {
    const edgeDates = [
      new Date("1970-01-01T00:00:00Z"), // Unix epoch start
      new Date("9999-12-31T23:59:59Z"), // Far future date
    ];

    edgeDates.forEach((date) => {
      const expected = DateTime.fromJSDate(date).toFormat("LLL dd yyyy");
      expect(readableDate(date)).toBe(expected);
    });
  });
});
