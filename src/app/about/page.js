"use client";

import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import { btnFilled, card, container } from "@/components/ui";
import { useLanguage } from "../../context/LanguageContext";
// import Testimonials from "@/components/Testimonials";
import SectionTitle from "@/components/SectionTitle";

function ResumeColumn({ data }) {
  return (
    <div className={`${card} p-10`}>
      <h2 className="mb-2.5">{data.title}</h2>
      {data.items.map((item, i) => (
        <Reveal
          key={i}
          delay="0.3s"
          className="flex border-b border-line py-[30px] last:border-b-0 last:pb-0"
        >
          <div className="me-5 h-[50px] w-[50px] flex-none rounded-xl bg-[#f9f9f9] text-center text-xl leading-[50px] text-primary">
            <i className="ri-book-line" />
          </div>
          <div>
            <span className="mb-5 block leading-none">{item.time}</span>
            <h4 className="my-3 text-xl text-subtitle">{item.title}</h4>
            <span className="text-base text-muted">{item.subtitle}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section id="about" className="pb-[15px] pt-[115px]">
        <div className={container}>
          <div className="grid grid-cols-1 gap-x-6 gap-y-[30px] lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal delay="0.3s" className={`${card} p-10`}>
                <Image
                  src="/images/bazifpic.png"
                  alt={t("about.name")}
                  width={300}
                  height={300}
                  className="mx-auto h-[300px] w-[300px] max-w-full rounded-full object-cover"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay="0.2s" className={`${card} p-10`}>
                <h2 className="mb-5 text-[30px] font-normal leading-10 md:text-[40px] md:leading-[50px]">
                  {t("aboutPage.title")}
                </h2>
                <p>{t("aboutPage.p1")}</p>
                <p className="my-4">{t("aboutPage.p2")}</p>
                <p>{t("aboutPage.p3")}</p>
                <div className="mt-[30px]">
                  <Link href="/contact" className={btnFilled}>
                    {t("aboutPage.button")}{" "}
                    <i className="ri-mail-send-line ms-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="py-[15px]">
        <div className={container}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ResumeColumn data={t("resume.experience")} />
            <ResumeColumn data={t("resume.education")} />
          </div>
        </div>
      </section>

      {/* <section className="py-[15px]">
        <div className={container}>
          <div className={`${card} p-10`}>
            <SectionTitle
              eyebrow={t("testimonials.eyebrow")}
              title={t("testimonials.title")}
            />
            <Testimonials items={t("testimonials.items")} />
          </div>
        </div>
      </section> */}

      <CtaSection />
    </>
  );
}
