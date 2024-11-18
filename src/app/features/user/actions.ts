"use server";
import { revalidatePath } from "next/cache";
import axios from "axios";
import { redirect } from "next/navigation";

export async function signupAction(prevState: any, formData: FormData) {
  const id = formData.get("id")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();
  const userValidated = signUpSchema.safeParse({ id, email, password, name });

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
  try {
    const response = await axios.post(
      "https://salt.odinobusi.online/api/v1/users/signup",
      { email, password, name }
    );
    console.log(response);
    if (response.status !== 201) {
      return {
        success: false,
        message:
          "An unexpected error occurred during sign up. Please try again.",
      };
    }

    revalidatePath("/get-users");
  } catch (error: any) {
    console.error("Signup Error:", error);
    return {
      success: false,
      message: "An unexpected error occurred during sign up. Please try again.",
    };
  }

  redirect("/get-users");
}
