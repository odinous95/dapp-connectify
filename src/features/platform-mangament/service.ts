import { platformSchema } from "@/zod/zod-validation";
import { Repository } from "./repository";
import { PLATFORM_PAYLOAD, PLATFRORM_ERRORS } from "./types";

export function createService(repository: Repository) {
  async function addPlatform(platformPayload: PLATFORM_PAYLOAD) {
    const platformValidated = platformSchema.safeParse(platformPayload);
    if (!platformValidated.success) {
      const errors = platformValidated.error.flatten().fieldErrors;
      const errorMessages: PLATFRORM_ERRORS = {};
      if (errors.platformName && errors.platformName.length > 0) {
        errorMessages.platformName =
          "Platform Name is required and should be a valid Name";
      }
      if (errors.platformUrl && errors.platformUrl.length > 0) {
        errorMessages.platformUrl =
          "Platform Url is required and must  be a valid Url";
      }
      return {
        success: false,
        message: "Validation failed. Please check your input.",
        errors: errorMessages,
      };
    }
    try {
      await repository.addPlatformToDb(platformValidated.data);
      return {
        success: true,
        message: "Platform added successfully!",
      };
    } catch (dbError) {
      console.error("Database Error:", dbError);
      return {
        success: false,
        errors: dbError,
      };
    }
  }

  async function getPlatformsByUserId(userId: string) {
    const platforms = await repository.getPlatformsByUserIdFromDb(
      Number(userId)
    );
    return platforms;
  }
  return {
    addPlatform,
    getPlatformsByUserId,
  };
}
