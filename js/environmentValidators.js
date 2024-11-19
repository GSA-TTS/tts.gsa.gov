function isValidGitBranch(branch) {
  const validGitBranch = /^[a-zA-Z0-9_\-\.\/]+$/;
  return validGitBranch.test(branch);
}

function isValidTwitterHandle(handle) {
  const validTwitterHandle = /^\w{1,15}$/;
  return validTwitterHandle.test(handle);
}

function isValidDapAgency(agency) {
  const validDapAgency = /^\w{1,15}$/;
  return validDapAgency.test(agency);
}

function isValidAnalyticsId(ga) {
  const validAnalyticsId = /^(G|UA|YT|MO)-[a-zA-Z0-9-]+$/;
  return validAnalyticsId.test(ga);
}

function isValidVerificationToken(token) {
  const validToken = /^[a-zA-Z0-9_-]{42,44}$/;
  return validToken.test(token);
}

function isValidSearchKey(accessKey) {
  const validSearchKey = /^[0-9a-zA-Z]{1,}=*$/;
  return validSearchKey.test(accessKey);
}

function isValidSearchAffiliate(affiliate) {
  const validSearchAffiliate = /^[0-9a-z-]{1,}$/;
  return validSearchAffiliate.test(affiliate);
}

module.exports = {
  isValidGitBranch,
  isValidTwitterHandle,
  isValidDapAgency,
  isValidAnalyticsId,
  isValidVerificationToken,
  isValidSearchKey,
  isValidSearchAffiliate
};
