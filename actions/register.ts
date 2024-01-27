"use server";

import * as z from "zod";
import bcrypt from "bcrypt";

import {db} from "@/lib/db";

import { RegisterSchema } from "@/schemas";

import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const exitingUser = await getUserByEmail(email);
  
  if (exitingUser) {
    return {
      error: "Email already in use",
    };
  }


  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  // TODO: SEND VERIFICATION TOKEN EMAIL

  return {
    success: "User created! ",
  };
};
