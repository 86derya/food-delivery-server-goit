const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");
var uniqueValidator = require("mongoose-unique-validator");

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  telephone: String,
  nickName: { type: String, required: true, unique: true },
  location: String,
  password: String,
  email: { type: String, required: true, unique: true },
  favoriteProducts: Array,
  viewedProducts: Array,
  orders: Array
});

userSchema.plugin(timestamp);
userSchema.plugin(uniqueValidator);

const User = mongoose.model("User", userSchema);

module.exports = User;
