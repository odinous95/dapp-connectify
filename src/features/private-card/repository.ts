import { db } from "@/drizzle-db";
import { userTable } from "@/drizzle-db/schema";
import { eq } from "drizzle-orm";
export function createRepository() {
  async function getUserProfileByIdFromDb(userId: string) {
    const [userProfile] = await db
      .select({
        id: userTable.id,
        name: userTable.name,
        email: userTable.email,
        phone: userTable.phone,
        status: userTable.status,
        biography: userTable.biography,
        profileImageUrl: userTable.profileImageUrl,
      })
      .from(userTable)
      .where(eq(userTable.id, Number(userId)));
    return userProfile;
  }
  async function setProfileImageUrlInDb(userId: number, imageUrl: string) {
    await db
      .update(userTable)
      .set({ profileImageUrl: imageUrl })
      .where(eq(userTable.id, userId));
  }

  return {
    getUserProfileByIdFromDb,
    setProfileImageUrlInDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
