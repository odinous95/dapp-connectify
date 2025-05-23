import { db } from "@/drizzle-db";
import { userTable } from "@/drizzle-db/schema";
import { eq } from "drizzle-orm";
export function createRepository() {
  async function setProfileImageUrlInDb(userId: number, imageUrl: string) {
    await db
      .update(userTable)
      .set({ profileImageUrl: imageUrl })
      .where(eq(userTable.id, userId));
  }
  return {
    setProfileImageUrlInDb,
  };
}
export type Repository = ReturnType<typeof createRepository>;
