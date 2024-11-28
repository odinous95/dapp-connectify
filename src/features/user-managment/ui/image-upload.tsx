"use client";

import { useState, useRef } from "react";
import DefaultImage from "@/public/profile-placeholder.svg";
import EditIcon from "@/public/edit.svg";
import Image from "next/image";

type Props = {
  profileImg: string | null;
};
export function ImageInput({ profileImg }: Props) {
  const [avatarURL, setAvatarURL] = useState<string>(DefaultImage.src);
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageSelection = () => {
    fileUploadRef.current?.click();
  };
  const handlePreviewImage = () => {
    if (fileUploadRef.current && fileUploadRef.current.files) {
      const uploadedFile = fileUploadRef.current.files[0];
      if (uploadedFile) {
        const cachedURL = URL.createObjectURL(uploadedFile);
        setAvatarURL(cachedURL);
      }
    }
  };
  const handleUploadImage = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    if (!fileUploadRef.current || !fileUploadRef.current.files?.[0]) {
      alert("Please select an image to upload.");
      return;
    }

    // Confirm before uploading
    const confirmUpload = window.confirm(
      "Are you sure you want to upload this image?"
    );
    if (!confirmUpload) {
      return;
    }

    const selectedFile = fileUploadRef.current.files[0];
    const formData = new FormData();
    formData.append("image", selectedFile);

    setIsUploading(true);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Image uploaded successfully!");
      } else {
        alert("Image upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image!");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="relative h-20 w-40">
      <form encType="multipart/form-data">
        <div className="relative">
          {profileImg && profileImg ? (
            <Image
              src={profileImg}
              alt="Avatar"
              className="h-20 w-20 rounded-full object-cover"
              width={80}
              height={80}
            />
          ) : (
            <Image
              src={avatarURL}
              alt="Avatar"
              className="h-20 w-20 rounded-full object-cover"
              width={80}
              height={80}
            />
          )}
          <button
            type="button"
            onClick={handleImageSelection}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-lg"
            title="Edit Avatar"
          >
            <Image src={EditIcon} alt="Edit" className="h-5 w-5 object-cover" />
          </button>
        </div>
        <input
          type="file"
          ref={fileUploadRef}
          hidden
          accept="image/*"
          onChange={handlePreviewImage}
        />
        <button
          type="button"
          onClick={handleUploadImage}
          disabled={isUploading}
          className="p-1 m-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 disabled:opacity-50"
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}
