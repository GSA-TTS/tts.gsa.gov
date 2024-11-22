const { DateTime } = require("luxon");
const path = require("path");
const Image = require("@11ty/eleventy-img");

/**
 * Validates a Git branch name based on allowed characters and structure.
 * @param {string} branch - The branch name to validate.
 * @returns {boolean} True if the branch name is valid, false otherwise.
 */
function isValidGitBranch(branch) {
  // Check if the input is a valid string and not empty
  if (typeof branch !== "string" || branch.trim() === "") {
    return false; // Empty or non-string inputs should return false
  }

  // Regular expression to allow only valid characters and to ensure the branch doesn't start or end with a slash or dash
  const validGitBranch = /^[a-zA-Z0-9_\-\.\/]+$/;

  // Ensure the branch name doesn't start or end with a slash or dash, or include two consecutive periods
  if (
    branch.includes("..") ||
    branch.startsWith("-") ||
    branch.endsWith("-") ||
    branch.startsWith("/") ||
    branch.endsWith("/")
  ) {
    return false; // Invalid if it starts or ends with a slash or dash
  }

  // Test the branch with the regular expression
  return validGitBranch.test(branch);
}

/**
 * Validates a Twitter handle.
 * @param {string|null|undefined} handle - The Twitter handle to validate.
 * @returns {boolean} True if the handle is valid, false otherwise.
 */
function isValidTwitterHandle(handle) {
  if (handle === null || handle === undefined) {
    return false;
  }

  const validTwitterHandle = /^\w{1,15}$/;
  return validTwitterHandle.test(handle);
}

/**
 * Validates a DAP agency identifier.
 * @param {string|null|undefined} agency - The agency identifier to validate.
 * @returns {boolean} True if the agency is valid, false otherwise.
 */
function isValidDapAgency(agency) {
  if (agency === null || agency === undefined) {
    return false;
  }

  const validDapAgency = /^\w{1,15}$/;
  return validDapAgency.test(agency);
}

/**
 * Validates a Google Analytics ID.
 * @param {string|null|undefined} ga - The Google Analytics ID to validate.
 * @returns {boolean} True if the ID is valid, false otherwise.
 */
function isValidAnalyticsId(ga) {
  if (ga === null || ga === undefined) {
    return false;
  }

  // Adjusted regex to enforce stricter matching and allow only valid formats
  const validAnalyticsId =
    /^(G-[a-zA-Z0-9]+|UA-[a-zA-Z0-9]{1,}-\d{1,}|YT-[a-zA-Z0-9]+|MO-[a-zA-Z0-9]+)$/;
  return validAnalyticsId.test(ga);
}

/**
 * Validates a search access key.
 * @param {string|null|undefined} accessKey - The access key to validate.
 * @returns {boolean} True if the key is valid, false otherwise.
 */
function isValidSearchKey(accessKey) {
  if (accessKey === null || accessKey === undefined) {
    return false;
  }

  const validSearchKey = /^[0-9a-zA-Z]+(=[0-9a-zA-Z]+)?$/;
  return validSearchKey.test(accessKey);
}

/**
 * Validates a search affiliate identifier.
 * @param {string|null|undefined} affiliate - The affiliate identifier to validate.
 * @returns {boolean} True if the identifier is valid, false otherwise.
 */
function isValidSearchAffiliate(affiliate) {
  if (affiliate === null || affiliate === undefined) {
    return false;
  }

  const validSearchAffiliate = /^[a-z0-9]+([\-]?[a-z0-9]+)*$/;
  return validSearchAffiliate.test(affiliate);
}

/**
 * Validates a verification token.
 * @param {string|null|undefined} token - The token to validate.
 * @returns {boolean} True if the token is valid, false otherwise.
 */
function isValidVerificationToken(token) {
  if (token === null || token === undefined) {
    return false;
  }

  const validToken = /^[A-Za-z0-9_-]{43}$/;
  return validToken.test(token);
}

/**
 * Formats a number with commas as thousands separators.
 * @param {number} number - The number to format.
 * @returns {string|number} The formatted number or the input if not a number.
 */
function numberWithCommas(number) {
  // Ensure the input is a number
  if (typeof number !== "number") {
    return number;
  }

  // Separate the integer and decimal parts
  const [integerPart, decimalPart] = number.toString().split(".");

  // Format the integer part with commas
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // If there's no decimal part, return the formatted integer part only
  if (!decimalPart) {
    return formattedInteger;
  }

  // If there's a decimal part, return the formatted integer part with the decimal part
  return `${formattedInteger}.${decimalPart}`;
}

/**
 * Sorts an array of objects by a specified property.
 * @param {Array} values - The array to sort.
 * @param {string} prop - The property to sort by.
 * @returns {Array} The sorted array.
 * @throws {TypeError} If input is not an array or elements are not objects.
 */
function sortByProp(values, prop) {
  if (!Array.isArray(values)) {
    throw new TypeError("Input must be an array");
  }

  let vals = [...values];
  return vals.sort((a, b) => {
    if (
      typeof a !== "object" ||
      a === null ||
      typeof b !== "object" ||
      b === null
    ) {
      throw new TypeError("Array elements must be objects");
    }

    const aProp = a[prop] !== undefined ? a[prop] : null;
    const bProp = b[prop] !== undefined ? b[prop] : null;

    if (typeof aProp === "string" && typeof bProp === "string") {
      return aProp.localeCompare(bProp);
    } else if (aProp === null) {
      return 1; // Place objects without the property at the end
    } else if (bProp === null) {
      return -1;
    } else {
      return Math.sign(aProp - bProp);
    }
  });
}

/**
 * Converts a JavaScript Date object into a readable date string in the format `dd LLL yyyy`.
 *
 * @param {Date} dateObj - A valid JavaScript Date object.
 * @returns {string} - A formatted date string, e.g., `21 Nov 2024`.
 * @throws {Error} If the provided dateObj is not a valid Date object.
 */
function readableDate(dateObj) {
  if (!(dateObj instanceof Date) || isNaN(dateObj)) {
    throw new Error("Invalid date object");
  }
  return DateTime.fromJSDate(dateObj, { zone: "America/New_York" }).toFormat(
    "dd LLL yyyy",
  );
}

/**
 * Determines the state of an entity based on opening and closing dates.
 *
 * @param {string|null} opens - The opening date in ISO format (e.g., `2024-11-21`).
 * @param {string|null} closes - The closing date in ISO format or null if it never closes.
 * @returns {string} - The state: `open`, `closed`, `upcoming`, or `unknown`.
 */
function getStateFromDates(opens, closes) {
  if (!opens && !closes) {
    return "unknown";
  }

  // Get the current date in "America/New_York" timezone
  let now_date = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
  );

  // Parse the 'opens' date in UTC and convert to local time
  let opens_date = opens ? new Date(opens) : null;

  // Parse the 'closes' date in UTC and set time to 11:59:59 PM in local time
  let closes_date = null;
  if (closes) {
    closes_date = new Date(closes);
    // Set the time to 11:59:59 PM in local time
    closes_date.setHours(23, 59, 59, 999);
  }

  // Convert opens_date and closes_date to local time for comparison
  if (opens_date) {
    // Adjust opens_date to local timezone
    opens_date = new Date(
      opens_date.toLocaleString("en-US", { timeZone: "America/New_York" }),
    );

    // Adjust closes_date to local timezone
    if (closes_date) {
      closes_date = new Date(
        closes_date.toLocaleString("en-US", { timeZone: "America/New_York" }),
      );
    }

    // Check if it's open or closed
    let isOpen = now_date >= opens_date;
    let isClosed = closes_date && now_date > closes_date;

    if (isOpen && !isClosed) {
      return "open";
    } else if (isClosed) {
      return "closed";
    } else {
      return "upcoming";
    }
  }

  return "unknown"; // Default fallback if no conditions are met
}

/**
 * Converts a JavaScript Date object into a string formatted as `yyyy-LL-dd`.
 *
 * @param {Date} dateObj - A valid JavaScript Date object.
 * @returns {string} - A string in the format `yyyy-LL-dd` (e.g., `2024-11-21`).
 */
function htmlDateString(dateObj) {
  if (dateObj !== undefined && dateObj !== null) {
    let dateTime = DateTime.fromJSDate(dateObj);

    // If working locally, add one day to the date to match what is in the actual environments.
    if (baseUrl.includes("localhost")) {
      dateTime = dateTime.plus({ days: 1 });
      return dateTime.toFormat("yyyy-LL-dd");
    } else {
      return dateTime.toFormat("yyyy-LL-dd");
    }
  }
}

/**
 * Returns the smallest number from a list of numbers.
 *
 * @param {...number} numbers - A list of numbers.
 * @returns {number} - The smallest number in the list.
 */
function minNumber(...numbers) {
  return Math.min.apply(null, numbers);
}

/**
 * Generates a USWDS icon with a specified size.
 *
 * @param {string} name - The name of the icon.
 * @param {string} size - The size of the icon (e.g., `small`, `large`).
 * @returns {string} - The HTML string for the icon SVG.
 * @throws {Error} If the icon name is not a string.
 */
function uswdsIconWithSize(name, size) {
  if (typeof name !== "string") {
    throw new Error("Icon name must be a string");
  }

  return `
    <svg class="usa-icon usa-icon--size-${size}" aria-hidden="true" role="img">
      <use xlink:href="#svg-${name}"></use>
    </svg>`;
}

/**
 * Generates a USWDS icon with default sizing.
 *
 * @param {string} name - The name of the icon.
 * @returns {string} - The HTML string for the icon SVG.
 * @throws {Error} If the icon name is not a string.
 */
function uswdsIcon(name) {
  if (typeof name !== "string") {
    throw new Error("Icon name must be a string");
  }
  return `
  <svg class="usa-icon" aria-hidden="true" role="img">
    <use xlink:href="#svg-${name}"></use>
  </svg>`;
}

/**
 * Generates an HTML `<img>` tag with optional classes, alt text, styling, and image dimensions.
 * The function processes the image path, adds a prefix if `BASEURL` is defined in the environment,
 * and supports the `contain` object-fit style along with custom height and width attributes.
 *
 * @param {string} src - The source path of the image (relative or absolute).
 * @param {string} cls - The class attribute for the image element.
 * @param {string} alt - The alt text for the image.
 * @param {boolean} containFit - If true, applies `object-fit: contain` to the image.
 * @param {number} [height] - The height of the image in pixels (optional).
 * @param {number} [width] - The width of the image in pixels (optional).
 * @returns {Promise<string>} A promise that resolves to the HTML string of the `<img>` tag.
 * @throws {Error} If the image processing fails or invalid parameters are provided.
 */
async function imageWithClassShortcode(
  src,
  cls,
  alt,
  containFit,
  height,
  width,
) {
  let pathPrefix = "";
  let style = "";
  let imgHeight = "";
  let imgWidth = "";

  if (process.env.BASEURL) {
    pathPrefix = process.env.BASEURL;
  }

  const ext = path.extname(src);
  const fileType = ext.replace(".", "");

  const metadata = await Image(src, {
    formats: [fileType],
    outputDir: "./_site/img/",
  });

  const data = metadata[fileType] ? metadata[fileType][0] : metadata.jpeg[0];

  if (containFit) {
    style = 'style="object-fit:contain;"';
  }

  if (height) {
    imgHeight = `height="${height}"`;
  }

  if (width) {
    imgWidth = `width="${width}"`;
  }

  // Building the img tag and ensuring there's no trailing space.
  const imgTag = `<img src="${pathPrefix}${data.url}" class="${cls}" alt="${alt}" loading="lazy" decoding="async"${style ? ` ${style}` : ""}${imgHeight ? ` ${imgHeight}` : ""}${imgWidth ? ` ${imgWidth}` : ""}>`;

  return imgTag;
}

module.exports = {
  isValidGitBranch,
  isValidTwitterHandle,
  isValidDapAgency,
  isValidAnalyticsId,
  isValidSearchKey,
  isValidSearchAffiliate,
  isValidVerificationToken,
  numberWithCommas,
  uswdsIconWithSize,
  sortByProp,
  readableDate,
  getStateFromDates,
  htmlDateString,
  minNumber,
  uswdsIcon,
  imageWithClassShortcode,
};
