"use client";

import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import ProjectImage from "./ProjectImage";
import { btnFilled } from "./ui";
import { useLanguage } from "@/context/LanguageContext";
import { categories, getProjectContent, projects } from "@/data";

export default function ProjectGallery({ featured = false }) {
  const { t, lang } = useLanguage();
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? featured
        ? projects.filter((p) => p.featured)
        : projects
      : projects.filter((p) => p.category === active);

  return (
    <>
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
        {visible.map((p) => {
          const c = getProjectContent(p, lang);
          return (
            <Reveal
              key={p.slug}
              delay="0.3s"
              className="group mb-[30px] rounded-2xl border border-line"
            >
              <div className="relative z-[1] mb-[18px] overflow-hidden rounded-t-[15px]">
                <ProjectImage
                  src={p.image}
                  alt={c.title}
                  className="aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-[.65]" />
                <Link
                  href={`/works/${p.slug}`}
                  aria-label={c.title}
                  className="absolute left-1/2 top-1/2 z-[2] flex h-[65px] w-[65px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xl text-white opacity-0 transition-opacity duration-300 hover:text-white group-hover:opacity-100"
                >
                  <i className="ri-arrow-right-up-line" />
                </Link>
              </div>
              <div className="pe-5 ps-5 pb-5">
                <span className="text-muted">{c.tag}</span>
                <h3 className="mt-2 block text-xl">
                  <Link href={`/works/${p.slug}`}>{c.title}</Link>
                </h3>
              </div>
            </Reveal>
          );
        })}
      </div>

      {featured && (
        <div className="text-center">
          <Link href="/works" className={btnFilled}>
            {t("portfolio.viewAll")}{" "}
            <i className="ri-arrow-right-line ms-1 rtl:rotate-180" />
          </Link>
        </div>
      )}
    </>
  );
}
