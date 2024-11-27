import { db } from "@/drizzle-db";
export function createRepository() {
  async function addPlatformLinkToDb(platformLink: string) {
    console.log("adding link in repository ", platformLink);
  }
  return {
    addPlatformLinkToDb,
  };
}

export type Repository = ReturnType<typeof createRepository>;
