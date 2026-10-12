"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

/** Dependency-free slider: CSS scroll-snap + prev/next buttons */
export default function Testimonials({ items }) {
  const { t, dir } = useLanguage();
  const ref = useRef(null);

  const slide = (direction) => {
    const el = ref.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.getBoundingClientRect().width + 24; // card + gap-6
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <Reveal delay="0.3s">
      <div
        ref={ref}
        dir="ltr"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items?.map((item, i) => (
          <div
            key={i}
            dir={dir}
            className="shrink-0 basis-full snap-start rounded-2xl border border-line p-5 transition-all duration-500 hover:border-primary lg:basis-[calc(50%-12px)]"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={60}
              height={60}
              className="mb-[25px] inline-block h-[60px] w-[60px] rounded-full object-cover"
            />
            <p className="mb-[30px]">{item.message}</p>
            <h5 className="mb-0 text-xl text-subtitle">{item.name}</h5>
            <span className="text-sm leading-[22px] text-muted">
              {item.role}
            </span>
          </div>
        ))}
      </div>

      <div dir="ltr" className="flex justify-center gap-[5px] pt-10">
        {[
          {
            icon: "ri-arrow-left-s-line",
            dirn: -1,
            label: t("testimonials.prev"),
          },
          {
            icon: "ri-arrow-right-s-line",
            dirn: 1,
            label: t("testimonials.next"),
          },
        ].map(({ icon, dirn, label }) => (
          <button
            key={icon}
            type="button"
            aria-label={label}
            onClick={() => slide(dirn)}
            className="h-10 w-10 rounded-full border border-line bg-primary leading-10 text-white transition-all duration-500 hover:opacity-80"
          >
            <i className={icon} />
          </button>
        ))}
      </div>
    </Reveal>
  );
}
