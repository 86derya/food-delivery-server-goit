const fs = require("fs");

const { allProductsJsonSrc } = require("../pathes");

const getAllProductsfromDb = () => {
  return JSON.parse(fs.readFileSync(allProductsJsonSrc));
};
module.exports = getAllProductsfromDb;
