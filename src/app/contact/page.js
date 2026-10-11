"use client";

import { useState } from "react";
import CtaSection from "../../components/CtaSection";
import Reveal from "../../components/Reveal";
import SectionTitle from "../../components/SectionTitle";
import { btnFilled, card, container } from "../../components/ui";
import { useLanguage } from "../../context/LanguageContext";

const input =
  "w-full rounded-[10px] border border-line bg-transparent px-5 py-[19px] text-base leading-[1.3] text-heading outline-none transition-colors placeholder:text-heading/40 focus:border-primary";
const label = "mb-[18px] block text-base font-medium text-main";

const contactItems = [
  {
    icon: "ri-map-pin-line",
    label: "office",
    value: "officeValue",
    delay: "0.2s",
  },
  { icon: "ri-phone-line", label: "phone", value: "phoneValue", delay: "0.4s" },
  { icon: "ri-mail-line", label: "email", value: "emailValue", delay: "0.6s" },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section id="contact" className="pb-[15px] pt-[115px]">
        <div className={container}>
          <div className={`${card} p-10`}>
            <SectionTitle
              eyebrow={t("contact.eyebrow")}
              title={t("contact.title")}
            />

            <div className="grid grid-cols-1 gap-x-6 gap-y-[30px] lg:grid-cols-12">
              <div className="lg:col-span-4">
                <Reveal
                  delay="0.2s"
                  className="rounded-[10px] border border-line pb-5 pe-[30px] ps-10 pt-[50px]"
                >
                  {contactItems.map(({ icon, label: l, value, delay }) => (
                    <Reveal key={icon} delay={delay} className="pb-5">
                      <i className={`${icon} text-xl text-primary`} />
                      <h2 className="my-[5px] text-base font-medium capitalize text-subtitle">
                        {t(`contact.${l}`)}
                      </h2>
                      <p>{t(`contact.${value}`)}</p>
                    </Reveal>
                  ))}
                </Reveal>
              </div>

              <div className="lg:col-span-8">
                <Reveal
                  delay="0.4s"
                  className="rounded-[10px] border border-line p-10"
                >
                  <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
                      <div className="mb-8">
                        <label htmlFor="name" className={label}>
                          {t("contact.form.name")}
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder={t("contact.form.namePlaceholder")}
                          className={input}
                        />
                      </div>
                      <div className="mb-8">
                        <label htmlFor="email" className={label}>
                          {t("contact.form.email")}
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder={t("contact.form.emailPlaceholder")}
                          className={input}
                        />
                      </div>
                    </div>
                    <div className="mb-8">
                      <label htmlFor="message" className={label}>
                        {t("contact.form.message")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder={t("contact.form.messagePlaceholder")}
                        className={input}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className={`${btnFilled} disabled:opacity-60`}
                    >
                      {status === "sending"
                        ? t("contact.form.sending")
                        : t("contact.form.send")}
                      <i className="ri-mail-line ms-1" />
                    </button>

                    {status === "sent" && (
                      <p className="mt-4 text-[#0f0]">
                        {t("contact.form.success")}
                      </p>
                    )}
                    {status === "error" && (
                      <p className="mt-4 text-primary">
                        {t("contact.form.error")}
                      </p>
                    )}
                  </form>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
