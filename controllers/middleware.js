// Middlware check if a properly signed JWT token is in the authorization header
// if so add the payload to the request object
// if not, sends an error

require("dotenv").config();
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  if (req.headers.authorization) {
    const header = req.headers.authorization;
    const token = header.split(" ")[1];
    console.log(header)
    console.log(token)
    const payload = jwt.verify(token, process.env.SECRET);
    if (payload) {
      req.payload = payload;
      next();
    } else {
      res.status(400).send("Invalid JWT");
    }
  } else {
    res.status(400).send("Missing Authorization Header");
  }
}

module.exports = { auth };
