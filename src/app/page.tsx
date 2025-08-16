// app/page.tsx

import LoginButton from "@/components/shared/LoginButton";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Health Vault</h1>
      <p className="mb-4">Your personal health manager.</p>
      <LoginButton />
    </main>
  );
}