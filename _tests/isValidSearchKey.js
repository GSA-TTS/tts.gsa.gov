const { isValidSearchKey } = require("../js/global");

describe("isValidSearchKey", () => {
  test("should return true for valid search keys", () => {
    const validKeys = [
      "abc123", // Valid alphanumeric
      "searchKey1", // Valid alphanumeric
      "key=123", // Valid alphanumeric with equal sign
      "key=abc", // Valid alphanumeric with equal sign
    ];

    validKeys.forEach((key) => {
      expect(isValidSearchKey(key)).toBe(true);
    });
  });

  test("should return false for invalid search keys", () => {
    const invalidKeys = [
      "key with spaces", // Spaces are invalid
      "key@special", // Special characters like @ are invalid
      "key=more=equals", // Multiple equal signs in the middle
      "=starting-with-equal", // Starting with an equal sign is invalid
      "valid123=", // Ending with an equal sign with nothing after is invalid
      "1*invalid", // Special characters like * are invalid
      null, // null should return false
      undefined, // undefined should return false
    ];

    invalidKeys.forEach((key) => {
      expect(isValidSearchKey(key)).toBe(false);
    });
  });
});
