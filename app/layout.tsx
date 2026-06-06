import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alistair Pereira | Data Analytics, AI/ML & QA Portfolio",
  description:
    "Portfolio of Alistair Pereira showcasing data analytics, Power BI, SQL, AI/ML projects, and QA testing experience.",
  keywords: [
    "Alistair Pereira",
    "Data Analytics",
    "Power BI",
    "SQL",
    "AI ML",
    "QA Testing",
    "Portfolio",
  ],
  authors: [{ name: "Alistair Pereira" }],
  openGraph: {
    title: "Alistair Pereira | Data Analytics, AI/ML & QA Portfolio",
    description:
      "Explore projects and experience across data analytics, AI/ML, Power BI, SQL, and QA testing.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alistair Pereira Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alistair Pereira | Data Analytics, AI/ML & QA Portfolio",
    description:
      "Portfolio showcasing data analytics, AI/ML, Power BI, SQL, and QA testing work.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
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