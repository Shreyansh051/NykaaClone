const express = require("express");
const {Router} = require("express");
const {getProducts} = require("../Controllers/productcontroller");



const router = Router();



router.get("/getAllProducts", getProducts);

module.exports = router;