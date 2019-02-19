const fs = require("fs");
const path = require("path");
const url = require("url");

const getIdfromUrl = require("../../helpers/getIdfromUrl");
const getProductByID = require("../../helpers/getProductByID");
const Responses = require("./configs/responses-configs");

const productsRoute = (request, response) => {
  const requestedProductID = getIdfromUrl(request.url);
  const { query } = url.parse(request.url, true);

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

    let dataToResponse = [];

    if (requestedProductID || query) {
      return fs.readFile(filePath, "utf8", (error, data) => {
        if (error) console.log(error);

        const parsedData = JSON.parse(data);

        if (requestedProductID) {
          // check if Requested ID is found in DB => push it to response data
          getProductByID(parsedData, requestedProductID)
            ? dataToResponse.push(
                getProductByID(parsedData, requestedProductID)
              )
            : null;

          //get ready response for user
          if (dataToResponse.length > 0) {
            response.writeHead(200, {
              "Content-Type": "application/json"
            });
            response.end(
              JSON.stringify(Responses.idSerchSuccess(dataToResponse))
            );
          } else {
            response.writeHead(404, {
              "Content-Type": "application/json"
            });
            response.end(JSON.stringify(Responses.idSearchFailed()));
          }
        } else if (query.ids) {
          // getting cleaned ids, check each query id for presence in DB => push it to response data
          query.ids
            .split(",")
            .map(i => i.replace(/[<>\s\ \\\'']/gm, ""))
            .map(e =>
              getProductByID(parsedData, e)
                ? dataToResponse.push(getProductByID(parsedData, e))
                : console.log(`id ${e} not found`)
            );
          //get ready response for user
          if (dataToResponse.length > 0) {
            response.writeHead(200, {
              "Content-Type": "application/json"
            });
            response.end(
              JSON.stringify(Responses.idsQuerySuccess(dataToResponse))
            );
          } else {
            response.writeHead(404, {
              "Content-Type": "application/json"
            });
            response.end(JSON.stringify(Responses.idsQueryFailed()));
          }
        } else if (query.category) {
          const cleanCategory = query.category.replace(/["\'']/gm, "").trim();
          // filter DB by category matching and pushing filtered to the response
          parsedData.map(i =>
            i.categories.includes(cleanCategory) ? dataToResponse.push(i) : null
          );
          //get ready response for user
          if (dataToResponse.length > 0) {
            response.writeHead(200, {
              "Content-Type": "application/json"
            });
            response.end(
              JSON.stringify(Responses.ctgryQuerySuccess(dataToResponse))
            );
          } else {
            response.writeHead(404, {
              "Content-Type": "application/json"
            });
            response.end(JSON.stringify(Responses.ctgryQueryFailed()));
          }
        }
      });
    }
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);
  }
};

module.exports = productsRoute;
