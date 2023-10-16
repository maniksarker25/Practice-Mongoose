const express = require("express");
const { createProduct } = require("../controller/productController");
const productRouter = express.Router();


productRouter.post("/add-product", createProduct)


module.exports = productRouter;