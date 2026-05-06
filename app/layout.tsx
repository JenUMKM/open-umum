import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';
import { AOSInit } from "./components/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "OpenUMKM - Platform Komunitas & Marketplace UMKM",
  description: "Hubungkan pelanggan dengan UMKM lokal. Cari toko terdekat, lihat katalog, atau kelola toko Anda dengan mudah.",
  keywords: ["UMKM", "Marketplace Lokal", "Indonesia", "Komunitas Bisnis"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id" 
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col font-sans">
        <AOSInit/>
        {children}
      </body>
    </html>
  );
}