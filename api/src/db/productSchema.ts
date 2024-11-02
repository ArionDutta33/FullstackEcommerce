import {
  integer,
  text,
  varchar,
  doublePrecision,
  pgTable,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";

export const productsTable = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  image: varchar("image", { length: 255 }),
  price: doublePrecision("price").notNull(),
});
export const createProductSchema = createInsertSchema(productsTable).omit({
  id: true,
});
export const updateProductSchema = createInsertSchema(productsTable)
  .omit({
    id: true,
  })
  .partial();
