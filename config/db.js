const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    //   const conn = await mongoose.connect(process.env.MONGO_URI, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   });
    const conn = await mongoose.connect(
      "mongodb+srv://commonUser:commonUser@cluster0.16yxiu9.mongodb.net/studentDB",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
