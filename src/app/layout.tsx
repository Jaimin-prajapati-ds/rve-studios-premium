import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RVE STUDIOS | Premium Content Agency",
  description: "Bespoke cinematic content and brand management for the world's most innovative leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
