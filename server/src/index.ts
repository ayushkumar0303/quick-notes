import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const PORT = 3000;
dotenv.config();

// console.log(process.env.MONGODB_URI);

try {
  await mongoose.connect(process.env.MONGODB_URI!);
  console.log("MongoDB connected successfully");
} catch (error) {
  console.log("Error while connecting to mongodb", error);
}

app.get("/", (req, res) => {
  res.send("Hellow");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
