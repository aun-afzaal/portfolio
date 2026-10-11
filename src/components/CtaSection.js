"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { btnFilled, card, container } from "./ui";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="pt-[15px]">
      <div className={container}>
        <Reveal
          delay="0.2s"
          className={`${card} p-[30px] text-center md:p-[50px] lg:p-[60px] min-[1281px]:px-[200px] min-[1281px]:py-20`}
        >
          <h2 className="mb-5 text-[30px] font-normal leading-10 md:text-[40px] md:leading-[50px]">
            {t("cta.title")}
          </h2>
          <p>{t("cta.text")}</p>
          <div className="mt-[30px]">
            <Link href="/contact" className={btnFilled}>
              {t("cta.button")} <i className="ri-download-line ms-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
