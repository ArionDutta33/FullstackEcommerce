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
import { verifySeller, verifyToken } from "../../middlewares/authMiddleware";

const router = Router();
router.get("/", listProducts);
router.get("/:id", getProductById);
router.put(
  "/:id",
  verifyToken,
  verifySeller,
  validateData(updateProductSchema),
  updateProduct
);
router.delete("/:id", verifyToken, verifySeller, deleteProduct);
router.post(
  "/",
  verifyToken,
  verifySeller,
  validateData(createProductSchema),
  createProduct
);

export default router;
