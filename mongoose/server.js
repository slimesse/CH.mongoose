// require express
const express = require("express");
// require dotenv
require("dotenv").config();
// instance of express
const app = express();

//DB link up
const connectDB = require("./config/connectDB");
const Data = require("./models/Data");
connectDB();

// routes

// *************************************Checkpoint****************************************** \\

// 1. Create and save a record of a model

// async function createAndSaveData() {
//   try {
//     const data = new Data({
//       name: "Alice",
//       age: 25,
//       favoriteFoods: ["Pizza", "Pasta"],
//       email: "alice@gmail.com",
//     });

//     const result = await data.save();
//     console.log("Saved Data:", result);
//   } catch (err) {
//     console.error("Error saving data:", err);
//   }
// }

// createAndSaveData();

// 2. Create many records with Model.create()

// async function createManyData() {
//   try {
//     const arrayOfData = [
//       {
//         name: "John",
//         age: 30,
//         favoriteFoods: ["Burger"],
//         email: "john@gmail.com",
//       },
//       {
//         name: "Mary",
//         age: 25,
//         favoriteFoods: ["Salad"],
//         email: "mary@gmail.com",
//       },
//       {
//         name: "Mike",
//         age: 35,
//         favoriteFoods: ["Pizza", "Steak"],
//         email: "mike@gmail.com",
//       },
//     ];

//     const result = await Data.create(arrayOfData);
//     console.log("Created Data:", result);
//   } catch (err) {
//     console.error("Error creating data:", err);
//   }
// }

// createManyData();

// 3. Use model.find() to search the database

// async function findDataByName(name) {
//   try {
//     const result = await Data.find({ name });
//     console.log('Found Data:', result);
//   } catch (err) {
//     console.error('Error finding data by name:', err);
//   }
// }

// findDataByName("Mike")

// 4. Use model.findOne() to search by a single field

// async function findOneByFood(food) {
//   try {
//     const result = await Data.findOne({ favoriteFoods: food });
//     console.log("Found Data:", result);
//   } catch (err) {
//     console.error("Error finding data by food:", err);
//   }
// }

// findOneByFood("Pasta");

// 5. Use model.findById() to search by _id

// async function findDataById(id) {
//   try {
//     const result = await Data.findById(id);
//     console.log("Found Data by ID:", result);
//   } catch (err) {
//     console.error("Error finding data by ID:", err);
//   }
// }

// findDataById("674895c094b6412cba8e4a8d");

// 6. Perform updates by finding, editing, and saving

// async function findEditThenSave(id) {
//   try {
//     const data = await Data.findById(id);
//     if (!data) throw new Error("Data not found");

//     data.favoriteFoods.push("hamburger");
//     const updatedData = await data.save();
//     console.log("Updated Data:", updatedData);
//   } catch (err) {
//     console.error("Error updating data:", err);
//   }
// }

// findEditThenSave("674895c094b6412cba8e4a8c");

// 7. Perform new updates with model.findOneAndUpdate()

// async function findAndUpdate(dataName) {
//     try {
//       const updatedData = await Data.findOneAndUpdate(
//         { name: dataName },
//         { age: 20 },
//         { new: true }
//       );
//       console.log('Updated Data:', updatedData);
//     } catch (err) {
//       console.error('Error updating data by name:', err);
//     }
//   }

//   findAndUpdate("Mike")

// 8. Delete one document with model.findByIdAndRemove

// async function removeById(id) {
//     try {
//       const removedData = await Data.findByIdAndDelete(id);
//       console.log('Removed Data:', removedData);
//     } catch (err) {
//       console.error('Error removing data by ID:', err);
//     }
//   }

//   removeById("674895c094b6412cba8e4a8d")

// 9. Delete many documents with model.remove().

// async function removeManyData() {
//     try {
//       const result = await Data.deleteMany();
//       console.log('Removed Data:', result);
//     } catch (err) {
//       console.error('Error removing data:', err);
//     }
//   }

//   removeManyData()

// 10. Chain query helpers to narrow results

// async function queryChain() {
//   try {
//     const result = await Data.find({ favoriteFoods: "Pizza" })
//       .sort("name")
//       .limit(2)
//       .select("-age")
//       .exec();

//     console.log("Query Chain Result:", result);
//   } catch (err) {
//     console.error("Error querying data:", err);
//   }
// }

// queryChain();

// PORT
const PORT = process.env.PORT || 4500;

// Server
app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
