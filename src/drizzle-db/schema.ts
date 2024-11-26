import { date, integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar({ length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  accountType: varchar("account_type", { length: 50 }).notNull(),
  joinDate: date("join_date").notNull(),
  status: text("status").notNull(),
});
