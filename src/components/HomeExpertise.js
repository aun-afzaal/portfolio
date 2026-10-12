"use client";

import { useLanguage } from "@/context/LanguageContext";
import { btnFilled, card, container } from "./ui";
import SectionTitle from "./SectionTitle";
import Link from "next/link";

const expertise = [
  {
    key: "frontend",
    icon: "ri-layout-4-line",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    key: "backend",
    icon: "ri-server-line",
    skills: ["Node.js", "NestJS", "REST APIs"],
  },
  {
    key: "databases",
    icon: "ri-database-2-line",
    skills: ["PostgreSQL", "Redis", "Data Modeling"],
  },
  {
    key: "infrastructure",
    icon: "ri-pulse-line",
    skills: ["WebSockets", "Event-Driven Systems", "Cloud"],
  },
];

export default function HomeExpertise() {
  const { t, dir } = useLanguage();

  return (
    <section dir={dir} className="py-[15px]">
      <div className={container}>
        <div className={`${card} p-10`}>
          <SectionTitle
            title={t("home.expertise.label")}
            text={t("home.expertise.title")}
          />
          <div className="mx-auto max-w-7xl">
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {expertise.map((item) => (
                <article
                  key={item.key}
                  className="group rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50"
                >
                  <i
                    className={`${item.icon} text-3xl text-primary`}
                    aria-hidden="true"
                  />

                  <h3 className="mt-5 text-lg font-semibold">
                    {t(`home.expertise.${item.key}`)}
                  </h3>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <li
                        key={skill}
                        dir="ltr"
                        className="rounded-md border border-line px-2.5 py-1 text-xs text-muted"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className={btnFilled}>
              {t("home.viewAll")}{" "}
              <i className="ri-arrow-right-line ms-1 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
