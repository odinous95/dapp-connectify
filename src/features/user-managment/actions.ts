"use server";
import { redirect } from "next/navigation";
import { userFeature } from ".";
import { SIGNIN_ERRORS, SIGNUP_ERRORS } from "./types";
import { createSession, logout } from "@/lib/session";

export async function signupAction(preState: any, payload: FormData) {
  const email = payload.get("email")?.toString();
  const name = payload.get("name")?.toString();
  const password = payload.get("password")?.toString();
  const signupPayload = { email, name, password };
  const response = await userFeature.service.signup(signupPayload);
  if (response.success) {
    if (response.userId) {
      await createSession(response.userId);
    } else {
      throw new Error("User ID is undefined");
    }
    redirect("/sign-in");
  } else {
    return {
      success: false,
      message: response.message || "Signup failed",
      errors: response.errors as SIGNUP_ERRORS,
    };
  }
}

export async function signinAction(prevState: any, payload: FormData) {
  const email = payload.get("email")?.toString();
  const password = payload.get("password")?.toString();
  const signinPayload = { email, password };
  const response = await userFeature.service.signin(signinPayload);
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

export async function signoutAction() {
  await logout();
  redirect("/sign-in");
}
