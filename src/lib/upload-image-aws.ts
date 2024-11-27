// const AWS = require("aws-sdk");
// ;
// const s3 = new AWS.S3();

// async function uploadImage(file: any) {
//   const params = {
//     Bucket: "your-bucket-name",
//     Key: `profile-images/${Date.now()}-${file.originalname}`, // Unique file name
//     Body: file.buffer,
//     ContentType: file.mimetype,
//     ACL: "public-read", // Make the image publicly accessible
//   };

//   try {
//     const data = await s3.upload(params).promise();
//     return data.Location; // This is the public URL of the image
//   } catch (error) {
//     console.error("Error uploading image:", error);
//     throw error;
//   }
// }

//conncitfy-bucket-salt
// `profile-images/${Date.now()}-${file.originalname}`
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const uploadFileToS3 = async (
  bucketName: string,
  key: string,
  fileContent: string
) => {
  // Create S3 client
  const s3Client = new S3Client({});

  // Set upload parameters
  const params = {
    Body: fileContent,
    Bucket: bucketName,
    Key: key,
  };

  try {
    // Upload file to S3
    const command = new PutObjectCommand(params);
    const response = await s3Client.send(command);
    console.log("File uploaded successfully", response);
  } catch (error) {
    console.error("Error uploading file", error);
  }
};

const bucketName = "my-bucket";
const key = "my-file.txt";
const fileContent = "This is the content of my file";

uploadFileToS3(bucketName, key, fileContent);
