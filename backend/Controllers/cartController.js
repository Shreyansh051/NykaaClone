const cartItem = require("../Models/cartModel");
const products = require("../Models/ProductModel");


module.exports.addToBag = async (req,res) => {
    try {
        const {id} = req.params;
        const {image_url, tags, name, price, s_price, discount, rating, n_ratings,n_reviews} = await products.findById(id);
        await cartItem.create({
         image_url,
         tags,
         name,
         price,
         s_price,
         discount,
         rating,
         n_ratings,
         n_reviews
        });
        const AllCarts = await cartItem.find();
        res.status(200).json(AllCarts);
        
    } catch (error) {
        console.log(error.message);
    }
  
}

module.exports.getAllCart = async (req,res) => {
    try {
        const getallcart = await cartItem.find();
        res.status(200).json(getallcart);
    } catch (error) {
        res.send(error.message);
    }
}

module.exports.setQuantity = async (req,res) => {
    try {
        const {quant} = req.body;
        const {id} = req.params;
       const cartitem =  await cartItem.findByIdAndUpdate(id,{
            quantity: quant
        })
        const cartArray = await cartItem.find();
        res.json(cartArray);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.deleteItem = async (req,res) => {
    try {
        const {id} = req.params;
        await cartItem.findByIdAndDelete(id);
        const cartArray = await cartItem.find();
        res.json(cartArray);
    } catch (error) {
        console.log(error.message);
    }
}