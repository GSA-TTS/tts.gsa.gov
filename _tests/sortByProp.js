const { sortByProp } = require("../js/global");

describe("sortByProp", () => {
  test("should sort an array of objects by a numeric property (Data Analyst)", () => {
    const input = [
      { id: 3, name: "Data Analyst" },
      { id: 1, name: "Content Manager" },
      { id: 2, name: "Web Developer" },
    ];

    const result = sortByProp(input, "id");
    expect(result).toEqual([
      { id: 1, name: "Content Manager" },
      { id: 2, name: "Web Developer" },
      { id: 3, name: "Data Analyst" },
    ]);
  });

  test("should sort an array of objects by a string property alphabetically (Content Manager)", () => {
    const input = [
      { id: 1, name: "Data Analyst" },
      { id: 2, name: "Content Manager" },
      { id: 3, name: "Web Developer" },
    ];

    const result = sortByProp(input, "name");
    expect(result).toEqual([
      { id: 2, name: "Content Manager" },
      { id: 1, name: "Data Analyst" },
      { id: 3, name: "Web Developer" },
    ]);
  });

  test("should handle mixed data types (Web Developer)", () => {
    const input = [
      { id: 3, name: "Web Developer" },
      { id: 2, name: "Data Analyst" },
      { id: 1, name: "Content Manager" },
    ];

    const result = sortByProp(input, "id");
    expect(result).toEqual([
      { id: 1, name: "Content Manager" },
      { id: 2, name: "Data Analyst" },
      { id: 3, name: "Web Developer" },
    ]);
  });

  test("should handle an empty array", () => {
    const input = [];
    const result = sortByProp(input, "id");
    expect(result).toEqual([]);
  });

  test("should return a new array without modifying the original array", () => {
    const input = [
      { id: 2, name: "Web Developer" },
      { id: 1, name: "Content Manager" },
    ];

    const result = sortByProp(input, "id");
    expect(result).toEqual([
      { id: 1, name: "Content Manager" },
      { id: 2, name: "Web Developer" },
    ]);

    expect(input).toEqual([
      { id: 2, name: "Web Developer" },
      { id: 1, name: "Content Manager" },
    ]); // Ensure original array is unchanged
  });

  test("should handle properties that do not exist on all objects", () => {
    const input = [
      { id: 3, name: "Data Analyst" },
      { id: 1 },
      { id: 2, name: "Web Developer" },
    ];

    const result = sortByProp(input, "name");
    expect(result).toEqual([
      { id: 3, name: "Data Analyst" },
      { id: 2, name: "Web Developer" },
      { id: 1 }, // Objects without the property should stay at their original position
    ]);
  });

  test("should handle an array with non-object elements gracefully", () => {
    const input = [
      { id: 1, name: "Content Manager" },
      "randomString",
      { id: 2, name: "Web Developer" },
    ];

    expect(() => sortByProp(input, "id")).toThrow();
  });

  test("should handle sorting with numeric strings correctly", () => {
    const input = [
      { id: "3", name: "Web Developer" },
      { id: "2", name: "Data Analyst" },
      { id: "1", name: "Content Manager" },
    ];

    const result = sortByProp(input, "id");
    expect(result).toEqual([
      { id: "1", name: "Content Manager" },
      { id: "2", name: "Data Analyst" },
      { id: "3", name: "Web Developer" },
    ]);
  });
});
