import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jairo Ulises López | Software Engineer",
  description: "Portafolio de Jairo Ulises López Durón. Ingeniero en Sistemas y Desarrollador Full Stack especializado en microservicios, AWS y Green IT.",
  openGraph: {
    title: "Jairo Ulises López | Software Engineer",
    description: "Desarrollador Full Stack especializado en microservicios, AWS y Green IT.",
    url: "https://cv-portafolio-ecru.vercel.app",
    siteName: "JUL . dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jairo Ulises Portafolio"
      }
    ],
    locale: "es_MX",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
