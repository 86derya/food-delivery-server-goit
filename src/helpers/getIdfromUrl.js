const getIdfromUrl = url => {
  const lastIndex = url.lastIndexOf("/");
  const id = Number(url.slice(lastIndex + 1).trim());
  return id;
};
module.exports = getIdfromUrl;
