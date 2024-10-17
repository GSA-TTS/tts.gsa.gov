const { formatDate } = require("../js/positions");

describe("formatDate", () => {
  it("should format a Date object into yyyy-mm-dd", () => {
    const date1 = new Date("2024-10-16T00:00:00");
    expect(formatDate(date1)).toBe("2024-10-16");
  });
});
