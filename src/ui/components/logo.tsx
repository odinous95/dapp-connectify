import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href={"/"}>
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer w-auto h-auto"
        height="60"
        width="60"
        sizes="80px"
        src="/logo-connectify.png"
      />
    </Link>
  );
}
