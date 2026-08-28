import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Footer } from "./footer";
import { Header } from "./header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DSF Autocare | Mobile Vehicle Servicing in Leicestershire",
  description:
    "Mobile vehicle servicing, diagnostics and repairs from DSF Autocare across Leicestershire.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
