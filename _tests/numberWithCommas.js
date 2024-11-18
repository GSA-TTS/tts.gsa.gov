const { numberWithCommas } = require("../js/global");

describe("numberWithCommas", () => {
  test("should format numbers with commas", () => {
    const result = numberWithCommas(1000);
    expect(result).toBe("1,000");
  });

  test("should format large numbers with commas", () => {
    const result = numberWithCommas(123456789);
    expect(result).toBe("123,456,789");
  });

  test("should handle negative numbers correctly", () => {
    const result = numberWithCommas(-1000);
    expect(result).toBe("-1,000");
  });

  test("should handle decimal numbers correctly", () => {
    const result = numberWithCommas(1234.5678);
    expect(result).toBe("1,234.5678"); // Should pass now
  });

  test("should return non-number values unchanged", () => {
    const resultString = numberWithCommas("hello");
    const resultNull = numberWithCommas(null);
    const resultUndefined = numberWithCommas(undefined);
    const resultObject = numberWithCommas({});

    expect(resultString).toBe("hello");
    expect(resultNull).toBe(null);
    expect(resultUndefined).toBe(undefined);
    expect(resultObject).toEqual({}); // Use toEqual for object comparison
  });

  test('should return 0 as "0"', () => {
    const result = numberWithCommas(0);
    expect(result).toBe("0");
  });

  test("should return large decimal numbers correctly", () => {
    const result = numberWithCommas(1234567.89);
    expect(result).toBe("1,234,567.89");
  });
});
