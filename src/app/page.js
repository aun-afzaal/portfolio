"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "../components/Reveal";
import { btnFilled, card, container } from "../components/ui";
import { useLanguage } from "../context/LanguageContext";

/* ---------- Data (text lives in /locales) ---------- */
const socials = [
  {
    icon: "ri-facebook-circle-fill",
    href: "https://facebook.com",
    label: "Facebook",
  },
  { icon: "ri-twitter-x-line", href: "https://twitter.com", label: "X" },
  { icon: "ri-linkedin-fill", href: "https://linkedin.com", label: "LinkedIn" },
  {
    icon: "ri-github-line",
    href: "https://github.com/jamilrayhan10",
    label: "GitHub",
  },
];

const companyLogos = [
  { src: "/images/company-1.png", w: 133, h: 32 },
  { src: "/images/company-2.png", w: 117, h: 28 },
  { src: "/images/company-3.png", w: 106, h: 35 },
  { src: "/images/company-4.png", w: 118, h: 30 },
  { src: "/images/company-5.png", w: 110, h: 32 },
  { src: "/images/company-6.png", w: 133, h: 32 },
];

const categories = ["all", "design", "branding", "marketing", "game"];

const projects = [
  { image: "/images/work1.jpg", category: "design", id: "p1" },
  { image: "/images/work2.jpg", category: "branding", id: "p2" },
  { image: "/images/work3.jpg", category: "marketing", id: "p3" },
  { image: "/images/work4.jpg", category: "game", id: "p4" },
  { image: "/images/work5.jpg", category: "design", id: "p5" },
  { image: "/images/work6.jpg", category: "branding", id: "p6" },
];

/* ---------- Sections ---------- */
function AboutSection() {
  const { t } = useLanguage();
  const duplicated = [...companyLogos, ...companyLogos];

  return (
    <section id="about" className="pb-[15px] pt-[60px] md:pt-20 lg:pt-[115px]">
      <div className={container}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-[30px] lg:grid-cols-12">
          {/* Profile card */}
          <div className="lg:col-span-4">
            <Reveal delay="0.3s" className={`${card} p-10 text-center`}>
              <Image
                src="/images/profile.png"
                alt={t("about.name")}
                width={300}
                height={300}
                className="mx-auto h-auto w-[300px] max-w-full"
              />
              <h2 className="text-[40px] lg:max-xl:text-[30px]">
                {t("about.name")}
              </h2>
              <p>{t("about.role")}</p>
              <ul className="mt-[30px] flex flex-wrap justify-center gap-y-4">
                {socials.map(({ icon, href, label }) => (
                  <li key={href} className="mx-[15px] lg:max-xl:mx-0.5">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="rounded-[10px] border border-line px-3 py-2.5 text-xl text-heading"
                    >
                      <i className={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Intro + companies */}
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
                <Link href="/contact" className={btnFilled}>
                  {t("about.downloadCv")}{" "}
                  <i className="ri-download-line ms-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay="0.2s" className={`${card} mt-[30px] p-10`}>
              <h2 className="mb-[35px]">{t("about.companies")}</h2>
              {/* dir=ltr keeps the marquee direction the same in RTL languages */}
              <div dir="ltr" className="marquee-mask overflow-hidden">
                <div className="flex w-max animate-scroll flex-nowrap gap-4 py-4">
                  {duplicated.map(({ src, w, h }, i) => (
                    <Image
                      key={i}
                      src={src}
                      alt=""
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

function PortfolioSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-[15px]">
      <div className={container}>
        <div className={`${card} p-10`}>
          <Reveal delay="0.2s" className="mb-10 text-center">
            <h2 className="mb-[15px] text-[30px] lg:text-[50px]">
              {t("portfolio.title")}
            </h2>
            <p className="px-0 lg:px-[100px] min-[1281px]:px-[300px]">
              {t("portfolio.subtitle")}
            </p>
          </Reveal>

          <ul className="-mx-5 flex flex-wrap pb-[15px]">
            {categories.map((c) => (
              <li
                key={c}
                className="relative mx-5 mb-5 pb-[15px] text-sm font-medium leading-none"
              >
                <button
                  type="button"
                  onClick={() => setActive(c)}
                  className={`transition-all duration-500 after:absolute after:start-0 after:top-full after:h-[3px] after:w-full after:bg-primary after:transition-all after:duration-500 ${
                    active === c
                      ? "text-primary after:opacity-100"
                      : "text-muted after:opacity-0"
                  }`}
                >
                  {t(`portfolio.filters.${c}`)}
                </button>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <Reveal
                key={p.id}
                delay="0.3s"
                className="group mb-[30px] rounded-2xl border border-line"
              >
                <div className="relative z-[1] mb-[18px] overflow-hidden rounded-t-[15px]">
                  <Image
                    src={p.image}
                    alt={t(`portfolio.items.${p.id}`)}
                    width={600}
                    height={450}
                    className="h-auto w-full"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-[.65]" />
                  <Link
                    href="/single-project"
                    aria-label={t(`portfolio.items.${p.id}`)}
                    className="absolute left-1/2 top-1/2 z-[2] flex h-[65px] w-[65px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xl text-white opacity-0 transition-opacity duration-300 hover:text-white group-hover:opacity-100"
                  >
                    <i className="ri-arrow-right-up-line" />
                  </Link>
                </div>
                <div className="pb-5 ps-5">
                  <span className="text-muted">
                    {t(`portfolio.filters.${p.category}`)}
                  </span>
                  <h3 className="mt-2 block text-xl">
                    <Link href="/single-project">
                      {t(`portfolio.items.${p.id}`)}
                    </Link>
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
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

/* ---------- Page ---------- */
export default function Home() {
  return (
    <>
      <AboutSection />
      <PortfolioSection />
      <CtaSection />
    </>
  );
}
