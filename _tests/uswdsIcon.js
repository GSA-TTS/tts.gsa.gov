const { uswdsIcon } = require("../js/global");

describe("uswdsIcon", () => {
  test("should return a valid SVG string for a given icon name", () => {
    const name = "check";
    const result = uswdsIcon(name);
    const expected = `
  <svg class="usa-icon" aria-hidden="true" role="img">
    <use xlink:href="#svg-check"></use>
  </svg>`;
    expect(result).toBe(expected);
  });

  test("should handle an empty string as the icon name", () => {
    const name = "";
    const result = uswdsIcon(name);
    const expected = `
  <svg class="usa-icon" aria-hidden="true" role="img">
    <use xlink:href="#svg-"></use>
  </svg>`;
    expect(result).toBe(expected);
  });

  test("should handle special characters in the icon name", () => {
    const name = "alert-circle";
    const result = uswdsIcon(name);
    const expected = `
  <svg class="usa-icon" aria-hidden="true" role="img">
    <use xlink:href="#svg-alert-circle"></use>
  </svg>`;
    expect(result).toBe(expected);
  });

  test("should handle numeric icon names", () => {
    const name = "123";
    const result = uswdsIcon(name);
    const expected = `
  <svg class="usa-icon" aria-hidden="true" role="img">
    <use xlink:href="#svg-123"></use>
  </svg>`;
    expect(result).toBe(expected);
  });

  test("should throw an error if the name is not a string", () => {
    const invalidInputs = [null, undefined, {}, [], 123];
    invalidInputs.forEach((input) => {
      expect(() => uswdsIcon(input)).toThrow("Icon name must be a string");
    });
  });
});
