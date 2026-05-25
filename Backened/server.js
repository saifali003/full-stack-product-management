import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
import productRouter from "./Routes/productRoute.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Product Management API is Running 🚀");
});

// Product Routes
app.use("/api/product", productRouter);

// Database Connection
connectDB();

// Server Start
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
