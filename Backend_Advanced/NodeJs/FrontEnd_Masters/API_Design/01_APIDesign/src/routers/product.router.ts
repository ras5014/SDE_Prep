import { Router } from "express";
import { body } from "express-validator";
import { valiadateInputErrors } from "../modules/middleware";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts); // Get All Products
router.get("/:id", getProductById); // Get Product By Id
router.put("/:id", body("name"), valiadateInputErrors, updateProduct); // Update Product By Id
router.post("/", body("name").isString(), valiadateInputErrors, createProduct); // Create New Product
router.delete("/:id", deleteProduct); // Delete Product By Id

export default router;
