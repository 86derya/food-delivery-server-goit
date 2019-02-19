const url = require("url");

const mainRoute = (request, response) => {
  const { query } = url.parse(request.url, true);
  console.log(query);
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<h1>Response on mainRoute</h1>");
  response.end();
};

module.exports = mainRoute;
