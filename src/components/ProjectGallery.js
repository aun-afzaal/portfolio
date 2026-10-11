"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const categories = ["all", "design", "branding", "marketing", "game"];

const projects = [
  { image: "/images/work1.jpg", category: "design", id: "p1" },
  { image: "/images/work2.jpg", category: "branding", id: "p2" },
  { image: "/images/work3.jpg", category: "marketing", id: "p3" },
  { image: "/images/work4.jpg", category: "game", id: "p4" },
  { image: "/images/work5.jpg", category: "design", id: "p5" },
  { image: "/images/work6.jpg", category: "branding", id: "p6" },
];

/** Category filter + project grid (used on Home and Works pages) */
export default function ProjectGallery() {
  const { t } = useLanguage();
  const [active, setActive] = useState("all");
  const visible =
    active === "all" ? projects : projects.filter((p) => p.category === active);

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
    </>
  );
}
