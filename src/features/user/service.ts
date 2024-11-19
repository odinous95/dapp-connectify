import { signUpSchema } from "@/zod/zod-validation";
import { Repository } from "./repository";

export function createService(repository: Repository) {
  return {
    signup(formData: FormData) {
      const email = formData.get("email")?.toString();
      const password = formData.get("password")?.toString();
      const name = formData.get("name")?.toString();
      const userValidated = signUpSchema.safeParse({ email, password, name });
      if (!userValidated.success) {
        const errors = userValidated.error.flatten().fieldErrors;
        const errorMessages: Record<string, string> = {};

        if (errors.email) {
          errorMessages.email =
            "Email is required and should be a valid email address.";
        }
        if (errors.password) {
          errorMessages.password =
            "Password is required and must be at least 6 characters long.";
        }
        if (errors.name) {
          errorMessages.name =
            "Name is required and should be at least 3 characters long.";
        }
        return {
          success: false,
          message: "Validation failed. Please check your input.",
          errors: errorMessages,
        };
      }
      repository.signupUserInDb(userValidated.data);
    },
  };
}
