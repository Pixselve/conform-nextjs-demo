import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conform NextJS Demo",
  description: "Conform NextJS Demo",
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
