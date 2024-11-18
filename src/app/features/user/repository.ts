import { db } from "@/app/drizzle-db";
import { userTable } from "@/app/drizzle-db/schema";
import { USER } from "./types";

export function createRepository() {
  async function signupUserInDb({ name, email, password }: USER) {
    await db.insert(userTable).values({ email, password, name });
  }
  return {
    signupUserInDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
