"use client";

import { useActionState } from "react";
import { uploadImageAction } from "../actions";
import { useState, useRef } from "react";
import DefaultImage from "@/public/profile-placeholder.svg";
import EditIcon from "/public/edit.svg";
import Image from "next/image";
export function ImageInput() {
  const [state, formAction, isPending] = useActionState(
    uploadImageAction,
    null
  );
  const [avatarURL, setAvatarURL] = useState(DefaultImage);
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const handleImageUpload = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    fileUploadRef.current?.click();
  };

  const uploadImageDisplay = async () => {
    if (fileUploadRef.current && fileUploadRef.current.files) {
      const uploadedFile = fileUploadRef.current.files[0];
      const cachedURL = URL.createObjectURL(uploadedFile);
      setAvatarURL(cachedURL);
    }
  };

  return (
    <div className="relative h-20 w-40">
      <form action={formAction} id="form">
        <Image
          src={avatarURL}
          alt="Avatar"
          className="h-20 w-20 rounded-full object-cover"
          width={20}
          height={20}
        />

        <button
          type="submit"
          onClick={handleImageUpload}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-8 w-8 rounded-full bg-white shadow-lg"
          title="Edit Avatar"
        >
          <Image src={EditIcon} alt="Edit" className="h-5 w-5 object-cover" />
        </button>

        <input
          type="file"
          id="file"
          ref={fileUploadRef}
          hidden
          onChange={uploadImageDisplay}
        />
      </form>
    </div>
  );
}

{
  /* <div className="profile-image-upload">
          <input
            id="file"
            name="image"
            type="file"
            accept="image/*"
            hidden
            className="hidden-input"
          />
          <label htmlFor="image" className="image-placeholder">
            <span className="plus-sign">+</span>
          </label>
        </div> */
}

{
  /* {state?.errors?.image && (
        <strong className="mt-1 text-sm text-red-600">
          {state.errors.image}
        </strong>
      )} */
}
