const fs = require("fs");
const path = require("path");

const getAllProductsfromDb = () => {
  const productsSrc = path.resolve(
    __dirname,
    "../../../../db/products/all-products.json"
  );
  return JSON.parse(fs.readFileSync(productsSrc));
};
module.exports = getAllProductsfromDb;
