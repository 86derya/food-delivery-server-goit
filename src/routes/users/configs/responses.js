module.exports = {
  userCreatedSuccess: function(response, user) {
    response.status(200);
    response.json({ status: "success", user: user });
  },
  userCreatedFail: function(
    response,
    reason = "User with such Name already exists"
  ) {
    response.status(400);
    response.json({
      status: "failed",
      user: reason
    });
  },
  idSerchSuccess: function(response, foundId) {
    response.status(200);
    response.json({ status: "success", user: foundId });
  },
  idSearchFailed: function(response) {
    response.status(404);
    response.json({ status: "failed", user: "Not Found" });
  }
};
