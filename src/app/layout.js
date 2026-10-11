import { Poppins } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import { DEFAULT_LANG, locales } from "../locales";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "M.Aun - Personal Portfolio",
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
        <ThemeProvider>
          <LanguageProvider>
            <ScrollToTop />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
