const fs = require("fs");
const { usersSrc } = require("../../pathes");

const createUserFile = userName => {
  fs.mkdirSync(`${usersSrc}/${userName}/orders`);

  console.log(`<${userName}> ordersFolder created successfully!`);
};
module.exports = createUserFile;
