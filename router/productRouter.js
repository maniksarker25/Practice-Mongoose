const express = require("express");
const { createProduct, getAllProduct } = require("../controller/productController");
const productRouter = express.Router();


productRouter.post("/add-product", createProduct)
productRouter.get("/products",getAllProduct)


module.exports = productRouter;