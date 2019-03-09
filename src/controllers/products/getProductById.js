const Product = require("../../modules/db/schemas/product");
const { idSerchSuccess, idSearchFailed } = require("./configs/responses");

const getProductById = (request, response) => {
  const id = request.params.id;

  const findProduct = Product.findById(id);

  findProduct
    .then(product =>
      !product ? idSearchFailed(response) : idSerchSuccess(response, product)
    )
    .catch(err => {
      console.error("ERROR: ", err.message), idSearchFailed(response);
    });
};

module.exports = getProductById;
