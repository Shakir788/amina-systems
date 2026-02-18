import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext"; 
import StickyBar from "../components/ui/StickyBar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amina Systems | Digital Growth Infrastructure",
  description: "We build digital systems that scale Moroccan businesses. High-conversion web apps, WhatsApp automation, and local SEO.",
  openGraph: {
    title: "Amina Systems | Build Your Digital Growth Engine 🚀",
    description: "Stop losing customers to your competitors. We build high-conversion digital infrastructure for Moroccan businesses.",
    url: "https://aminasystems.vercel.app", 
    siteName: "Amina Systems",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Amina Systems - Digital Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* 👇 Calendly Pop-up ke liye zaroori Scripts */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          {}
          <StickyBar />
        </LanguageProvider>
      </body>
    </html>
  );
}