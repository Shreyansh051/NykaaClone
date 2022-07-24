const Products = require("../Models/ProductModel");

module.exports.getProducts = async (req, res) => {
  try {
    const getAllProducts = await Products.find();
    res.status(200).json(getAllProducts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


