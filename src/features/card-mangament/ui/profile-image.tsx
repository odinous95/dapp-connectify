import { ImageInput } from "@/features/user-managment/ui";
import Image from "next/image";

type Props = {
  image?: string;
};

export function ProfileImage({ image }: Props) {
  return (
    <div className="relative flex-shrink-0 w-24 h-24 ">
      {image && (
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
      )}
      <ImageInput />
    </div>
  );
}
