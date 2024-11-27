"use server";
import { redirect } from "next/navigation";
import { userFeature } from ".";
import { SIGNUP_ERRORS } from "./types";
import { AuthError } from "next-auth";
import { signIn } from "../../../auth";
import { createSession } from "@/lib/session";

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

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  // console.log(formData);
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
