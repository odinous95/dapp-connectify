"use server";
import { redirect } from "next/navigation";
import { userFeature } from ".";
import { SIGNIN_ERRORS, SIGNUP_ERRORS } from "./types";
import { createSession, logout } from "../../lib/session";

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
  const file = payload.get("file")?.toString();
  console.log(file);
  // const handleUploadImage = async () => {
  //   if (!fileUploadRef.current || !fileUploadRef.current.files?.[0]) {
  //     alert("Please select an image to upload.");
  //     return;
  //   }
  //   const selectedFile = fileUploadRef.current.files[0];
  //   const maxFileSize = 5 * 1024 * 1024;
  //   if (!selectedFile.type.startsWith("image/")) {
  //     alert("Please upload a valid image file.");
  //     return;
  //   }
  //   if (selectedFile.size > maxFileSize) {
  //     alert("File size exceeds 5MB. Please select a smaller file.");
  //     return;
  //   }
  //   const confirmUpload = window.confirm(
  //     `Are you sure you want to upload the image "${selectedFile.name}"?`
  //   );
  //   if (!confirmUpload) return;
  //   setIsUploading(true);
  //   try {
  //     const key = `${"profile"}/${Date.now()}_${selectedFile.name}`;
  //     const response = await uploadFileToS3(
  //       "conncitfy-bucket-salt",
  //       key,
  //       selectedFile
  //     );
  //     if (response) {
  //       alert("Image uploaded successfully!");
  //     } else {
  //       alert("Image upload failed!");
  //     }
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //     alert("Error uploading image. Please try again.");
  //   } finally {
  //     setIsUploading(false);
  //   }
  // };
}
