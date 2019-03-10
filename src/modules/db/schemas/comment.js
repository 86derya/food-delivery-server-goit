const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");
var uniqueValidator = require("mongoose-unique-validator");
var ObjectId = mongoose.Schema.Types.ObjectId;
const user = require("./user");
const product = require("./product");

const commentSchema = new Schema({
  id: ObjectId,
  product: {
    type: ObjectId,
    ref: product,
    required: true
  },
  author: {
    type: ObjectId,
    ref: user,
    required: true
  },
  text: String,
  mark: {
    type: Number,
    min: 1,
    max: 5
  }
});

commentSchema.plugin(timestamp);
commentSchema.plugin(uniqueValidator);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
