import { platformSchema } from "@/zod/zod-validation";
import { Repository } from "./repository";

export function createService(repository: Repository) {
  async function addPlatformLink(platformPayload: string) {
    const userIdValidated = platformSchema.safeParse({ platformPayload });
    if (!userIdValidated.success) {
      return {
        success: false,
      };
    }
    try {
      await repository.addPlatformLinkToDb(userIdValidated.data.link);
      return {
        success: true,
      };
    } catch (dbError) {
      console.error("Database Error:", dbError);
      return {
        success: false,
        errors: dbError,
      };
    }
  }
  return {
    addPlatformLink,
  };
}
