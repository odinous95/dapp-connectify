import { db } from "@/drizzle-db";
import { userSocialLinksTable } from "@/drizzle-db/schema";
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
  return {
    addPlatformToDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
