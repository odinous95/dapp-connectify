import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "../../../../auth";
import { deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

type SignOutButtonProps = {
  redirectPath?: string;
  buttonText?: string;
  className?: string;
};

export function SignOutButton({
  redirectPath = "/sign-in",
  buttonText = "Sign Out",
  className = "",
}: SignOutButtonProps) {
  const handleSignOut = async (event: React.FormEvent) => {
    event.preventDefault();
    deleteSession();
    await signOut();
    redirect(redirectPath);
  };

  return (
    <form onSubmit={handleSignOut}>
      <button
        className={`flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 ${className}`}
      >
        <PowerIcon className="w-6" />
        <div className="hidden md:block">{buttonText}</div>
      </button>
    </form>
  );
}
