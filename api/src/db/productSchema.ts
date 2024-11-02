import {
  integer,
  text,
  varchar,
  doublePrecision,
  pgTable,
} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  image: varchar("image", { length: 255 }),
  price: doublePrecision("price").notNull(),
});
