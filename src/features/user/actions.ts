"use server";
import { redirect } from "next/navigation";
import { userFeature } from ".";

type SignupErrors = {
  email?: string;
  name?: string;
  password?: string;
};

export async function signupAction(
  state: { success: boolean; message: string; errors: SignupErrors },
  payload: FormData
) {
  try {
    userFeature.service.signup(payload);
  } catch (errors: unknown) {
    console.error("Signup Error:", errors);
    return {
      success: false,
      message: "Signup failed",
      errors: errors as SignupErrors,
    };
  }
  redirect("/sign-in");
}
