const { minNumber } = require("../js/global");

describe("minNumber", () => {
  test("should return the smallest number from a list of numbers", () => {
    const result = minNumber(5, 10, 3, 8, 2);
    expect(result).toBe(2);
  });

  test("should return the only number when a single number is provided", () => {
    const result = minNumber(7);
    expect(result).toBe(7);
  });

  test("should handle negative numbers correctly", () => {
    const result = minNumber(-10, -5, -30, 0);
    expect(result).toBe(-30);
  });

  test("should handle a mix of positive and negative numbers", () => {
    const result = minNumber(15, -20, 35, 0, -5);
    expect(result).toBe(-20);
  });

  test("should return NaN if any of the inputs are not numbers", () => {
    const result = minNumber(5, "a", 10, {}, []);
    expect(result).toBeNaN();
  });
});
