"use client";

import { useActionState } from "react";
import { addPlatformAction } from "../actions";
import { Input, SubmitButton } from "@/ui/components";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
type Props = {
  userId: number;
};
export function AddPlatform({ userId }: Props) {
  const [state, formAction, isPending] = useActionState(
    addPlatformAction,
    null
  );
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-gray-100 text-black rounded m-auto p-3 w-full max-w-md sm:p-8  md:max-w-lg  md:p-8 lg:max-w-xl xl:max-w-2xl">
        <div className="flex flex-col gap-2">
          <form action={formAction}>
            <Input
              id="platformName"
              label="Platform name"
              name={"platformName"}
              type={"text"}
              disabled={false}
            />
            {state?.errors?.platformName && (
              <strong className="mt-1 text-sm text-red-600">
                {state.errors.platformName}
              </strong>
            )}
            <Input
              id="platformUrl"
              label="Platform Link"
              name={"platformUrl"}
              type={"text"}
              disabled={false}
            />
            <input
              id="userId"
              type="hidden"
              name="userId"
              defaultValue={userId}
            />

            {state?.errors?.platformUrl && (
              <strong className="mt-1 text-sm text-red-600">
                {state.errors.platformUrl}
              </strong>
            )}
            <SubmitButton title={"Add Platform"} pending={isPending} />
            {state && (
              <div
                className={`mt-4 flex items-center space-x-2 rounded-md p-3 text-sm ${
                  state.success
                    ? "bg-green-50 text-green-600"
                    : "bg-red-50 text-red-600"
                }`}
                aria-live="polite"
                aria-atomic="true"
              >
                <ExclamationCircleIcon
                  className={`h-5 w-5 ${
                    state.success ? "text-green-500" : "text-red-500"
                  }`}
                />
                <strong>{state.message}</strong>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
