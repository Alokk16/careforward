// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers"; // 👈 Import the provider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health Vault",
  description: "Your personal health manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers> {/* 👈 Wrap the children */}
      </body>
    </html>
  );
}