import { z } from "zod";

// Here we have just one value so no need to add Object.
export const usernameValidation = z
  .string()
  .min(2, "Username must atleast 2 characters") //(Min value, Error)
  .max(20, "Username must be not more than 20 characters") //(Max value, Error)
  .regex(/^[a-zA-Z0-9_]+$/g, "Username must not contain special character");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address" }),
  pass: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
