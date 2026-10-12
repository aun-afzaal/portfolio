import en from "./en";
import ar from "./ar";
import ur from "./ur";

export const DEFAULT_LANG = "en";

export const locales = {
  en: { name: "English", dir: "ltr", messages: en },
  ar: { name: "العربية", dir: "rtl", messages: ar },
  ur: { name: "اردو", dir: "rtl", messages: ur },
};
