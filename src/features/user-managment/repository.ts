import { db } from "@/drizzle-db";
import { userTable } from "@/drizzle-db/schema";
import { USER } from "./types";

export function createRepository() {
  async function signupUserInDb({ name, email, password }: USER) {
    return await db.insert(userTable).values({ name, email, password });
  }
  return {
    signupUserInDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
