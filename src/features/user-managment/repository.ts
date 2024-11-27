import { db } from "@/drizzle-db";
import { userTable } from "@/drizzle-db/schema";
import { USER } from "./types";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
export function createRepository() {
  async function signupUserInDb({ name, email, password }: USER) {
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
      const [insertedUser] = await db
        .insert(userTable)
        .values({ name, email, password: hashedPassword })
        .returning({ id: userTable.id });
      return insertedUser.id;
    } catch (error) {
      console.error("Failed to sign up user:", error);
      throw new Error("Failed to sign up  user.");
    }
  }

  async function getUserByEmailFromDb(email: string) {
    try {
      const [user] = await db
        .select()
        .from(userTable)
        .where(eq(userTable.email, email));
      return user;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      throw new Error("Failed to fetch user.");
    }
  }

  return {
    signupUserInDb,
    getUserByEmailFromDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
