"use client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SignUpFieldValues,
  signUpSchema,
} from "../../../../zod/zod-validation";
import Heading from "@/app/reuseble-components/heading";
import Input from "@/app/reuseble-components/input";
import { SubmitButton } from "./submit-button";
import { signupAction } from "../actions";
import { useActionState } from "react";

export default function SignUpForm() {
  const [state, formAction] = useActionState(signupAction, null);
  const {
    register,
    formState: { errors },
  } = useForm<SignUpFieldValues>({
    resolver: zodResolver(signUpSchema),
  });
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-gray-100 text-black rounded m-auto p-3 w-full max-w-md sm:p-8  md:max-w-lg  md:p-8 lg:max-w-xl xl:max-w-2xl">
        <div className="flex flex-col gap-2">
          <Heading title="Saltis!" subtitle="Create an Account!" center />
          <form action={formAction}>
            <Input id="email" label="Email Address" register={register} />
            <span aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.email)}
            </span>

            <Input id="name" label="Full Name" register={register} />
            <span aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.name)}
            </span>

            <Input
              id="password"
              label="Password"
              register={register}
              type="password"
            />
            <span aria-live="polite" className="text-red-700 p-5">
              {state?.errors && JSON.stringify(state.errors.password)}
            </span>

            <SubmitButton />
          </form>
        </div>
        <div className="flex flex-col py-10">
          <hr />
          <div className="text-neutral-500 text-center font-light">
            <div>
              Already have an account?
              <span
                onClick={() => router.push("/sign-in")}
                className="text-neutral-800 cursor-pointer hover:underline"
              >
                Log in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
