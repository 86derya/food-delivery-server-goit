module.exports = {
  idSerchSuccess: function(data) {
    return {
      status: "success",
      products: data
    };
  },
  idSearchFailed: function() {
    return {
      status: "failed",
      reason: "Product with requested ID not found"
    };
  },
  idsQuerySuccess: function(data) {
    return {
      status: "success",
      products: data
    };
  },
  idsQueryFailed: function() {
    return {
      status: "failed",
      reason: "search by requested IDs failed"
    };
  },
  ctgryQuerySuccess: function(data) {
    return {
      status: "success",
      catecory: data
    };
  },
  ctgryQueryFailed: function() {
    return {
      status: "no products",
      catecory: []
    };
  }
};
