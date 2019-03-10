const User = require("../../modules/db/schemas/user");
const {
  authenticationFailed,
  authenticationSuccess
} = require("./configs/responses");
const { checkPassword, generateToken } = require("./helpers");

const login = (request, response) => {
  const { username_email, password } = request.body;

  User.findOne(
    { $or: [{ email: username_email }, { nickName: username_email }] },
    onFind
  );

  function onFind(err, user) {
    console.log(user);
    if (err) throw err;

    if (!user) return authenticationFailed(response, "Incorrect login");

    const isPasswordCorrect = checkPassword(password, user.password);

    const payload = {
      password,
      userid: user.id
    };

    isPasswordCorrect
      ? authenticationSuccess(response, generateToken(payload))
      : authenticationFailed(response, "Incorrect Password");
  }
};

module.exports = login;
