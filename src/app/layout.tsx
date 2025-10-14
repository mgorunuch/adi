import type { Metadata } from "next";
import { Noto_Sans, Oranienbaum } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const oranienbaum = Oranienbaum({
  variable: "--font-oranienbaum",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "ADI - Autonomous Development Intelligence",
  description: "Autonomous AI agent that codes, tests, and ships features from Jira, GitLab, and GitHub issues to merge requests. End-to-end development automation for production backlogs.",
  keywords: ["AI agent", "autonomous coding", "development automation", "Jira automation", "GitLab", "GitHub", "AI software engineer"],
  authors: [{ name: "Ihor" }],
  openGraph: {
    title: "ADI - Autonomous Development Intelligence",
    description: "Autonomous AI agent that codes, tests, and ships features from issues to merge requests",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADI - Autonomous Development Intelligence",
    description: "Autonomous AI agent that codes, tests, and ships features from issues to merge requests",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${oranienbaum.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
