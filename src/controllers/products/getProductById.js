const Product = require("../../modules/db/schemas/product");
const { idSerchSuccess, idSearchFailed } = require("./configs/responses");

const getProductById = (request, response) => {
  const id = request.params.id;

  const findProduct = Product.findById(id);
  let ingrDetails = [];
  try {
    Product.findById(id)
      .populate("ingredients")
      .exec(function(err, ingr) {
        if (err) throw err;

        ingr.ingredients.map(i =>
          ingrDetails.push({ name: i.name, description: i.description, id: i })
        );
        idSerchSuccess(response, {
          ...findProduct,
          ingredients: ingrDetails
        });
      });
  } catch (err) {
    console.error("ERROR: ", err.message), idSearchFailed(response);
  }
};

module.exports = getProductById;
