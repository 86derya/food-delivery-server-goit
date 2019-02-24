const getAllUsers = require("./getAllUsers");

const getUserNameById = ID => {
  return getAllUsers().find(user => user.id === ID).userName;
};

module.exports = getUserNameById;
