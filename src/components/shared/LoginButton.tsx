// components/shared/LoginButton.tsx
"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="rounded-md bg-blue-600 px-4 py-2 text-white"
    >
      Sign in with Google
    </button>
  );
}