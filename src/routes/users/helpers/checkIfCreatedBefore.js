const fs = require("fs");
const { allUsersJsonSrc } = require("../pathes/all_users_json");

const checkIfCreatedBefore = userName => {
  const users = JSON.parse(fs.readFileSync(allUsersJsonSrc));

  return users.find(i => i.userName === userName);
};
module.exports = checkIfCreatedBefore;
