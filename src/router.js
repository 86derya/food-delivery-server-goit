const express = require("express");
const mainRoute = require("./controllers/main/main");
const { login, logout, signUp, getUserByToken } = require("./controllers/auth");
const verifyToken = require("./modules/verifyToken");
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
const { createIngredient } = require("./controllers/ingredients/");

const { createOrder, getOrderById } = require("./controllers/orders");
const { createComment, getComments } = require("./controllers/comments");

const apiRoutes = express.Router();

apiRoutes
  .post("/auth/login", login)
  .post("/auth/register", signUp)
  .use(verifyToken)
  .get("/auth/current", getUserByToken)
  .get("/auth/logout", logout)
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
  .get("/orders/:id", getOrderById)
  .post("/ingredients", createIngredient)
  .post("/comments", createComment)
  .get("/comments", getComments);

module.exports = apiRoutes;
