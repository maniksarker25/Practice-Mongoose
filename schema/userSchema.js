const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  roll: Number,
});

const User = new mongoose.model("Users", userSchema);

module.exports = {User};
