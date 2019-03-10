const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");
var uniqueValidator = require("mongoose-unique-validator");
var ObjectId = mongoose.Schema.Types.ObjectId;

const ingredientSchema = new Schema({
  id: ObjectId,
  name: { type: String, required: true, unique: true },
  description: String
});

ingredientSchema.plugin(timestamp);
ingredientSchema.plugin(uniqueValidator);

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;
