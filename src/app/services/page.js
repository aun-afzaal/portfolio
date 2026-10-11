"use client";

import CtaSection from "../../components/CtaSection";
import Reveal from "../../components/Reveal";
import SectionTitle from "../../components/SectionTitle";
import { btnFilled, card, container } from "../../components/ui";
import { useLanguage } from "../../context/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const services = t("services.items");
  const plans = t("pricing.plans");

  return (
    <>
      <section id="services" className="pb-[15px] pt-[115px]">
        <div className={container}>
          <div className={`${card} p-10`}>
            <SectionTitle
              eyebrow={t("services.eyebrow")}
              title={t("services.title")}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal
                  key={i}
                  delay={`${0.2 + i * 0.2}s`}
                  className="group rounded-[10px] border border-line px-10 py-[60px] transition-all duration-500 hover:border-primary"
                >
                  <i
                    className={`${s.icon} text-[60px] text-[#999] transition-all duration-500 group-hover:text-primary`}
                  />
                  <h4 className="my-5 text-xl text-subtitle">{s.title}</h4>
                  <p className="mb-0 text-muted">{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[15px]">
        <div className={container}>
          <div className={`${card} p-10`}>
            <SectionTitle
              eyebrow={t("pricing.eyebrow")}
              title={t("pricing.title")}
            />
            <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
              {plans.map((plan, i) => (
                <Reveal
                  key={i}
                  delay={`${0.2 + (i % 2) * 0.2}s`}
                  className="mb-[30px] rounded-2xl border border-line p-2.5"
                >
                  <div className="rounded-2xl border border-line p-5">
                    <h4 className="my-3 pb-5 text-[22px] leading-[29px] text-subtitle">
                      {plan.title}
                    </h4>
                    <p className="mb-5 whitespace-pre-line text-xl leading-[27px] text-muted">
                      {plan.description}
                    </p>
                    <span className="text-[38px] font-medium text-primary">
                      ${plan.price}
                    </span>
                    <span className="text-base font-normal text-main">
                      {t("pricing.perHour")}
                    </span>
                  </div>
                  <div className="p-5">
                    <ul className="pb-3">
                      {plan.features.map((f, j) => (
                        <li
                          key={j}
                          className={`mb-2.5 ${f.off ? "text-main opacity-[.35]" : "text-muted"}`}
                        >
                          <i className="ri-arrow-right-line me-2.5" />
                          {f.text}
                        </li>
                      ))}
                    </ul>
                    <a href="#" className={btnFilled}>
                      {t("pricing.order")}{" "}
                      <i className="ri-shopping-basket-line ms-1" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
