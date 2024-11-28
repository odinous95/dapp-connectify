import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import { Readable } from "stream";
dotenv.config();
export async function uploadFileToS3(
  bucketName: string,
  key: string,
  fileContent: Buffer | Uint8Array | Blob | string | Readable
) {
  if (!process.env.accessKeyId || !process.env.secretAccessKey) {
    throw new Error("AWS credentials are not defined");
  }
  const s3Client = new S3Client({
    region: "eu-north-1",
    credentials: {
      accessKeyId: process.env.accessKeyId,
      secretAccessKey: process.env.secretAccessKey,
    },
  });
  const params = {
    Body: fileContent,
    Bucket: bucketName,
    Key: key,
    ContentType: "image/png",
  };
  try {
    const command = new PutObjectCommand(params);
    const response = await s3Client.send(command);
    console.log("File uploaded successfully", response);
    return response;
  } catch (error) {
    console.error("Error uploading file", error);
    throw error;
  }
}
