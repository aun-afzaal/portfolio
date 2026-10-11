"use client";

import Image from "next/image";
import CtaSection from "../../components/CtaSection";
import Reveal from "../../components/Reveal";
import { card, container } from "../../components/ui";
import { useLanguage } from "../../context/LanguageContext";

const gallery = [
  "/images/single-project1.jpg",
  "/images/single-project2.jpg",
  "/images/single-project3.jpg",
  "/images/single-project4.jpg",
];

export default function SingleProjectPage() {
  const { t } = useLanguage();

  return (
    <>
      <div className="pt-[150px] lg:pt-[200px]">
        <div className={container}>
          <div className="pb-[30px] text-center">
            <p>{t("project.category")}</p>
            <h1 className="text-[34px] leading-[1.2] md:text-[48px] lg:text-[58px]">
              {t("project.title")}
            </h1>
          </div>
        </div>

        <Image
          src="/images/single-project.jpg"
          alt={t("project.title")}
          width={1920}
          height={900}
          className="h-auto w-full"
          priority
        />

        <div className={`${container} pt-[30px]`}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-[30px] lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal delay="0.2s" className={`${card} p-10`}>
                {t("project.info").map((info, i) => (
                  <div key={i} className="pb-[30px] last:pb-0">
                    <p className="mb-0">{info.label}</p>
                    <h3 className="text-xl">{info.value}</h3>
                  </div>
                ))}
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay="0.4s" className={`${card} p-10`}>
                <h2>{t("project.descriptionTitle")}</h2>
                <p className="mb-4">{t("project.p1")}</p>
                <p>{t("project.p2")}</p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 pt-[30px] lg:grid-cols-2">
            {gallery.map((src, i) => (
              <Reveal
                key={src}
                delay={`${0.2 + i * 0.2}s`}
                className="mb-[30px]"
              >
                <Image
                  src={src}
                  alt="gallery"
                  width={960}
                  height={640}
                  className="h-auto w-full"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <CtaSection />
    </>
  );
}
