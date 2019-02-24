const fs = require("jsonfile");
var datetime = require("node-datetime");
const { usersSrc } = require("../../pathes");

const createOrderJson = (userName, orderData) => {
  let dt = datetime.create();
  let fileName = dt.format("DnY_H:M");

  return fs.writeFileSync(
    `${usersSrc}/${userName}/orders/${fileName}.json`,
    orderData,
    err => {
      if (err) throw err;
    },
    console.log(`${userName}/orders/<${fileName}> File created successfully!`)
  );
};
module.exports = createOrderJson;
