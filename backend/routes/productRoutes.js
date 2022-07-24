const express = require("express");
const {Router} = require("express");
const {getProducts} = require("../Controllers/productcontroller");
const {addToBag,getAllCart,setQuantity,deleteItem, getSingleProduct11} = require("../Controllers/cartController");



const router = Router();



router.get("/getAllProducts", getProducts);

router.post("/addToBag/:id", addToBag);

router.get("/getAllCart/:id", getAllCart);

router.patch("/setQuantity/:id", setQuantity);

router.delete("/cart/:id", deleteItem);

module.exports = router;