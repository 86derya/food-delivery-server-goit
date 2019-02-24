const getAllUsers = require("./getAllUsers");

const getUserNameById = ID => {
  return getAllUsers().find(
    user => user.id === ID.replace(/["\s\ \\\'']/gm, "")
  ).userName;
};

module.exports = getUserNameById;
