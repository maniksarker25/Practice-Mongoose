const express = require("express");
const { createUser, getUser } = require("../controller/userController");
const userRouter = express.Router();

userRouter.post('/',createUser)
userRouter.get("/",getUser)


module.exports = userRouter;