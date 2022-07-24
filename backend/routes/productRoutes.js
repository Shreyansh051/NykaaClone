const express = require("express");
const {Router} = require("express");
const {getProducts} = require("../Controllers/productcontroller");
const {addToBag,getAllCart,setQuantity,deleteItem, getSingleProduct} = require("../Controllers/cartController");



const router = Router();



router.get("/getAllProducts", getProducts);

router.post("/addToBag/:id", addToBag);

router.get("/getAllCart/:id", getAllCart);

router.patch("/setQuantity/:id", setQuantity);

router.delete("/cart/:id", deleteItem);

router.get("/product/:id", getSingleProduct);

module.exports = router;