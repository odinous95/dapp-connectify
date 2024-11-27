import { signUpSchema } from "@/zod/zod-validation";
import { Repository } from "./repository";
import { SIGNUP_ERRORS, SIGNUP_PAYLOAD } from "./types";

export function createService(repository: Repository) {
  async function signup({ email, password, name }: SIGNUP_PAYLOAD) {
    const userValidated = signUpSchema.safeParse({ email, password, name });

    if (!userValidated.success) {
      const errors = userValidated.error.flatten().fieldErrors;
      const errorMessages: SIGNUP_ERRORS = {};
      if (errors.email && errors.email.length > 0) {
        errorMessages.email =
          "Email is required and should be a valid email address.";
      }
      if (errors.password && errors.password.length > 0) {
        errorMessages.password =
          "Password is required and must be at least 6 characters long.";
      }
      if (errors.name && errors.name.length > 0) {
        errorMessages.name =
          "Name is required and should be at least 3 characters long.";
      }
      return {
        success: false,
        message: "Validation failed. Please check your input.",
        errors: errorMessages,
      };
    }

    try {
      const userId = (
        await repository.signupUserInDb(userValidated.data)
      ).toString();
      return {
        success: true,
        userId: userId,
        message: "Sign up successful!",
        errors: {},
      };
    } catch (dbError) {
      console.error("Database Error:", dbError);
      return {
        success: false,
        message: "An error occurred while saving the user to the database.",
        errors: dbError,
      };
    }
  }
  return {
    signup,
  };
}
