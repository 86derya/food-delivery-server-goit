const findUserByID = (data, id) => {
  return data.find(item => item.id === id);
};
module.exports = findUserByID;
