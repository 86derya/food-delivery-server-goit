const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");
var uniqueValidator = require("mongoose-unique-validator");
var ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new Schema({
  id: ObjectId,
  sku: { type: Number, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  description: String,
  price: Number,
  currency: String,
  creatorId: String,
  categories: Array,
  likes: String
});

productSchema.plugin(timestamp);
productSchema.plugin(uniqueValidator);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
