"use client";

import { useLanguage } from "@/context/LanguageContext";
import { card, container } from "./ui";
import ProjectGallery from "./ProjectGallery";
import SectionTitle from "./SectionTitle";

export default function PortfolioSection() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="py-[15px]">
      <div className={container}>
        <div className={`${card} p-10`}>
          <SectionTitle
            title={t("portfolio.title")}
            text={t("portfolio.subtitle")}
          />
          <ProjectGallery featured />
        </div>
      </div>
    </section>
  );
}
