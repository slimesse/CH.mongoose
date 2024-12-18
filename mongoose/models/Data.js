const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    age: { 
        type: Number
    },
    favoriteFoods: { 
        type: [String],
    },
    email: { 
        type: String, 
        unique: true,
    }
  },
  {
    timestamps: true,
  }
);

const Data = mongoose.model("data", Schema);
module.exports = Data;
