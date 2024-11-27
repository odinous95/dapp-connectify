"use server";
import { revalidatePath } from "next/cache";
import { platformFeature } from ".";
import { PLATFRORM_ERRORS } from "./types";

export async function addPlatformAction(preState: any, payload: FormData) {
  console.log(payload);
  const platformName = payload.get("name")?.toString();
  const platformUrl = payload.get("url")?.toString();
  const userId = payload.get("userId")?.toString();
  const platformPayload = { platformName, platformUrl, userId };

  const response = await platformFeature.service.addPlatform(platformPayload);
  console.log(response);
  if (response.success) {
    // revalidatePath("/");
    return {
      success: true,
      message: "Link has been added successfully!",
    };
  } else {
    return {
      success: false,
      message: response.message || "adding a link failed",
      errors: response.errors as PLATFRORM_ERRORS,
    };
  }
}
