// Import the functions to be tested
const environmentValidators = require("../js/environmentValidators");

describe("Valid git branch", () => {
  it("should be a valid branch", () => {
    const result = environmentValidators.isValidGitBranch(
      "wesley-dean-was-here",
    );
    expect(result).toBe(true);
  });

  it("should be invalid (empty)", () => {
    const result = environmentValidators.isValidGitBranch("");
    expect(result).toBe(false);
  });

  it("should be invalid (invalid character)", () => {
    const result = environmentValidators.isValidGitBranch(
      "You Shall Not Pass!",
    );
    expect(result).toBe(false);
  });
});

describe("Valid Twitter / X Handle", () => {
  it("should be a valid handle", () => {
    const result = environmentValidators.isValidTwitterHandle("Abcdefghij1");
    expect(result).toBe(true);
  });

  it("should be invalid (empty)", () => {
    const result = environmentValidators.isValidTwitterHandle("");
    expect(result).toBe(false);
  });

  it("should be invalid (invalid characters)", () => {
    const result =
      environmentValidators.isValidTwitterHandle("Wes Dean Rocks!");
    expect(result).toBe(false);
  });

  it("should be invalid (too long)", () => {
    const result = environmentValidators.isValidTwitterHandle(
      "abcdefghijklmnopqrstuvwxyz",
    );
    expect(result).toBe(false);
  });
});

describe("Valid DAP agency", () => {
  it("should be a valid agency", () => {
    const result = environmentValidators.isValidDapAgency("Abcdefghij1");
    expect(result).toBe(true);
  });

  it("should be invalid (empty)", () => {
    const result = environmentValidators.isValidDapAgency("");
    expect(result).toBe(false);
  });

  it("should be invalid (invalid characters)", () => {
    const result = environmentValidators.isValidDapAgency("Wes Dean Rocks!");
    expect(result).toBe(false);
  });

  it("should be invalid (too long)", () => {
    const result = environmentValidators.isValidDapAgency("");
    expect(result).toBe(false);
  });
});

describe("Google Site Verification Tokens", () => {
  it("should be a valid token", () => {
    const result = environmentValidators.isValidVerificationToken(
      "abcdefghij01234567890abcdefghij1234567890abc",
    );
    expect(result).toBe(true);
  });

  it("should be invalid (too short)", () => {
    const result = environmentValidators.isValidVerificationToken("abcdefghij");
    expect(result).toBe(false);
  });

  it("should be invalid (empty)", () => {
    const result = environmentValidators.isValidVerificationToken("");
    expect(result).toBe(false);
  });

  it("should be invalid (too long)", () => {
    const result = environmentValidators.isValidVerificationToken(
      "abcdefghij01234567890abcdefghij1234567890abcdefghij",
    );
    expect(result).toBe(false);
  });

  it("should be invalid (invalid characters)", () => {
    const result = environmentValidators.isValidVerificationToken(
      "abcdefghij01234567890abcdefghij01234567890!!!",
    );
    expect(result).toBe(false);
  });
});

describe("Valid search key", () => {
  it("should be a valid key (no trailing =)", () => {
    const result = environmentValidators.isValidSearchKey(
      "abcdefghij01234567890abcdefghij1234567890abc",
    );
    expect(result).toBe(true);
  });

  it("should be a valid key (trailing =)", () => {
    const result = environmentValidators.isValidSearchKey(
      "abcdefghij01234567890abcdefghij1234567890abc=",
    );
    expect(result).toBe(true);
  });

  it("should be invalid (empty)", () => {
    const result = environmentValidators.isValidSearchKey("");
    expect(result).toBe(false);
  });

  it("should be invalid (invalid characters)", () => {
    const result = environmentValidators.isValidSearchKey(
      "Wes Dean is still going with these tests!!",
    );
    expect(result).toBe(false);
  });
});

describe("Valid search affiliate", () => {
  it("should be a valid affiliate", () => {
    const result = environmentValidators.isValidSearchAffiliate(
      "abcdefghij01234567890abcdefghij1234567890abc",
    );
    expect(result).toBe(true);
  });

  it("should be invalid (empty)", () => {
    const result = environmentValidators.isValidSearchAffiliate("");
    expect(result).toBe(false);
  });

  it("should be invalid (invalid characters)", () => {
    const result = environmentValidators.isValidSearchAffiliate(
      "Wes Dean is still going with these tests!!",
    );
    expect(result).toBe(false);
  });
});
