const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB is connected.");
  } catch (error) {
    console.log("DB not connectd.!!", error);
  }
    
};

module.exports = connectDB