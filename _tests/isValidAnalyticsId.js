const { isValidAnalyticsId } = require("../js/global");

describe("isValidAnalyticsId", () => {
  test("should return true for valid Analytics IDs", () => {
    const validAnalyticsIds = [
      "G-123ABC456", // valid Google Analytics ID (G- prefix)
      "UA-12345678-9", // valid Universal Analytics ID (UA- prefix)
      "YT-12345678901234", // valid YouTube Analytics ID (YT- prefix)
      "MO-123456789012345", // valid Measurement Protocol ID (MO- prefix)
      "UA-123456789-0", // valid Universal Analytics ID (with hyphens)
      "UA-ABC-1234", // valid Universal Analytics ID (letters after UA-)
    ];

    validAnalyticsIds.forEach((ga) => {
      expect(isValidAnalyticsId(ga)).toBe(true);
    });
  });

  test("should return false for invalid Analytics IDs", () => {
    const invalidAnalyticsIds = [
      "G123ABC456", // missing hyphen after "G"
      "UA-12345", // too short (missing full format)
      "YT-12345678-9-10", // extra hyphen at the end
      "MO123456", // missing hyphen after "MO"
      "G-@123456", // invalid character ("@" is not allowed)
      "", // empty string is invalid
      null, // null is invalid
      undefined, // undefined is invalid
    ];

    invalidAnalyticsIds.forEach((ga) => {
      expect(isValidAnalyticsId(ga)).toBe(false);
    });
  });
});
