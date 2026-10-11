"use client";

import { useLanguage } from "@/context/LanguageContext";
import useScroll from "@/hooks/UseScroll";

const CIRCUMFERENCE = 2 * Math.PI * 49;

export default function ScrollToTop() {
  const { y, progress } = useScroll();
  const { t } = useLanguage();
  const active = y > 50;

  return (
    <button
      type="button"
      aria-label={t("nav.scrollTop")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed end-2.5 bottom-5 z-[100] h-11 w-11 rounded-full mix-blend-difference transition-all duration-[400ms] ease-linear ${
        active
          ? "visible translate-y-0 opacity-100"
          : "invisible translate-y-5 opacity-0"
      }`}
    >
      <i className="ri-arrow-up-double-line absolute start-2.5 top-[5px] text-[25px] leading-none text-white" />
      <svg className="h-full w-full" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          fill="none"
          stroke="#fff"
          strokeWidth={4}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          className="transition-all duration-[400ms] ease-linear"
        />
      </svg>
    </button>
  );
}
