// lib/auth.ts

import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "./db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!, // The '!' asserts the value is not undefined
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
});