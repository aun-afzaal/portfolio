import { Poppins } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { DEFAULT_LANG, locales } from "@/locales";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const SITE_URL = "https://aun.abcodify.com";
const TITLE = "Muhammad Aun – Full-Stack Software Engineer & System Architect";
const DESCRIPTION =
  "Muhammad Aun is a Full-Stack Software Engineer specializing in scalable microservices, high-concurrency web applications, MERN stack, Next.js, and cloud architecture (AWS/Docker).";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Muhammad Aun",
    "Full Stack Engineer",
    "Software Architect",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Microservices",
    "REST APIs",
    "GraphQL",
    "AWS",
    "Docker",
    "CI/CD",
    "Cloud Native",
    "Web Performance Optimization",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Muhammad Aun" }],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Muhammad Aun",
    locale: "en_PK",
    title: "Muhammad Aun – Full-Stack Software Engineer",
    description:
      "Architecting resilient microservices, high-throughput SaaS platforms, and modern web applications with Next.js, TypeScript, and AWS.",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Muhammad Aun",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Muhammad Aun – Full-Stack Software Engineer",
    description:
      "Production-grade web apps, cloud-native backend systems, and high-performance user interfaces.",
    images: ["/android-chrome-512x512.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Aun",
  jobTitle: "Software Engineer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/aun-afzaal",
    "https://linkedin.com/in/aun-afzaal",
  ],
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "System Architecture",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Docker",
    "AWS",
  ],
  worksFor: { "@type": "Organization", name: "Simulalab" },
};

const rtlLangs = Object.entries(locales)
  .filter(([, l]) => l.dir === "rtl")
  .map(([code]) => code);

const initScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem("theme")||"dark";var l=localStorage.getItem("lang")||"${DEFAULT_LANG}";d.dataset.theme=t;d.lang=l;d.dir=${JSON.stringify(
  rtlLangs,
)}.indexOf(l)>-1?"rtl":"ltr";}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang={DEFAULT_LANG}
      dir="ltr"
      data-theme="dark"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Suspense fallback={<nav className="min-h-16" />}>
          <ThemeProvider>
            <LanguageProvider>
              <ScrollToTop />
              <Navbar />
              <main>{children}</main>
              <Footer />
            </LanguageProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
