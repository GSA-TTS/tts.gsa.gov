const { isValidTwitterHandle } = require("../js/global");

describe("isValidTwitterHandle", () => {
  test("should return true for valid Twitter handles", () => {
    const validHandles = [
      "valid_handle", // valid handle with an underscore
      "handle123", // valid handle with numbers
      "A", // single letter (minimum valid length)
      "username12345", // valid handle with 15 characters
    ];

    validHandles.forEach((handle) => {
      expect(isValidTwitterHandle(handle)).toBe(true);
    });
  });

  test("should return false for invalid Twitter handles", () => {
    const invalidHandles = [
      "handle with spaces", // spaces are invalid
      "handle@special", // special characters are invalid
      "this_is_a_very_long_handle_123456", // more than 15 characters
      "", // empty string is invalid
      null, // null is invalid
      undefined, // undefined is invalid
      "1234567890123456", // too long (more than 15 characters)
      "handle#special", // hash symbol is invalid
    ];

    invalidHandles.forEach((handle) => {
      expect(isValidTwitterHandle(handle)).toBe(false);
    });
  });
});
