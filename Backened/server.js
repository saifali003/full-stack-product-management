import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/db.js";
import productRouter from "./Routes/productRoute.js";
const app = express();
dotenv.config();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.use("/api/product",productRouter);
connectDB();
app.listen(port,()=>{
    console.log(`Server run on port ${port}`);
});