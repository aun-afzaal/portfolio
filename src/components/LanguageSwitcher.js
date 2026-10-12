"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

/** Theme-aware custom dropdown (native <select> can't style its option list) */
export default function LanguageSwitcher() {
  const { lang, setLang, languages, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = languages.find((l) => l.code === lang);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("nav.language")}
        onClick={() => setOpen((o) => !o)}
        className={`flex h-9 items-center gap-1.5 rounded-[10px] border bg-surface px-3 text-sm font-medium text-heading transition-colors hover:border-primary ${
          open ? "border-primary" : "border-line"
        }`}
      >
        <i className="ri-global-line text-base text-primary" />
        <span>{current?.name}</span>
        <i
          className={`ri-arrow-down-s-line text-lg transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-[10px] border border-line bg-surface p-1 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
        >
          {languages.map(({ code, name }) => (
            <li key={code} role="option" aria-selected={code === lang}>
              <button
                type="button"
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 mt-1 whitespace-nowrap rounded-md px-3 py-2 text-start text-sm transition-colors hover:bg-primary/10 hover:text-primary ${
                  code === lang ? "bg-primary/10 text-primary" : "text-heading"
                }`}
              >
                {name}
                {code === lang && <i className="ri-check-line" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
