const mongoose = require("mongoose");

const ProductsSchema = mongoose.Schema({
  image_url: String,
  tags: String,
  name: String,
  price: Number,
  discount: Number,
  rating: Number,
  n_ratings: Number,
  n_reviews: Number
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = Products;
