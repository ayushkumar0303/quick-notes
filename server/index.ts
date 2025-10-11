const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./src/routes/auth.routes");

const app = express();
const PORT = 3000;
dotenv.config();

// console.log(process.env.MONGODB_URI);

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error while connecting to mongodb", error);
  }
}

startServer();

app.use("/server", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
