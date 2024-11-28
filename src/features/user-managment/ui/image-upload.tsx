"use client";

import { useState, useRef, useActionState } from "react";
import DefaultImage from "@/public/profile-placeholder.svg";
import EditIcon from "@/public/edit.svg";
import Image from "next/image";
// import { uploadFileToS3 } from "../../../lib/upload-image-aws";
import { imageUploadAction } from "../actions";

type Props = {
  profileImg: string | null;
  userId: number;
};
export function ImageInput({ userId, profileImg }: Props) {
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [avatarURL, setAvatarURL] = useState<string>(DefaultImage.src);
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
  const [state, formAction, isPending] = useActionState(
    imageUploadAction,
    null
  );

  console.log(state, "state form");
  return (
    <div className="relative h-20 w-40">
      <form action={formAction}>
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
          id="imagefile"
          name="imagefile"
          ref={fileUploadRef}
          hidden
          accept="image/*"
          onChange={handlePreviewImage}
        />

        <input id="userId" type="hidden" name="userId" defaultValue={userId} />
        <button
          type="submit"
          disabled={isUploading}
          className="p-1 m-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 disabled:opacity-50"
        >
          {isUploading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
}
