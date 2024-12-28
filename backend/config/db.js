import mongoose from "mongoose";

// This is the function that will run to connect to the database
export const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};
