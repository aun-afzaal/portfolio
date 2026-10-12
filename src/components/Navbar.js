"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { btnOutline, container } from "@/components/ui";
import useScroll from "@/hooks/UseScroll";

const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "works", href: "/works" },
  { key: "contact", href: "/contact" },
];

function HeaderControls() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <LanguageSwitcher />

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? t("nav.lightMode") : t("nav.darkMode")}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-lg text-heading transition-colors hover:border-primary hover:text-primary"
      >
        <i className={theme === "dark" ? "ri-sun-line" : "ri-moon-line"} />
      </button>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { y } = useScroll();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const scrolled = y > 50;
  const { theme } = useTheme();

  return (
    <header className="relative start-0 top-0 z-[999] w-full">
      <div
        className={`fixed start-0 top-0 z-[5] w-full bg-page transition-all duration-500 ${
          scrolled ? "border-b border-line" : ""
        }`}
      >
        <div className={container}>
          <div
            className={`flex items-center transition-all duration-500 ${
              scrolled ? "py-2.5" : "py-2.5 md:py-[15px] lg:py-[30px]"
            }`}
          >
            {/* Desktop logo */}
            <Link href="/" className="hidden shrink-0 py-0.5 lg:block">
              <Image
                src={theme === "dark" ? "/logo.svg" : "light-logo.svg"}
                alt="Logo"
                width={400}
                height={150}
                
                className="h-auto w-[250px]"
                priority
              />
            </Link>

            <nav className="w-full lg:mx-auto lg:w-auto">
              {/* Mobile logo + controls + toggle */}
              <div className="flex items-center justify-between lg:hidden">
                <Link href="/">
                  <Image
                    src={theme === "dark" ? "/logo.svg" : "light-logo.svg"}
                    alt="Logo"
                    width={300}
                    height={100}
                    className="h-auto w-[200px]"
                  />
                </Link>
                <div className="flex items-center gap-3">
                  <HeaderControls />
                  <button
                    type="button"
                    aria-label={t("nav.toggleMenu")}
                    aria-expanded={open}
                    onClick={() => setOpen((o) => !o)}
                    className="py-1"
                  >
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="my-[5px] block h-[3px] w-[26px] bg-main"
                      />
                    ))}
                  </button>
                </div>
              </div>

              <ul
                className={`${open ? "flex" : "hidden"} flex-col lg:flex lg:flex-row`}
              >
                {navLinks.map(({ key, href }) => (
                  <li
                    key={href}
                    className="flex items-center justify-between py-3 pe-[5px] ps-5"
                  >
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block text-base font-medium capitalize transition-all duration-500 hover:text-primary ${
                        pathname === href ? "text-primary" : "text-nav"
                      }`}
                    >
                      {t(`nav.${key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop controls + CTA */}
            <div className="hidden items-center gap-4 lg:flex">
              <HeaderControls />
              <Link href="/contact" className={btnOutline}>
                {t("nav.hireMe")}
                <i className="ri-shake-hands-line ms-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
