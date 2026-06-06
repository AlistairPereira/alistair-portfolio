import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alistair Pereira Portfolio",
  description:
    "Digital portfolio book of Alistair Simpson Pereira covering Data Analytics, QA Testing, Power BI, SQL, Python, and AI/ML projects.",
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