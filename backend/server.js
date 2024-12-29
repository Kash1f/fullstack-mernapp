import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.post("/api/products", (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({
        sucess: false,
        message: "Please provide all the required fields",
      });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
