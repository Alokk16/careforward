// lib/auth.ts

import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "./db";

// 1. Get the environment variables
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

// 2. Check if the environment variables are set
if (!googleClientId || !googleClientSecret) {
  throw new Error("Missing Google OAuth client ID or secret");
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    // 3. Use the guaranteed variables
    Google({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  ],
});