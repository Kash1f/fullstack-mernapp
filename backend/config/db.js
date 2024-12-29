import mongoose from "mongoose";

// This is the function that will run to connect to the database
export const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); //process code 1 means there was an error and the process will exit with failure
  }
};
