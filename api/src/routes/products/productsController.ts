import { Request, Response } from "express";
export function listProducts(req: Request, res: Response) {
  res.send("Products");
}

export function getProductById(req: Request, res: Response) {
  res.send("A Product");
}
export function createProduct(req: Request, res: Response) {
  res.send("New product created");
}

export function updateProduct(req: Request, res: Response) {
  res.send("Product updated");
}

export function deleteProduct(req: Request, res: Response) {
  res.send("Product deleted");
}
