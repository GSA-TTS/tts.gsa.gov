const path = require("path");
const Image = require("@11ty/eleventy-img");
const { imageWithClassShortcode } = require("../js/global");

jest.mock("@11ty/eleventy-img");

describe("imageWithClassShortcode", () => {
  beforeEach(() => {
    // Clear environment variables before each test
    delete process.env.BASEURL;
  });

  it("should generate an img tag with all parameters", async () => {
    const mockMetadata = {
      jpeg: [{ url: "/img/test-image.jpg" }],
    };
    Image.mockResolvedValue(mockMetadata);

    const result = await imageWithClassShortcode(
      "test-image.jpg",
      "my-class",
      "Test Image",
      true,
      300,
      500,
    );

    expect(result).toBe(
      '<img src="/img/test-image.jpg" class="my-class" alt="Test Image" loading="lazy" decoding="async" style="object-fit:contain;" height="300" width="500">',
    );
  });

  it("should add BASEURL prefix when environment variable is set", async () => {
    process.env.BASEURL = "https://example.com";
    const mockMetadata = {
      jpeg: [{ url: "/img/test-image.jpg" }],
    };
    Image.mockResolvedValue(mockMetadata);

    const result = await imageWithClassShortcode(
      "test-image.jpg",
      "my-class",
      "Test Image",
      true,
      300,
      500,
    );

    expect(result).toBe(
      '<img src="https://example.com/img/test-image.jpg" class="my-class" alt="Test Image" loading="lazy" decoding="async" style="object-fit:contain;" height="300" width="500">',
    );
  });

  it("should return an img tag without height and width if not provided", async () => {
    const mockMetadata = {
      jpeg: [{ url: "/img/test-image.jpg" }],
    };
    Image.mockResolvedValue(mockMetadata);

    const result = await imageWithClassShortcode(
      "test-image.jpg",
      "my-class",
      "Test Image",
      false,
    );

    expect(result).toBe(
      '<img src="/img/test-image.jpg" class="my-class" alt="Test Image" loading="lazy" decoding="async">',
    );
  });

  it("should throw an error if image processing fails", async () => {
    Image.mockRejectedValue(new Error("Image processing failed"));

    await expect(
      imageWithClassShortcode("test-image.jpg", "my-class", "Test Image", true),
    ).rejects.toThrow("Image processing failed");
  });

  it("should handle missing image extension gracefully", async () => {
    const mockMetadata = {
      jpeg: [{ url: "/img/test-image.jpg" }],
    };
    Image.mockResolvedValue(mockMetadata);

    const result = await imageWithClassShortcode(
      "test-image",
      "my-class",
      "Test Image",
      false,
    );

    expect(result).toBe(
      '<img src="/img/test-image.jpg" class="my-class" alt="Test Image" loading="lazy" decoding="async">',
    );
  });
});
