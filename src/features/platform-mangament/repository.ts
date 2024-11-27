import { db } from "@/drizzle-db";
import { userSocialLinksTable } from "@/drizzle-db/schema";
import { eq } from "drizzle-orm";
import { PLATFORM } from "./types";
export function createRepository() {
  async function addPlatformToDb({
    userId,
    platformName,
    platformUrl,
  }: PLATFORM) {
    const platform = await db.insert(userSocialLinksTable).values({
      userId,
      platformName,
      platformUrl,
    });

    return platform;
  }
  async function getPlatformsByUserIdFromDb(userId: number) {
    return await db
      .select()
      .from(userSocialLinksTable)
      .where(eq(userSocialLinksTable.userId, userId));
  }

  return {
    addPlatformToDb,
    getPlatformsByUserIdFromDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
