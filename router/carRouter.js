const express = require("express");
const { addCar, getCars } = require("../controller/carController");


const carRouter = express.Router();

carRouter.post('/add-car',addCar);
carRouter.get("/get-cars",getCars)

module.exports = carRouter;