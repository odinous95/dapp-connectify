"use server";
import { redirect } from "next/navigation";
import { userFeature } from ".";
import { SIGNUP_ERRORS } from "./types";

export async function signupAction(preState: any, payload: FormData) {
  const email = payload.get("email")?.toString();
  const name = payload.get("name")?.toString();
  const password = payload.get("password")?.toString();
  const signupPayload = { email, name, password };
  const response = await userFeature.service.signup(signupPayload);
  if (response.success) {
    redirect("/sign-in");
  } else {
    return {
      success: false,
      message: response.message || "Signup failed",
      errors: response.errors as SIGNUP_ERRORS,
    };
  }
}
