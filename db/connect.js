const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = (url) => {
  mongoose.set("strictQuery", true);
  return mongoose.connect(url);
};

module.exports = connectDB;
