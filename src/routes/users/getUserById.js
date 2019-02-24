const { idSerchSuccess, idSearchFailed } = require("./configs/responses.js");

const { getAllUsers, findUserByID } = require("./helpers");

const getUserByIdRoute = (request, response) => {
  const id = request.params.id;
  let dataToResponse = {};
  const allUsersfromDb = getAllUsers();

  const foundUser = findUserByID(allUsersfromDb, id);
  dataToResponse = { ...foundUser };
  foundUser
    ? idSerchSuccess(response, dataToResponse)
    : idSearchFailed(response);
};

module.exports = getUserByIdRoute;
