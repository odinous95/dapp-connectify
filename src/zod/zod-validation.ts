import { z } from "zod";

const nameSchema = z
  .string()
  .min(3, "Name must be at least 3 characters long")
  .max(40, "Name must be at most 40 characters long");

const emailSchema = z.string().email("Correct email is required");

const passwordSchema = z
  .string()
  .min(8, "Your password should be at least 8 characters!")
  .max(40, "Your password should be at most 40 characters!")
  .refine(
    (val) => /[A-Z]/.test(val),
    "Your password must contain at least one uppercase letter!"
  )
  .refine(
    (val) => /[!@#$%^&*(),.?":{}|<>]/.test(val),
    "Your password must contain at least one special character!"
  );

export const signUpSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const userIdSchema = z.object({
  userId: z
    .union([z.string(), z.number()])
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), { message: "userId must be a valid number" }),
});

export const platformSchema = z.object({
  userId: z.number(),
  platformName: nameSchema,
  platformUrl: nameSchema,
});

//--------------------------------------------
export type SignUpFieldValues = z.infer<typeof signUpSchema>;
export type SignInFieldValues = z.infer<typeof signInSchema>;
