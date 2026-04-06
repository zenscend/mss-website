import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mlumbisecurity.co.za"),
  title: {
    default: "Mlumbi Security Services (Pty) Ltd | Armed & Private Security South Africa",
    template: "%s | Mlumbi Security Services",
  },
  description:
    "Mlumbi Security Services (Pty) Ltd — PSIRA-registered armed guards, unarmed guards, mobile patrols, CCTV surveillance, access control, and rapid response across South Africa.",
  keywords: [
    "armed security South Africa",
    "private security company",
    "PSIRA registered security",
    "armed guards",
    "unarmed guards",
    "mobile patrols",
    "CCTV surveillance",
    "access control",
    "rapid response",
    "security company South Africa",
    "Mlumbi Security Services",
  ],
  authors: [{ name: "Mlumbi Security Services (Pty) Ltd" }],
  creator: "Mlumbi Security Services (Pty) Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: "https://mlumbisecurity.co.za",
    siteName: "Mlumbi Security Services",
    title: "Mlumbi Security Services (Pty) Ltd | Armed & Private Security",
    description:
      "PSIRA-registered armed guards, mobile patrols, CCTV surveillance, access control and rapid response. Protecting your people, property and assets around the clock.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mlumbi Security Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mlumbi Security Services (Pty) Ltd | Armed & Private Security",
    description:
      "PSIRA-registered armed guards, mobile patrols, CCTV surveillance, access control and rapid response across South Africa.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mlumbi Security Services (Pty) Ltd",
  description:
    "PSIRA-registered private security company offering armed guards, unarmed guards, mobile patrols, CCTV surveillance, access control, and rapid response across South Africa.",
  url: "https://mlumbisecurity.co.za",
  logo: "https://mlumbisecurity.co.za/logo.png",
  image: "https://mlumbisecurity.co.za/og-image.png",
  email: "info@mlumbisecurity.co.za",
  areaServed: "South Africa",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Security Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Armed Guards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Unarmed Guards" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Patrols" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV Surveillance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Access Control" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rapid Response" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
