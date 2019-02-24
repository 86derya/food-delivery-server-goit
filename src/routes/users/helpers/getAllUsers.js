const fs = require("fs");
const { allUsersJsonSrc } = require("../pathes");

const getAllUsers = () => {
  return JSON.parse(fs.readFileSync(allUsersJsonSrc));
};
module.exports = getAllUsers;
