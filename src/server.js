const https = require("https");
const url = require("url");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const router = require("./routes/router");
const logger = morgan("combined");
const getRouteHandler = require("./helpers/get-route-handler");

const options = {
  key: fs.readFileSync(path.join(__dirname, "./ssl/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "./ssl/server.crt"))
};

const startServer = port => {
  const server = https.createServer(options, (request, response) => {
    // Get route from the request
    const parsedUrl = url.parse(request.url);
    // Get router function
    const onRouting =
      getRouteHandler(router, parsedUrl.pathname) || router.default;

    logger(request, response, () => onRouting(request, response));
  });

  server.listen(port);
};

module.exports = startServer;
