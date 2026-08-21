import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Surya Rahmat Fatahillah — Full Stack & AI Integration Developer",
  description:
    "Portfolio of Surya Rahmat Fatahillah — Mobile Developer, Full Stack Developer, Data Analyst, and AI Integration Specialist. Specializing in Flutter, React, Laravel, Node.js, and AI integration (LLM, chatbots, document analysis).",
  keywords: [
    "Full Stack Developer",
    "Mobile Developer",
    "React",
    "Flutter",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: "Surya Rahmat Fatahillah" }],
  openGraph: {
    title: "Surya Rahmat Fatahillah — Portfolio",
    description: "Full Stack Developer & Tech Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-white text-zinc-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
