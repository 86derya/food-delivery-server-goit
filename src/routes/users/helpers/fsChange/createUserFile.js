const jsonfile = require("jsonfile");
const { usersSrc } = require("../../pathes");

const createUserFile = (userName, userData) => {
  jsonfile.writeFileSync(
    `${usersSrc}/${userName}/${userName}.json`,
    userData,
    err => {
      if (err) throw err;
    },
    console.log(`<${userName}> File created successfully!`)
  );
};
module.exports = createUserFile;
