"use server";
import { redirect } from "next/navigation";
import { authFeature } from "../feature";
import { SIGNIN_ERRORS } from "../types";

export async function signinAction(prevState: unknown, payload: FormData) {
  const email = payload.get("email")?.toString();
  const password = payload.get("password")?.toString();
  const signinPayload = { email, password };
  const response = await authFeature.service.signin(signinPayload);
  if (!response || !response.success) {
    return {
      success: false,
      message: response?.message || "Sign in failed",
      errors: response?.errors as SIGNIN_ERRORS,
    };
  }
  if (!response.user || !response.user.id) {
    return {
      success: false,
      message: "User information is missing. Please try again.",
      errors: response?.errors as SIGNIN_ERRORS,
    };
  }
  const userId = response.user.id;
  redirect(`/user-card/${userId}`);
}
