import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Johnson - Full-Stack Developer Portfolio",
  description: "A passionate full-stack developer crafting beautiful, functional, and user-centered digital experiences with modern technologies and creative 3D elements.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Three.js", "Portfolio"],
  authors: [{ name: "Alex Johnson" }],
  creator: "Alex Johnson",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexjohnson.dev",
    title: "Alex Johnson - Full-Stack Developer Portfolio",
    description: "A passionate full-stack developer crafting beautiful, functional, and user-centered digital experiences with modern technologies and creative 3D elements.",
    siteName: "Alex Johnson Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Johnson - Full-Stack Developer Portfolio",
    description: "A passionate full-stack developer crafting beautiful, functional, and user-centered digital experiences with modern technologies and creative 3D elements.",
    creator: "@alexjohnson",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
