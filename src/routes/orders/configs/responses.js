module.exports = {
  orderCreatedSuccess: function(response, order) {
    response.status(200);
    response.json({ status: "success", order: order });
  },
  orderCreatedFail: function(response) {
    response.status(400);
    response.json({
      status: "failed",
      order: null
    });
  }
};
