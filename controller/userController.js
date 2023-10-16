const { response } = require("express");
const { User } = require("../schema/userSchema");

const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const { name, roll } = req.body;
    if (!name || !roll) {
      return res.status(400).send({ message: "field is required" });
    }
    const isExist = await User.exists({ name });
    if (isExist) {
      return res.status(400).send({ message: "user already exits" });
    }
    const result = await User.create({
      name,
      roll,
    });
    if (result) {
      return res.status(400).send({ message: "user added successfully" });
    }
  } catch {
    res.status(400).send({ message: "something wrong" });
  }
};

const getUser = async (req, res) => {
  res.send("get user");
};

module.exports = { createUser, getUser };
