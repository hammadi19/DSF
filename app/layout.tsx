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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://dsf-autocare.vercel.app"),
  applicationName: "DSF Autocare",
  title: "DSF Autocare | Mobile Vehicle Servicing in Leicestershire",
  description:
    "Mobile vehicle servicing, diagnostics and repairs from DSF Autocare across Leicestershire.",
  keywords: [
    "DSF Autocare",
    "mobile mechanic Leicestershire",
    "mobile vehicle servicing",
    "car diagnostics Leicestershire",
    "Shepshed mechanic",
  ],
  creator: "DSF Autocare",
  publisher: "DSF Autocare",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "DSF Autocare | Mobile Vehicle Servicing in Leicestershire",
    description:
      "Mobile vehicle servicing, diagnostics and repairs from DSF Autocare across Leicestershire.",
    siteName: "DSF Autocare",
    images: [
      {
        url: "/assets/dsf/logo-transparent.png",
        width: 1024,
        height: 1024,
        alt: "DSF Autocare",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSF Autocare | Mobile Vehicle Servicing in Leicestershire",
    description:
      "Mobile vehicle servicing, diagnostics and repairs from DSF Autocare across Leicestershire.",
    images: ["/assets/dsf/logo-transparent.png"],
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
