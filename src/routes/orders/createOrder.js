const {
  getAllProductsfromDb,
  getUserNameById,
  checkProductsForAvailability,
  createOrderJson
} = require("./helpers");

const {
  orderCreatedFail,
  orderCreatedSuccess
} = require("./configs/responses.js");

const createOrder = (request, response) => {
  const order = request.body;
  const userId = order.user;
  const productsIds = order.products;
  const userName = getUserNameById(userId);
  const availableProducts = getAllProductsfromDb();

  const isProductsAvailable = checkProductsForAvailability(
    productsIds,
    availableProducts
  );
  if (isProductsAvailable) {
    createOrderJson(userName, order);
    orderCreatedSuccess(response, order);
  } else {
    orderCreatedFail(response);
  }
};

module.exports = createOrder;
