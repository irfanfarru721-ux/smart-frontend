import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "./models/Product.js"; // Make sure path is correct

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB connected"));

const seedProducts = async () => {
  await Product.deleteMany({}); // optional: clear old products

  const products = [
    {
      name: "Fresh Apples",
      price: 100,
      vendor: "692992b92aa3dce28672461d", // Vendor ID from your API
      image: "apples.jpg",
    },
    {
      name: "Fresh Bananas",
      price: 50,
      vendor: "692992b92aa3dce28672461d",
      image: "bananas.jpg",
    },
  ];

  await Product.insertMany(products);

  console.log("Products seeded!");
  process.exit();
};

seedProducts();
