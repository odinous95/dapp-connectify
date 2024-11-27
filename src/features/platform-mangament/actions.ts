"use server";
import { redirect } from "next/navigation";
import { platformFeature } from ".";
import { PLATFRORM_ERRORS } from "./types";

export async function addPlatformAction(preState: any, payload: FormData) {
  const platform = payload.get("platform")?.toString();
  const platformPayload = { platform };
  const response = await platformFeature.service.addPlatformLink(
    platformPayload
  );
  if (response.success) {
    redirect(`/user-card/${response.userId}`);
  } else {
    return {
      success: false,
      message: response.message || "adding a link failed",
      errors: response.errors as PLATFRORM_ERRORS,
    };
  }
}
