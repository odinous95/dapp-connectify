import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.SECERET_KEY);
console.log(process.env);
export async function uploadFileToS3(
  bucketName: string,
  key: string,
  fileContent: any
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
    ContentType: "image/png", // You can dynamically set this if needed
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
