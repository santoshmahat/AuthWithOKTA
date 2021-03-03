require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OktaJwtVerifier = require("@okta/jwt-verifier");

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: process.env.OKTA_CLIENT_ID,
  issuer: process.env.OKTA_ISSUER,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(async (req, res, next) => {
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
});

app.get("/employees", (req, res) => {
  const employees = [
    {
      name: "Santosh Mahat",
      email: "santoshkraazy@gmail.com",
    },
    {
      name: "Steve Job",
      email: "stevejobs@gmail.com",
    },
  ];
  res.status(200).json({ employees, success: true });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
