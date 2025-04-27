"use server";
import { redirect } from "next/navigation";
import { authFeature } from "../feature";
import { createSession } from "./createSession";
import { SIGNUP_ERRORS } from "../types";

export async function signupAction(preState: unknown, payload: FormData) {
  const email = payload.get("email")?.toString();
  const name = payload.get("name")?.toString();
  const password = payload.get("password")?.toString();
  const signupPayload = { email, name, password };
  const response = await authFeature.service.signup(signupPayload);
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
