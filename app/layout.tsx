import type { Metadata } from "next";
import "./globals.css";
import AnimationWrapper from "@/components/AnimationWrapper";

export const metadata: Metadata = {
  title: "Surya Rahmat Fatahillah - Full Stack Developer & Tech Enthusiast",
  description: "Portfolio of Surya Rahmat Fatahillah - Full Stack Web Developer, Mobile Developer, and Network Engineer. GPA 3.95 student passionate about building innovative solutions.",
  keywords: ["Full Stack Developer", "Mobile Developer", "React", "Flutter", "Laravel", "Portfolio", "Google Student Ambassador"],
  authors: [{ name: "Surya Rahmat Fatahillah" }],
  openGraph: {
    title: "Surya Rahmat Fatahillah - Portfolio",
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
    <html lang="en">
      <body>
        <AnimationWrapper>{children}</AnimationWrapper>
      </body>
    </html>
  );
}
