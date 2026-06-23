import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import PageTransition from "./components/PageTransition";
import Preloader from "./components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "TAPROVIA | Premium Ceylon Goods",
  description: "Curated collection of premium goods from Sri Lanka. Discover authentic Ceylon tea, spices, and crafts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Preloader />
        <CustomCursor />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
