const OktaJwtVerifier = require("@okta/jwt-verifier");
const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: process.env.OKTA_CLIENT_ID,
  issuer: process.env.OKTA_ISSUER,
});
const loginRequired = async (req, res, next) => {
  try {
    console.log("req.headers.authorization", req.headers.authorization);
    if (!req.headers.authorization)
      throw new Error("Authorization header is required");
    const accessToken = req.headers.authorization.trim();
    await oktaJwtVerifier.verifyAccessToken(accessToken, "api://default");
    next();
  } catch (error) {
    next(error.message);
  }
};

module.exports = loginRequired;
