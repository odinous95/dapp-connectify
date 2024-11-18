"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { userFeature } from "./instance";
import { signUpSchema } from "./ui/zod-validation";

export async function signupAction(prevState: any, formData: FormData) {
  try {
    userFeature.signup(formData);
  } catch (error: any) {
    console.error("Signup Error:", error);
    return {
      success: false,
      message: "An unexpected error occurred during sign up. Please try again.",
    };
  }

  redirect("/sign-in");
}
