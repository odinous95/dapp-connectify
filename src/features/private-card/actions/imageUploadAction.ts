"use server";
import { sanitizeFileName } from "@/lib/sanitize-file-name";
import { uploadFileToS3 } from "@/lib/upload-image-aws";
import { imageFileSchema } from "@/validation/zod-validation";
import { revalidatePath } from "next/cache";

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
  const buffer = await file.arrayBuffer();
  const bufferData = Buffer.from(buffer);
  const fileNameSanitized = sanitizeFileName(file.name);
  const key = `${Date.now()}_${fileNameSanitized}`;
  // const bucketName = "conncitfy-bucket-salt";

  return uploadFileToS3("conncitfy-bucket-salt", key, bufferData)
    .then(async (response) => {
      // const profileImageUrl = `https://${bucketName}.s3.eu-north-1.amazonaws.com/${key}`;
      // await authFeature.service.setProfileImageUrl(userId, profileImageUrl);
      // console.log(response);

      if (response) {
        revalidatePath(`/user-card/${userId}`);
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
    })
    .catch((error) => {
      console.error("Error uploading image:", error);
      return {
        success: false,
        message: "Error uploading image.",
        error: error,
      };
    });
}
