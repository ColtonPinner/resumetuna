import { Geist, Geist_Mono } from 'next/font/google';

// Initialize Geist fonts once for the entire app
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});