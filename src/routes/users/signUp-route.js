const fs = require("fs");
const path = require("path");

const signUpRoute = (request, response) => {
  if (request.method === "POST") {
    let body = "";
    request.on("data", function(data) {
      body += data;
    });

    request.on("end", function() {
      let incomeData = JSON.parse(body);
      const { username } = incomeData;

      fs.writeFile(
        path.join(__dirname, "../../db/users/", `${username}.json`),
        body,
        err => {
          if (err) throw err;
        }
      );
      response.writeHead(200, { "Content-Type": "application/json" });
      response.write(JSON.stringify({ status: "success", user: incomeData }));
      response.end();
    });
  } else {
    response.writeHead(400, { "Content-Type": "text/html" });
    response.write(
      `<h1>ERROR. Suspected "POST" method but got "${request.method}"</h1>`
    );
    response.end();
  }
};

module.exports = signUpRoute;
