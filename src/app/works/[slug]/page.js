"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import { card, container } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data";

export default function SingleProjectPage() {
  const { slug } = useParams();
  const { t, dir } = useLanguage();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const { content, image, gallery = [], stack = [], url } = project;
  const lang = content.en && content.ar ? undefined : "en";

  const language = dir === "rtl" ? "ar" : "en";
  const details = content[language] || content.en;

  if (!details) {
    notFound();
  }

  const info = [
    {
      label: language === "ar" ? "الفئة" : "Category",
      value: project.category,
    },
    {
      label: language === "ar" ? "التقنيات" : "Technologies",
      value: stack.join(", "),
    },
    ...(url
      ? [
          {
            label: language === "ar" ? "الموقع" : "Website",
            value: url,
          },
        ]
      : []),
  ];

  return (
    <>
      <div dir={dir} className="pt-[150px] lg:pt-[200px]">
        <div className={container}>
          <div className="pb-[30px] text-center">
            <p>{details.tag}</p>
            <h1 className="text-[34px] leading-[1.2] md:text-[48px] lg:text-[58px]">
              {details.title}
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-muted">{details.desc}</p>
          </div>
        </div>

        <div className={`${container} overflow-hidden`}>
          <Image
            src={image}
            alt={details.title}
            width={1920}
            height={900}
            className="h-auto w-full rounded-2xl object-cover"
            priority
          />
        </div>

        <div className={`${container} pt-[30px]`}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-[30px] lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal delay="0.2s" className={`${card} p-6 md:p-10`}>
                {info.map((item) => (
                  <div key={item.label} className="pb-[30px] last:pb-0">
                    <p className="mb-2 text-muted">{item.label}</p>
                    <h3 className="break-words text-xl">{item.value}</h3>
                  </div>
                ))}
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay="0.4s" className={`${card} p-6 md:p-10`}>
                <h2 className="mb-5 text-2xl">
                  {language === "ar" ? "التحدي" : "The Challenge"}
                </h2>
                <p className="mb-8 leading-8 text-muted">{details.challenge}</p>

                <h2 className="mb-5 text-2xl">
                  {language === "ar" ? "الحل" : "The Solution"}
                </h2>
                <p className="leading-8 text-muted">{details.solution}</p>

                {details.results?.length > 0 && (
                  <>
                    <h2 className="mb-5 mt-8 text-2xl">
                      {language === "ar"
                        ? "النتائج والميزات"
                        : "Results & Features"}
                    </h2>
                    <ul className="space-y-3">
                      {details.results.map((result, index) => (
                        <li key={index} className="text-muted">
                          <i className="ri-check-line me-2 text-primary" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Reveal>
            </div>
          </div>

          {stack.length > 0 && (
            <Reveal delay="0.2s" className={`${card} mt-[30px] p-6 md:p-10`}>
              <h2 className="mb-5 text-2xl">
                {language === "ar" ? "التقنيات المستخدمة" : "Tech Stack"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-line px-4 py-2 text-sm text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          {gallery.length > 0 && (
            <div className="grid grid-cols-1 gap-6 pt-[30px] lg:grid-cols-2">
              {gallery.map((src, index) => (
                <Reveal
                  key={src}
                  delay={`${0.2 + index * 0.2}s`}
                  className="mb-[30px]"
                >
                  <Image
                    src={src}
                    alt={`${details.title} screenshot ${index + 1}`}
                    width={960}
                    height={640}
                    className="h-auto w-full rounded-2xl"
                  />
                </Reveal>
              ))}
            </div>
          )}

          {url && (
            <div className="pt-5 text-center">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white transition-opacity hover:opacity-80"
              >
                {language === "ar" ? "عرض المشروع" : "View Live Project"}
                <i className="ri-external-link-line" />
              </a>
            </div>
          )}
        </div>
      </div>

      <CtaSection />
    </>
  );
}
