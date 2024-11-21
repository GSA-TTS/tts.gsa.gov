const { isValidDapAgency } = require("../js/global");

describe("isValidDapAgency", () => {
  test("should return true for valid agency names", () => {
    const validAgencies = [
      "agency123", // valid agency name with numbers
      "agency_abc", // valid agency name with an underscore
      "agencyX", // valid agency name with a single letter (minimum valid length)
      "shortname", // valid agency name (minimum length)
      "agencyOneTwo123", // valid agency name (15 characters max)
    ];

    validAgencies.forEach((agency) => {
      expect(isValidDapAgency(agency)).toBe(true);
    });
  });

  test("should return false for invalid agency names", () => {
    const invalidAgencies = [
      "agency with spaces", // spaces are invalid
      "agency@special", // special characters are invalid
      "this_is_a_very_long_agency_name_123456", // more than 15 characters
      "", // empty string is invalid
      null, // null is invalid
      undefined, // undefined is invalid
      "agency#special", // hash symbol is invalid
      "agency!@#$", // special characters are invalid
    ];

    invalidAgencies.forEach((agency) => {
      expect(isValidDapAgency(agency)).toBe(false);
    });
  });
});
