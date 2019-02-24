const { idSerchSuccess, idSearchFailed } = require("./configs/responses");
const { getAllProductsfromDb, findProductByID } = require("./helpers");

const getProductById = (request, response) => {
  const id = request.params.id;
  let dataToResponse = [];
  const allProductsfromDb = getAllProductsfromDb();

  const foundProduct = findProductByID(allProductsfromDb, id);
  dataToResponse.push(foundProduct);
  foundProduct
    ? idSerchSuccess(response, dataToResponse)
    : idSearchFailed(response);
};

module.exports = getProductById;
