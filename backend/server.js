import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.post("/api/products", async(req, res) => {
  const product = req.body; // user will send this data

  // check if all the required fields are present, if we pass the if check, means that user has entered all the req fields. So, we will pass the product body that we just got from the user to the new product model
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({sucess: false, message: "Please provide all the required fields"});
  }

  const newProduct = new Product(product);
  try{
    await newProduct.save(); // save the product to the database
    res.status(201).json({sucess: true, message: "Product added successfully"});
  } catch(err){
    res.status(500).json({sucess: false, message: "Internal server error"});
  }
})

























app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});