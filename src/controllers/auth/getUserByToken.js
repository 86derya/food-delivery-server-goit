const User = require("../../modules/db/schemas/user");
var jwt = require("jsonwebtoken");

const { idSerchSuccess, idSearchFailed } = require("./configs/responses");

const getUserByToken = (request, response) => {
  const token = request.headers["x-access-token"];

  // jwt.verify(token, secretKey, (err, decoded) => {
  //   if (err) {
  //     return response.json({
  //       success: false,
  //       message: "Failed to authenticate token."
  //     });
  //   }

  //   request.decoded = decoded;

  const userId = jwt.decode(token, { complete: true }).payload.userid;

  User.findById(userId)
    .then(user => idSerchSuccess(response, user))
    .catch(err => {
      console.error("ERROR: ", err.message), idSearchFailed(response);
    });
};

module.exports = getUserByToken;
