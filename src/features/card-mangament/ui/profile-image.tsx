import { ImageInput } from "@/features/user-managment/ui";
import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="relative flex-shrink-0 w-24 h-24 ">
      <ImageInput />
      <Image
        src={"/odin.png"}
        // loader={}
        // blurDataURL={}
        objectFit="cover"
        alt={"Profile name"}
        // placeholder="blur"
        layout="fill"
        className="rounded-full"
      />
    </div>
  );
}
