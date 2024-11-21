const { uswdsIconWithSize } = require("../js/global");

describe("uswdsIconWithSize", () => {
  test("should return correct SVG for a small icon", () => {
    const name = "home";
    const size = "small";

    const result = uswdsIconWithSize(name, size);

    expect(result).toContain('class="usa-icon usa-icon--size-small"'); // Check if the size class is correct
    expect(result).toContain('xlink:href="#svg-home"'); // Check if the icon name is correctly referenced
  });

  test("should return correct SVG for a medium icon", () => {
    const name = "search";
    const size = "medium";

    const result = uswdsIconWithSize(name, size);

    expect(result).toContain('class="usa-icon usa-icon--size-medium"'); // Check if the size class is correct
    expect(result).toContain('xlink:href="#svg-search"'); // Check if the icon name is correctly referenced
  });

  test("should return correct SVG for a large icon", () => {
    const name = "settings";
    const size = "large";

    const result = uswdsIconWithSize(name, size);

    expect(result).toContain('class="usa-icon usa-icon--size-large"'); // Check if the size class is correct
    expect(result).toContain('xlink:href="#svg-settings"'); // Check if the icon name is correctly referenced
  });

  test("should return an empty SVG for invalid size", () => {
    const name = "user";
    const size = "invalid-size";

    const result = uswdsIconWithSize(name, size);

    expect(result).toContain('class="usa-icon usa-icon--size-invalid-size"'); // It should not break, just append the invalid size
    expect(result).toContain('xlink:href="#svg-user"'); // Icon name should still be correct
  });

  test("should handle empty icon name", () => {
    const name = "";
    const size = "medium";

    const result = uswdsIconWithSize(name, size);

    expect(result).toContain('xlink:href="#svg-"'); // Should handle empty name gracefully
    expect(result).toContain('class="usa-icon usa-icon--size-medium"'); // Size should still be handled correctly
  });
});
