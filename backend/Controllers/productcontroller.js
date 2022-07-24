const Products = require("../Models/ProductModel");

module.exports.getProducts = async (req, res) => {
  try {
    const getAllProducts = await Products.find();
    res.status(200).json(getAllProducts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports.getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
