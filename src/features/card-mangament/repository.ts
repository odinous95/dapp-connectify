import { db } from "@/drizzle-db";
import { userTable } from "@/drizzle-db/schema";
import { eq } from "drizzle-orm";
export function createRepository() {
  async function getUserProfileByIdFromDb(userId: number) {
    const [userProfile] = await db
      .select({
        id: userTable.id,
        name: userTable.name,
        email: userTable.email,
        phone: userTable.phone,
        status: userTable.status,
        biography: userTable.biography,
      })
      .from(userTable)
      .where(eq(userTable.id, userId));
    return userProfile;
  }

  return {
    getUserProfileByIdFromDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
