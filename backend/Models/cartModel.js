const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  image_url: String,
  tags: String,
  name: String,
  price: Number,
  s_price: Number,
  discount: Number,
  rating: Number,
  n_ratings: Number,
  n_reviews: Number,
  quantity: { type: Number, default: 1 },
  userID: String,
});

const cartItem = mongoose.model("cartItem", cartSchema);

module.exports = cartItem;
