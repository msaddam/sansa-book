import type { Metadata } from "next";
import { Roboto, Bubblegum_Sans, Style_Script } from "next/font/google";
import "./globals.css";
import { FontStyleProvider } from "@/contexts/FontStyleContext";
import FontStyleSelector from "@/components/FontStyleSelector";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const bubblegum = Bubblegum_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bubblegum",
});

const styleScript = Style_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-style-script",
});

export const metadata: Metadata = {
  title: "Sansa Book - Kids Learning Platform",
  description: "Learn to read with 100 words books for kids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${bubblegum.variable} ${styleScript.variable} antialiased`}>
        <FontStyleProvider>
          <FontStyleSelector />
          {children}
        </FontStyleProvider>
      </body>
    </html>
  );
}

