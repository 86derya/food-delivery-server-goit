module.exports = {
  allProductsfromDbSuccess: function(response, allProducts) {
    response.status(200);
    response.json({ products: allProducts });
  },
  ctgryQuerySuccess: function(response, filteredProducts) {
    response.status(200);
    response.json({ status: "success", products: filteredProducts });
  },
  ctgryQueryFailed: function(response) {
    response.status(404);
    response.json({ status: "no products", products: [] });
  },
  idsQuerySuccess: function(response, filteredProducts) {
    response.status(200);
    response.json({ status: "success", products: filteredProducts });
  },
  idsQueryFailed: function(response) {
    response.status(404);
    response.json({ status: "no products", products: [] });
  },
  idSerchSuccess: function(response, foundId) {
    response.status(200);
    response.json({ status: "success", products: foundId });
  },
  idSearchFailed: function(response) {
    response.status(404);
    response.json({ status: "failed", products: [] });
  }
};
