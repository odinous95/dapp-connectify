import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"}>
      <Image
        alt="logo"
        className=" md:block cursor-pointer w-auto h-auto"
        height="20"
        width="20"
        sizes="40px"
        src="/logo-connectify.png"
      />
    </Link>
  );
}
