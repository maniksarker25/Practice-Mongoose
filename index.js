const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./config/db");
const userRouter = require("./router/userRouter");
const productRouter = require("./router/productRouter");
const app = express();
// mongoose.connect(
//   "mongodb+srv://commonUser:commonUser@cluster0.16yxiu9.mongodb.net/",
// );

connectDB();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/",productRouter);

app.listen(5000, () => {
  console.log("app is running in 5000");
});
