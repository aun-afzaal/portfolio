"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { container } from "./ui";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="pb-10 pt-[50px]">
        <div className={container}>
          <div className="grid grid-cols-1 gap-x-6 text-sm font-medium leading-5 text-main lg:grid-cols-2">
            <p className="text-center leading-5 lg:text-start">
              {/* {t("footer.copyright")} {new Date().getFullYear()},{" "} */}
              <Link href="/" className="text-primary">
                Bentos
              </Link>{" "}
              {t("footer.rights")}
            </p>
            <p className="text-center leading-5 lg:text-end">
              {t("footer.crafted")}{" "}
              <a
                href="https://github.com/jamilrayhan10"
                target="_blank"
                rel="noreferrer"
                className="text-primary"
              >
                rk theme
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
