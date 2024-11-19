"use server";
import { redirect } from "next/navigation";
import { userFeature } from "./instance";

export async function signupAction(prevState: any, formData: FormData) {
  try {
    userFeature.service.signup(formData);
  } catch (errors: any) {
    console.error("Signup Error:", errors);
    return {
      success: false,
      message: "An unexpected error occurred during sign up. Please try again.",
      errors: errors,
    };
  }
  redirect("/sign-in");
}
