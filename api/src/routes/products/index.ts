import { Router } from "express";

import {
  listProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} from "./productsController";
import { validateData } from "../../middlewares/validationMiddleware";
import {
  createProductSchema,
  updateProductSchema,
} from "../../db/productSchema";

const router = Router();
router.get("/", listProducts);
router.get("/:id", getProductById);
router.put("/:id", validateData(updateProductSchema), updateProduct);
router.delete("/:id", deleteProduct);
router.post("/", validateData(createProductSchema), createProduct);

export default router;
