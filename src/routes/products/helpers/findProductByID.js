const getProductByID = (data, id) => {
  return data.find(item => item.id === +id);
};
module.exports = getProductByID;
