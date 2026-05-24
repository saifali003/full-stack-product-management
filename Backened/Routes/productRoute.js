import express from "express";
import { addProduct, deleteProduct, getProduct, updateProduct } from "../Controller/productController.js";
const router = express.Router();

router.post("/add",addProduct);
router.get("/all",getProduct);
router.put("/:id",updateProduct);
router.delete("/:id", deleteProduct);

export default router;