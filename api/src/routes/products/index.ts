import express, { Router } from "express";

import {
  listProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} from "./productsController";
const router = Router();
router.get("/", listProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.post("/", createProduct);

export default router;
