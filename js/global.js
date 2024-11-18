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

module.exports = {
  isValidGitBranch,
  isValidTwitterHandle,
  isValidDapAgency,
  isValidAnalyticsId,
  isValidSearchKey,
  isValidSearchAffiliate,
  numberWithCommas,
  uswdsIconWithSize,
};
