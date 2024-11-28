"use server";
import { redirect } from "next/navigation";
import { userFeature } from ".";
import { SIGNIN_ERRORS, SIGNUP_ERRORS } from "./types";
import { createSession, logout } from "../../lib/session";
import { imageFileSchema } from "@/zod/zod-validation";
import { uploadFileToS3 } from "@/lib/upload-image-aws";
import { revalidatePath } from "next/cache";
import { sanitizeFileName } from "@/lib/sanitize-file-name";

export async function signupAction(preState: unknown, payload: FormData) {
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

export async function signinAction(prevState: unknown, payload: FormData) {
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

export async function imageUploadAction(preState: unknown, payload: FormData) {
  const file = payload.get("imagefile") as File;
  const userId = parseInt(payload.get("userId") as string, 10);
  if (!file) {
    return {
      success: false,
      message: "No file provided.",
    };
  }

  const validation = imageFileSchema.safeParse(file);
  if (!validation.success) {
    const errors = validation.error.errors.map((err) => err.message).join("\n");
    return {
      success: false,
      message: "Validation error",
      errors: errors,
    };
  }
  try {
    const buffer = await file.arrayBuffer();
    const bufferData = Buffer.from(buffer);
    const fileNameSanitized = sanitizeFileName(file.name);
    const key = `${Date.now()}_${fileNameSanitized}`;
    const bucketName = "conncitfy-bucket-salt";
    const response = await uploadFileToS3(
      "conncitfy-bucket-salt",
      key,
      bufferData
    );
    const profileImageUrl = `https://${bucketName}.s3.${"eu-north-1"}.amazonaws.com/${key}`;
    userFeature.service.setProfileImageUrl(userId, profileImageUrl);
    if (response) {
      return {
        success: true,
        message: "Image uploaded successfully!",
      };
    } else {
      return {
        success: false,
        message: "Image upload failed!",
      };
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    return {
      success: false,
      message: "Error uploading image.",
      error: error,
    };
  }
}
