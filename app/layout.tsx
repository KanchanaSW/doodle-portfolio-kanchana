import type { Metadata } from "next";
import {
  Caveat,
  Gochi_Hand,
  IBM_Plex_Mono,
  Kalam,
  Outfit,
  Patrick_Hand,
} from "next/font/google";
import { Providers } from "./providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick-hand",
  display: "swap",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kalam",
  display: "swap",
});

const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi-hand",
  display: "swap",
});

const ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://doodle-portfolio-2.skw-dev.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kanchana Walagambahu - Senior Frontend Engineer",
  description:
    "Senior Software Engineer, Frontend. React, Next.js, and TypeScript for enterprise SaaS. Live showcase of doodleui-react.",
  keywords: [
    "Kanchana Walagambahu",
    "Senior Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "doodleui-react",
  ],
  authors: [{ name: "Kanchana Walagambahu" }],
  openGraph: {
    title: "Kanchana Walagambahu - Senior Frontend Engineer",
    description:
      "Frontend engineer moving toward tech lead. This site is built with doodleui-react.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanchana Walagambahu - Senior Frontend Engineer",
    description:
      "Frontend engineer moving toward tech lead. This site is built with doodleui-react.",
  },
};

const themeBoot = `(function(){try{var t=localStorage.getItem('doodle-theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kanchana Walagambahu",
  jobTitle: "Senior Software Engineer, Frontend",
  email: "mailto:sachithrakanchana.ks@gmail.com",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  sameAs: [
    "https://github.com/KanchanaSW",
    "https://www.linkedin.com/in/connectskw/",
    "https://www.npmjs.com/package/doodleui-react",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${caveat.variable} ${patrickHand.variable} ${kalam.variable} ${gochiHand.variable} ${ibm.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="paper-grain" aria-hidden="true" />
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-40 focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
