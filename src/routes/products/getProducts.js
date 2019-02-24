const fs = require("fs");
const path = require("path");
const { getAllProductsfromDb, findProductByID } = require("./helpers");
const {
  allProductsfromDbSuccess,
  ctgryQuerySuccess,
  ctgryQueryFailed,
  idsQuerySuccess,
  idsQueryFailed
} = require("./configs/responses");

const getProducts = (request, response) => {
  const {
    query: { category, ids }
  } = request;

  let dataToResponse = [];

  if (category || ids) {
    if (category) {
      const cleanCategory = category.replace(/["\'']/gm, "").trim();
      // filter DB by category matching and pushing filtered to the response
      getAllProductsfromDb().map(i =>
        i.categories.includes(cleanCategory)
          ? (dataToResponse.push(i), console.log(JSON.stringify(i)))
          : null
      );
      dataToResponse.length > 0
        ? ctgryQuerySuccess(response, dataToResponse)
        : ctgryQueryFailed(response);
    } else if (ids) {
      const cleanIds = ids
        .split(",")
        .map(i => i.replace(/[<>\s\ \\\'']/gm, ""));
      const allProductsfromDb = getAllProductsfromDb();
      cleanIds.map(e =>
        findProductByID(allProductsfromDb, e)
          ? dataToResponse.push(findProductByID(allProductsfromDb, e))
          : console.log(`id ${e} not found`)
      );
      dataToResponse.length > 0
        ? idsQuerySuccess(response, dataToResponse)
        : idsQueryFailed(response);
    }
  } else {
    dataToResponse = getAllProductsfromDb();
    allProductsfromDbSuccess(response, dataToResponse);
  }

  const readStream = fs.createReadStream(
    path.resolve(__dirname, "../../../db/products/all-products.json")
  );
  readStream.pipe(response);
};

module.exports = getProducts;
