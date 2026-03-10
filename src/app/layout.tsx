import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RVE STUDIOS | Premium AI Video & Image Agency",
  description: "Bespoke AI-generated cinematic content and brand management.",
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
