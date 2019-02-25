const uuid = require("uuid/v4");

const { userCreatedFail } = require("./configs/responses.js");

const { checkIfCreatedBefore, createUser } = require("./helpers");

const signUpRoute = (request, response) => {
  const user = request.body;
  const { userName } = user;
  console.log(user);
  const userNameIsFree = !checkIfCreatedBefore(userName);

  if (userNameIsFree) {
    const userData = { ...user, id: uuid() };
    createUser(userName, userData, response);
  } else {
    userCreatedFail(response);
  }
};

module.exports = signUpRoute;
