const { isValidVerificationToken } = require("../js/global");

describe("isValidVerificationToken", () => {
  test("should return true for valid verification tokens", () => {
    const validTokens = [
      "abcdefghijklmnopqrstuvwxyz1234567890-_ABCDE", // 43 valid characters
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ_1234567890-abcde", // Mixed case with valid characters
      "1234567890abcdefghijklmnopqrstuvwxyz_-ABCDE", // Numbers and valid special characters
    ];

    validTokens.forEach((token) => {
      expect(isValidVerificationToken(token)).toBe(true);
    });
  });

  test("should return false for invalid verification tokens", () => {
    const invalidTokens = [
      "", // Empty string
      "a".repeat(42), // Just below required length
      "a".repeat(44), // Just above required length
      "abc123!@#$", // Contains invalid special characters
      " abc123def456ghi789jkl012mno345pqr678stu90-", // Contains whitespace
      null, // Null value
      undefined, // Undefined value
    ];

    invalidTokens.forEach((token) => {
      expect(isValidVerificationToken(token)).toBe(false);
    });
  });
});
