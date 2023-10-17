const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
    name:String,
    price:Number,
    rating:Number,
    description:String,
    addedTime:{
        type:Date,
        default: Date.now
    }
})

const Car = new mongoose.model("cars",carSchema);

module.exports = Car;