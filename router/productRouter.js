const express = require("express");
const { createProduct, getAllProduct, getSpecificProduct } = require("../controller/productController");
const productRouter = express.Router();


productRouter.post("/add-product", createProduct)
productRouter.get("/products",getAllProduct)
productRouter.get("/product/:id",getSpecificProduct)


module.exports = productRouter;