"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_LANG, locales } from "../locales";

const LanguageContext = createContext(null);

const languages = Object.entries(locales).map(([code, { name, dir }]) => ({
  code,
  name,
  dir,
}));

// "portfolio.filters.all" -> messages.portfolio.filters.all
const lookup = (messages, key) =>
  key
    .split(".")
    .reduce((node, part) => (node == null ? undefined : node[part]), messages);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);

  // Sync with what the inline <head> script already applied (avoids a flash)
  useEffect(() => {
    const current = document.documentElement.lang;
    if (locales[current]) setLangState(current);
  }, []);

  const setLang = useCallback((code) => {
    if (!locales[code]) return;
    setLangState(code);
    document.documentElement.lang = code;
    document.documentElement.dir = locales[code].dir;
    try {
      localStorage.setItem("lang", code);
    } catch {}
  }, []);

  const t = useCallback(
    (key) =>
      lookup(locales[lang].messages, key) ??
      lookup(locales[DEFAULT_LANG].messages, key) ??
      key,
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, t, dir: locales[lang].dir, languages }),
    [lang, setLang, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
