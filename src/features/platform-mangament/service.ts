import { platformSchema } from "@/zod/zod-validation";
import { Repository } from "./repository";

export function createService(repository: Repository) {
  async function addPlatform(platformPayload) {
    // console.log(platformPayload);
    // const platformValidated = platformSchema.safeParse({ platformPayload });
    // console.log(platformValidated);
    // if (!platformValidated.success) {
    //   return {
    //     success: false,
    //   };
    // }
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
  return {
    addPlatform,
  };
}
