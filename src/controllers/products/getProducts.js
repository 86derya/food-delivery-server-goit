const Product = require("../../modules/db/schemas/product");

const {
  allProductsfromDbSuccess,
  allProductsfromDbFailed,
  ctgryQueryFailed,
  idsQuerySuccess,
  idsQueryFailed
} = require("./configs/responses");

const getProducts = (request, response) => {
  Product.find({}, function(err, products) {
    if (err) {
      allProductsfromDbFailed(response);
    } else {
      allProductsfromDbSuccess(response, products);
    }
  });
};
module.exports = getProducts;
