import { db } from "@/drizzle-db";
import { userSocialLinksTable } from "@/drizzle-db/schema";
export function createRepository() {
  async function addPlatformToDb({ userId, platformName, platformUrl }) {
    const platform = await db
      .insert(userSocialLinksTable)
      .values({ userId, platform, url });
    return platform;
  }
  return {
    addPlatformToDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
