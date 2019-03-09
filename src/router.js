const express = require("express");
const mainRoute = require("./controllers/main/main");
const {
  createUser,
  getUserById,
  updateUser,
  getUsers
} = require("./controllers/users/");
const {
  createProduct,
  updateProduct,
  getProducts,
  getProductById
} = require("./controllers/products/");

const { createOrder, getOrderById } = require("./controllers/orders");

const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .get("/users", getUsers)
  .get("/users/:id", getUserById)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  .post("/products", createProduct)
  .get("/products", getProducts)
  .put("/products/:id", updateProduct)
  .get("/products/:id", getProductById)
  .post("/orders", createOrder)
  .get("/orders/:id", getOrderById);

module.exports = apiRoutes;
