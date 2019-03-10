const app = require("./app");
const jwt = require("jsonwebtoken");

const getToken = request =>
  request.body.token ||
  request.query.token ||
  request.headers["x-access-token"];

const checkToken = (request, response, next) => {
  const token = getToken(request);
  const secretKey = app.get("superSecret");

  if (!token) {
    return response.status(403).send({
      success: false,
      message: "No token provided."
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return response.json({
        success: false,
        message: "Failed to authenticate token."
      });
    }

    request.decoded = decoded;

    next();
  });
};

module.exports = checkToken;
