"use server";
import { revalidatePath } from "next/cache";
import { platformFeature } from ".";
import { PLATFRORM_ERRORS } from "./types";

export async function addPlatformAction(preState: any, payload: FormData) {
  const platformName = payload.get("platformName")?.toString();
  const platformUrl = payload.get("platformUrl")?.toString();
  const userId = parseInt(payload.get("userId") as string, 10);
  const platformPayload = { userId, platformName, platformUrl };
  const response = await platformFeature.service.addPlatform(platformPayload);
  if (response.success) {
    revalidatePath(`/user-card/${userId}`);
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
