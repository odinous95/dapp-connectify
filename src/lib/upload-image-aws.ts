import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export async function uploadFileToS3(
  bucketName: string,
  key: string,
  fileContent: any
) {
  // console.log("Access Key:", process.env.access_key);
  // console.log("Secret Key:", process.env.secret_key);
  // console.log("Secret Key:", process.env.DATABASE_URL);

  const s3Client = new S3Client({
    region: "eu-north-1",
    credentials: {
      accessKeyId: "AKIAQGYBQCX3DSOAMK2M",
      secretAccessKey: "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",
    },
  });
  const params = {
    Body: fileContent,
    Bucket: bucketName,
    Key: key,
    ContentType: fileContent.type,
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
