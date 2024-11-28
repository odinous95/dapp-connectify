"use client";
import { useRouter } from "next/navigation";

type FormRedirectProps = {
  message: string;
  linkText: string;
  redirectPath: string;
};

export function FormRedirect({
  message,
  linkText,
  redirectPath,
}: FormRedirectProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col py-10">
      <div className="text-neutral-500 text-center font-light dark:text-neutral-400">
        {message}
        <span
          onClick={() => router.push(redirectPath)}
          className="text-neutral-800 cursor-pointer hover:underline ml-1 dark:text-neutral-200 hover:dark:text-neutral-100"
        >
          {linkText}
        </span>
      </div>
    </div>
  );
}
