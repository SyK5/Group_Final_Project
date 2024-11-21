import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

const seedProducts = async () => {
  const sampleProducts = [
    {
      name: "",
      description: "",
      price: 1000,
      image_name: "",
    },
    {
      name: "",
      description: "",
      price: 1800,
      image_name: "",
    },
    {
      name: "",
      description: "",
      price: 1150,
      image_name: "",
    },
  ];

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");

    await Product.deleteMany(); 
    await Product.insertMany(sampleProducts); 

    console.log("Database seeded successfully");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  }
};

seedProducts();
