"use client";

import { useActionState } from "react";
import { addPlatformAction } from "../actions";
import { Heading, Input, SubmitButton } from "@/ui/components";

export function AddPlatform() {
  const [state, formAction, isPending] = useActionState(
    addPlatformAction,
    null
  );

  console.log(state);

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
            <span aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.platform)}
            </span>
            <SubmitButton title={"Add Platform"} />
          </form>
        </div>
      </div>
    </div>
  );
}
