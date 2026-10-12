"use client";

import { companyLogos, profile, socials } from "@/data";
import Reveal from "./Reveal";
import Image from "next/image";
import { btnFilled, card, container } from "./ui";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function AboutSection() {
  const { t } = useLanguage();
  const duplicated = [...companyLogos, ...companyLogos];

  return (
    <section id="about" className="pb-[25px] pt-[60px] md:pt-20 lg:pt-[115px]">
      <div className={container}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-[30px] lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal delay="0.3s" className={`${card} p-10 text-center`}>
              <Image
                src="/images/aun.jpg"
                alt={t("about.name")}
                width={300}
                height={300}
                className="mx-auto h-[300px] w-[300px] max-w-full rounded-full object-cover"
              />
              <h2 className="text-[40px] lg:max-xl:text-[30px] my-5 tracking-widest">
                {t("about.name")}
              </h2>
              <p>{t("about.role")}</p>
              <ul className="mt-[30px] flex flex-wrap justify-center gap-y-4">
                {socials.map(({ icon, href, label, bg }) => (
                  <li key={href} className="mx-[15px] lg:max-xl:mx-0.5 my-2">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className={`rounded-[10px] border border-line px-3 py-2.5 text-xl text-white ${bg ? bg : ""}`}
                    >
                      <i className={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay="0.2s" className={`${card} p-10`}>
              <p>{t("about.hello")}</p>
              <h2 className="mb-5 text-[30px] font-normal leading-10 md:text-[40px] md:leading-[54px] lg:leading-[50px]">
                {t("about.headline")}
              </h2>
              <ul>
                <li className="flex items-center">
                  <i className="ri-circle-fill me-2.5 text-[13px] text-[#0f0]" />
                  {t("about.available")}
                </li>
              </ul>
              <div className="mt-[30px]">
                <Link
                  href={profile.cvUrl}
                  download="M.Aun Resume.pdf"
                  className={btnFilled}
                >
                  {t("about.downloadCv")}{" "}
                  <i className="ri-download-line ms-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay="0.2s" className={`${card} mt-[30px] p-5`}>
              <h2 className="mb-[35px]">{t("about.companies")}</h2>
              {/* dir=ltr keeps the marquee direction the same in RTL languages */}
              <div dir="ltr" className="marquee-mask overflow-hidden">
                <div className="flex w-max animate-scroll flex-nowrap gap-4 py-4">
                  {duplicated.map(({ src, w, h }, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt={i}
                      width={w}
                      height={h}
                      aria-hidden={i >= companyLogos.length}
                      className="mr-[30px] h-auto w-auto"
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
