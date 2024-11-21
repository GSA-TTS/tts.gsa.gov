// isValidGitBranch.test.js
const { isValidGitBranch } = require("../js/global");

describe("isValidGitBranch", () => {
  test("should return true for valid branch names", () => {
    const validBranches = [
      "main",
      "feature/my-new-feature",
      "fix/bug-1234",
      "hotfix-v1.2.3",
      "release/2024.11.17",
      "branch_with_underscores",
      "branch.with.dots",
      "branch/with/slashes",
    ];

    validBranches.forEach((branch) => {
      expect(isValidGitBranch(branch)).toBe(true);
    });
  });

  test("should return false for invalid branch names", () => {
    const invalidBranches = [
      "branch with spaces", // Spaces are invalid
      "branch*with*asterisks", // Special characters are invalid
      "branch:with:colons", // Special characters are invalid
      "..branch", // Double dots are invalid in branch names
      "branch..name", // Double dots in the middle are invalid
      "-branch-starts-with-dash", // Leading dash is invalid
      "/branch-starts-with-slash", // Leading slash is invalid
    ];

    invalidBranches.forEach((branch) => {
      expect(isValidGitBranch(branch)).toBe(false);
    });
  });

  test("should return false for empty string or null input", () => {
    const invalidInputs = ["", null, undefined];

    invalidInputs.forEach((input) => {
      expect(isValidGitBranch(input)).toBe(false);
    });
  });
});
