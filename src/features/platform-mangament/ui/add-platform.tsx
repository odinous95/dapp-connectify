"use client";

import { useActionState } from "react";
import { addPlatformAction } from "../actions";
import { Input, SubmitButton } from "@/ui/components";
import { usePathname, useSearchParams } from "next/navigation";

export function AddPlatform() {
  const [state, formAction, isPending] = useActionState(
    addPlatformAction,
    null
  );
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const pathname = usePathname();
  console.log(pathname);
  console.log(state, "this state");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-gray-100 text-black rounded m-auto p-3 w-full max-w-md sm:p-8  md:max-w-lg  md:p-8 lg:max-w-xl xl:max-w-2xl">
        <div className="flex flex-col gap-2">
          <form action={formAction}>
            <Input
              id="platform"
              label="Platform Link"
              name={"platform"}
              type={"text"}
              disabled={false}
            />
            <span aria-live="polite" className="text-red-700">
              {state?.message && JSON.stringify(state.message)}
            </span>

            <SubmitButton title={"Add Platform"} />
          </form>
        </div>
      </div>
    </div>
  );
}
