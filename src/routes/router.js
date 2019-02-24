const express = require("express");
const mainRoute = require("./main/main");
const { getProducts } = require("./products");
const { getProductById } = require("./products");
const { signUp, getUserById } = require("./users");
const { createOrder } = require("./orders");
const saveImage = require("./images");

const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .get("/products", getProducts)
  .get("/products/:id", getProductById)
  .get("/users/:id", getUserById)
  .post("/users", signUp)
  .post("/orders", createOrder)
  .post("/images", saveImage());

module.exports = apiRoutes;
