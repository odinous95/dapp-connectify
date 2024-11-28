import { db } from "@/drizzle-db";
import { userTable } from "@/drizzle-db/schema";
import { SIGNIN_USER, USER } from "./types";
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
      return insertedUser.id.toString();
    } catch (error) {
      console.error("Failed to sign up user:", error);
      throw new Error("Failed to sign up  user.");
    }
  }
  async function signinUserInDb({ email, password }: SIGNIN_USER) {
    try {
      const [user] = await db
        .select()
        .from(userTable)
        .where(eq(userTable.email, email));

      if (!user) {
        console.error("User not found");
        return { error: "User not found" };
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        console.error("Invalid password");
        return { error: "Invalid password" };
      }
      return {
        id: user.id.toString(),
        name: user.name,
        email: user.email,
      };
    } catch (error) {
      console.error("Failed to sign in user:", error);
      throw new Error("Failed to sign in user.");
    }
  }
  async function getAllUsersFromDb() {
    const users = db.select().from(userTable);
    return users;
  }
  async function getLoggedInUserFromDb(sessionUserId: string) {
    const [user] = await db
      .select()
      .from(userTable)
      .where(eq(userTable.id, Number(sessionUserId)));
    return user;
  }
  async function setProfileImageUrlInDb(userId: number, imageUrl: string) {
    await db
      .update(userTable)
      .set({ profileImageUrl: imageUrl })
      .where(eq(userTable.id, userId));
  }
  return {
    signupUserInDb,
    signinUserInDb,
    getAllUsersFromDb,
    setProfileImageUrlInDb,
    getLoggedInUserFromDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
