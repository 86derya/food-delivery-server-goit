const fs = require("fs");
const path = require("path");

const productsRoute = (request, response) => {
  console.log("request.method: ", request.method);

  if (request.method !== "GET") {
    response.writeHead(400, { "Content-Type": "text/html" });
    response.write(
      `<h1>ERROR. Suspected "GET" method but got "${request.method}"</h1>`
    );
    response.end();
  } else {
    const filePath = path.join(
      __dirname,
      "../../",
      "db/products",
      "/all-products.json"
    );

    response.writeHead(200, {
      "Content-Type": "application/json"
    });

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(response);
  }
};

module.exports = productsRoute;
