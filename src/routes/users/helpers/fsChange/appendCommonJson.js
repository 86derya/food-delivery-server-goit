const jsonfile = require("jsonfile");
const { allUsersJsonSrc } = require("../../pathes");
const getAllUsers = require("../getAllUsers");

const appendAllUsersDb = userData => {
  const users = getAllUsers();
  users.push(userData);

  return jsonfile.writeFile(allUsersJsonSrc, users);
};

module.exports = appendAllUsersDb;
