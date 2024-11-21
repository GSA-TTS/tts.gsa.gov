const { DateTime } = require("luxon");

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

function isValidTwitterHandle(handle) {
  if (handle === null || handle === undefined) {
    return false;
  }

  const validTwitterHandle = /^\w{1,15}$/;
  return validTwitterHandle.test(handle);
}

function isValidDapAgency(agency) {
  if (agency === null || agency === undefined) {
    return false;
  }

  const validDapAgency = /^\w{1,15}$/;
  return validDapAgency.test(agency);
}

function isValidAnalyticsId(ga) {
  if (ga === null || ga === undefined) {
    return false;
  }

  // Adjusted regex to enforce stricter matching and allow only valid formats
  const validAnalyticsId =
    /^(G-[a-zA-Z0-9]+|UA-[a-zA-Z0-9]{1,}-\d{1,}|YT-[a-zA-Z0-9]+|MO-[a-zA-Z0-9]+)$/;
  return validAnalyticsId.test(ga);
}

function isValidSearchKey(accessKey) {
  if (accessKey === null || accessKey === undefined) {
    return false;
  }

  const validSearchKey = /^[0-9a-zA-Z]+(=[0-9a-zA-Z]+)?$/;
  return validSearchKey.test(accessKey);
}

function isValidSearchAffiliate(affiliate) {
  if (affiliate === null || affiliate === undefined) {
    return false;
  }

  const validSearchAffiliate = /^[a-z0-9]+([\-]?[a-z0-9]+)*$/;
  return validSearchAffiliate.test(affiliate);
}

function isValidVerificationToken(token) {
  if (token === null || token === undefined) {
    return false;
  }

  const validToken = /^[A-Za-z0-9_-]{43}$/;
  return validToken.test(token);
}


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

function uswdsIconWithSize(name, size) {
  return `
    <svg class="usa-icon usa-icon--size-${size}" aria-hidden="true" role="img">
      <use xlink:href="#svg-${name}"></use>
    </svg>`;
}

// Template function used to sort a collection by a certain property
// Ex: {% assign sortedJobs = collection.jobs | sortByProp: "title" %}
function sortByProp(values, prop) {
  if (!Array.isArray(values)) {
    throw new TypeError("Input must be an array");
  }

  let vals = [...values];
  return vals.sort((a, b) => {
    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
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

function readableDate(dateObj) {
  if (!(dateObj instanceof Date) || isNaN(dateObj)) {
    throw new Error('Invalid date object');
  }
  return DateTime.fromJSDate(dateObj, { zone: 'America/New_York' }).toFormat('dd LLL yyyy');
}

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
};

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
  htmlDateString
};
