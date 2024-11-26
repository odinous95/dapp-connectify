import Image from "next/image";
import { USER } from "../types";

export async function UserCard() {
  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
          <Image
            src={"/odin.png"}
            // loader={}
            // blurDataURL={}
            objectFit="cover"
            alt={"user name"}
            // placeholder="blur"
            layout="fill"
            className="rounded-full"
          />
          helleo
        </div>
      </div>
    </div>
  );
}
