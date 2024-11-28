import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFileToS3(
  bucketName: string,
  key: string,
  fileContent: any
) {
  console.log("Access Key:", process.env.access_key);
  console.log("Secret Key:", process.env.secret_key);
  console.log("Secret Key:", process.env.DATABASE_URL);

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
