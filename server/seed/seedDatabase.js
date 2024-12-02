import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

const seedProducts = async () => {
  const sampleProducts = [
    {
      name: "Isfahan Naghsh on silk",
      description: "The Isfahan is the noble classic among Persian oriental carpets.",
      price: 16000,
      image_name: "https://cdn.kibek.de/media/mf_webp/jpg/thumbnail/03/07/a7/1690925542/Isfahan-blau_900166420-050_1920x1920.webp",
    },
    {
      name: "Kashan",
      description: "Kashan carpets are renowned for their high-quality sheep's wool.",
      price: 2120,
      image_name: "https://cdn.rugtales.com/media/8e/68/5a/1711529508/484111%281%29.png?width=280",
    },
    {
      name: "Nourison Prismatic Gray Gold",
      description: "Hand-tufted carpet featuring abstract patterns in gray and gold.",
      price: 845,
      image_name: "https://ik.imagekit.io/xkwthq1rxmd/liveonlinetapijten/catalog/product/cache/9a16e1a5e994ed25951c854c1c82627c/n/o/nourison_prismatic_carpet_prism_prs28_grygd_grey_gold_8x10_099446891921_flat.jpg",
    },
  ];
  console.log("Mongo URI:", process.env.DB_URI)
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to the database");

   
    await Product.deleteMany();
    console.log("Existing products deleted");
    await Product.insertMany(sampleProducts);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1); 
  } finally {
    await mongoose.disconnect();
    console.log("Database connection closed");
    process.exit(0); 
  }
};

seedProducts();