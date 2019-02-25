const getAllUsers = require("./getAllUsers");

const getUserNameById = ID => {
  const user = getAllUsers().find(
    user => user.id === ID.replace(/["\s\ \\\'']/gm, "")
  );
  if (user) {
    return user.userName;
  } else {
    return false;
  }
};

module.exports = getUserNameById;
