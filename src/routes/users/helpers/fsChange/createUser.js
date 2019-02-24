const fs = require("fs");
const appendCommonJson = require("./appendCommonJson");
const createUserFile = require("./createUserFile");
const createOrdersDir = require("./createOrdersDir");
const {
  userCreatedFail,
  userCreatedSuccess
} = require("../../configs/responses");
const { usersSrc } = require("../../pathes");

const createUser = (userName, userData, response) => {
  try {
    fs.mkdirSync(`${usersSrc}/${userName}`);
    console.log(`<${userName}> Directory created successfully!`);
    createUserFile(userName, userData);
    createOrdersDir(userName);
    return appendCommonJson(userData)
      .then(res => {
        console.log(`<${userData.userName}>, Write complete`);
        userCreatedSuccess(response, userData);
      })
      .catch(err => {
        console.error("Error while making userDir", err);
        return err;
      });
  } catch (err) {
    userCreatedFail(response, err);
  }
};

module.exports = {
  createUser
};
