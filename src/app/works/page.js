"use client";

import CtaSection from "../../components/CtaSection";
import ProjectGallery from "../../components/ProjectGallery";
import SectionTitle from "../../components/SectionTitle";
import { card, container } from "../../components/ui";
import { useLanguage } from "../../context/LanguageContext";

export default function WorksPage() {
  const { t } = useLanguage();

  return (
    <>
      <section id="portfolio" className="pb-[15px] pt-[115px]">
        <div className={container}>
          <div className={`${card} p-10`}>
            <SectionTitle
              title={t("portfolio.title")}
              text={t("portfolio.subtitle")}
            />
            <ProjectGallery />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
