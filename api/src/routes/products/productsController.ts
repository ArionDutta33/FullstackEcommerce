import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable } from "../../db/productSchema";
export function listProducts(req: Request, res: Response) {
  res.send("Products");
}

export function getProductById(req: Request, res: Response) {
  res.send("A Product");
}
export async function createProduct(req: Request, res: Response) {
  console.log("hello");
  await db.insert(productsTable).values(req.body);
}

export function updateProduct(req: Request, res: Response) {
  res.send("Product updated");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("Product deleted");
}
