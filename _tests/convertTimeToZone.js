// Import the functions to be tested
const { convertTimeToZone } = require("../js/positions");

describe("convertTimeToZone", () => {
  it("should convert time to Eastern Time", () => {
    const result = convertTimeToZone("12:30pm", "America/New_York");
    expect(result).toBe("12:30 PM");
  });

  it("should convert time to Pacific Time", () => {
    const result = convertTimeToZone("12:30pm", "America/Los_Angeles");
    expect(result).toBe("9:30 AM");
  });
});
