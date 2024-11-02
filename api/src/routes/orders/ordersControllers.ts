import { Request, Response } from "express";
import { db } from "../../db";
import { orderItemsTable, ordersTable } from "../../db/ordersSchema";
export async function createOrder(req: Request, res: Response) {
  try {
    const { order, items } = req.cleanBody;
    const userId = req.userId;
    if (!userId) {
      res.status(400).json({ message: "'Invalid order data" });
    }
    const [newOrder] = await db
      .insert(ordersTable)
      .values({ userId: userId })
      .returning();

    const orderItems = items.map((item: any) => ({
      ...item,
      orderId: newOrder.id,
    }));

    const newOrderItems = await db
      .insert(orderItemsTable)
      .values(orderItems)
      .returning();
    res.status(201).json({ ...newOrder, items: newOrderItems });
    console.log(order);
  } catch (error) {
    res.status(400).json({ message: "'Invalid order data" });
  }
}
