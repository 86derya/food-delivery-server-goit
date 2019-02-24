const checkProductsForAvailability = (requested, available) => {
  let checkedProductsForAvail = [];

  requested.map(i =>
    available.find(e => String(e.id) === String(i))
      ? checkedProductsForAvail.push(i)
      : null
  );

  return requested.length === checkedProductsForAvail.length;
};
module.exports = checkProductsForAvailability;
