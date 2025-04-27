"use client";

import { useActionState } from "react";
import { addPlatformAction } from "../actions";
import { Input, SubmitButton } from "@/global-ui/components";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
type Props = {
  userId: string;
};
export function AddPlatform({ userId }: Props) {
  const [state, formAction, isPending] = useActionState(
    addPlatformAction,
    null
  );
  return (
    <div className="mt-3 text-gray-300 rounded-2xl bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
      <div className="flex flex-col items-center justify-center h-fit">
        <div className="bg-gray-50 dark:bg-gray-800 dark:text-gray-400 rounded-2xl m-auto p-2 w-full max-w-md sm:p-4 md:max-w-lg md:p-4 lg:max-w-xl xl:max-w-2xl">
          <div className="flex flex-col gap-4">
            <form action={formAction} className="space-y-6">
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
                  className={`mt-1 flex items-center space-x-2 rounded-md p-1 text-sm ${state.success ? "text-green-600" : "text-red-600"
                    }`}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <ExclamationCircleIcon
                    className={`h-5 w-5 ${state.success ? "text-green-500" : "text-red-500"
                      }`}
                  />
                  <strong>{state.message}</strong>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
