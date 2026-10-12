"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { card, container } from "./ui";
import SectionTitle from "./SectionTitle";

const stats = [
  { value: 3, suffix: "+", label: "home.stats.experience" },
  { value: 3, suffix: "+", label: "home.stats.companies" },
  { value: 15, suffix: "+", label: "home.stats.apps" },
  { value: 99, suffix: "+", label: "home.stats.users" },
];

function AnimatedStat({ value, suffix, label, active, t }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame;
    let startTime;
    const duration = 1400;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <div className="group rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 sm:p-6">
      <div className="mb-3 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          {count}
        </span>
        <span className="text-2xl font-semibold text-primary">{suffix}</span>
      </div>

      <p className="text-sm font-medium text-muted transition-colors group-hover:text-heading sm:text-base">
        {t(label)}
      </p>
    </div>
  );
}

export default function HomeAbout() {
  const { dir, t } = useLanguage();
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      dir={dir}
      className="pb-[15px]"
    >
      <div className={container}>
        <div className={`${card} p-10`}>
          <SectionTitle
            title={t("home.aboutLabel")}
            text={t("home.aboutTitle")}
            subtitle={t("home.aboutHighlight")}
          />
          {/* <ProjectGallery featured // */}

          <div className="pointer-events-none absolute -top-24 end-0 h-72 w-72 rounded-full bg-primary/10 blur-[100px]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <div className="my-7 h-1 w-full rounded-full bg-primary" />

              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {t("home.aboutDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-5">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="transition-all duration-700"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    opacity: active ? 1 : 0,
                    transform: active ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <AnimatedStat {...stat} active={active} t={t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
