"use client";

import { useLanguage } from "@/context/LanguageContext";
import { card, container } from "./ui";
import { useState } from "react";
import Reveal from "./Reveal";
import { categories, projects } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioSection() {
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
