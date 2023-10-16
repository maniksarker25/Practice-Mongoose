const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:String,
    price:String,
    description:String,
    date:{
        type:Date,
        default: Date.now
    }

})

const Product = new mongoose.model("products", productSchema);

module.exports = {Product};