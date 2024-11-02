import { Request, Response } from "express";
import { db } from "../../db/index.js";
import { productsTable, createProductSchema } from "../../db/productSchema.js";
import { eq } from "drizzle-orm";
import _ from "lodash";
export async function listProducts(req: Request, res: Response) {
  try {
    const products = await db.select().from(productsTable);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const [product] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, Number.parseInt(req.params.id)));
    if (!product) {
      res.status(404).send({ message: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).send(error);
  }
}
export async function createProduct(req: Request, res: Response) {
  try {
    const [product] = await db
      .insert(productsTable)
      .values(req.cleanBody)
      .returning();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function updateProduct(req: Request, res: Response) {
  try {
    const id = Number.parseInt(req.params.id);
    const updatedFields = req.cleanBody;
    const [product] = await db
      .update(productsTable)
      .set(updatedFields)
      .where(eq(productsTable.id, id))
      .returning();
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function deleteProduct(req: Request, res: Response) {
  try {
    console.log("helo");
    const [deletedProduct] = await db
      .delete(productsTable)
      .where(eq(productsTable.id, Number.parseInt(req.params.id)))
      .returning();
    if (deletedProduct) {
      res.status(200).json(deletedProduct);
    } else {
      res.status(404).send({ message: "Product not found" });
    }
  } catch (error) {}
}
