const Car = require("../schema/carSchema");

const addCar = async (req, res) => {
  try {
    const newCar = new Car({
      name: req.body.name,
      price: req.body.price,
      rating: req.body.rating,
      description: req.body.description,
    });

    const isExist = await Car.findOne({ name: req.body.name });
    if (isExist) {
      return res.status(201).send({ message: "This car already exits" });
    }
    const result = await newCar.save();
    if (result) {
      res.status(200).send({ message: "car added successfully", result });
    } else {
      res.status(500).send({ message: "something wrong" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getCars = async (req, res) => {
  try {
    const price = req.query.price;
    const rating = req.query.rating;
    let cars;
    if (price && rating) {
      cars = await Car.find({
        $and: [{ price: { $gt: 1500 } }, { rating: { $gt: 4 } }],
      });
    }
    else{
        cars = await Car.find();
    }


    if (cars) {
      res.status(200).send(cars);
    } else {
      res.status(500).send({ message: "product not found" });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { addCar, getCars };
