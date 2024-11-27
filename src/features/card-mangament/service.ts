import { userIdSchema } from "@/zod/zod-validation";
import { Repository } from "./repository";

export function createService(repository: Repository) {
  async function getUserProfileById(userId: string) {
    const userIdValidated = userIdSchema.safeParse({ userId });
    if (!userIdValidated.success) {
      return {
        success: false,
      };
    }
    try {
      const userProfile = await repository.getUserProfileByIdFromDb(userId);
      return {
        success: true,
        userProfile: userProfile,
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
    getUserProfileById,
  };
}
