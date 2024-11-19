const { isValidSearchAffiliate } = require("../js/global");

describe("isValidSearchAffiliate", () => {
  test("should return true for valid search affiliates", () => {
    const validAffiliates = [
      "affiliate1", // Valid alphanumeric
      "affiliate-123", // Valid alphanumeric with hyphen
      "aff123iliate", // Valid alphanumeric with hyphen in the middle
      "affiliate", // Valid simple affiliate name
      "search-key", // Valid with a hyphen
      "a", // Valid single character
    ];

    validAffiliates.forEach((affiliate) => {
      expect(isValidSearchAffiliate(affiliate)).toBe(true);
    });
  });

  test("should return false for invalid search affiliates", () => {
    const invalidAffiliates = [
      "affiliate 123", // Space is invalid
      "affiliate@123", // Special characters like @ are invalid
      "affiliate_123", // Underscore is invalid
      "-affiliate", // Starts with hyphen (invalid)
      "affiliate-", // Ends with hyphen (invalid)
      "", // Empty string is invalid
      null, // null is invalid
      undefined, // undefined is invalid
    ];

    invalidAffiliates.forEach((affiliate) => {
      expect(isValidSearchAffiliate(affiliate)).toBe(false);
    });
  });
});
