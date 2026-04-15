import type { Metadata } from "next";
import { IBM_Plex_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/data/siteContent";

const sans = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${siteContent.profile.name} | Data Analyst Portfolio`,
  description: siteContent.profile.shortBio,
  applicationName: `${siteContent.profile.name} Portfolio`,
  keywords: [
    "data analyst portfolio",
    "data scientist portfolio",
    "analytics projects",
    "machine learning portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
