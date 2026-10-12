"use client";

import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, text, subtitle }) {
  return (
    <Reveal delay="0.2s" className="mb-10 text-center">
      {eyebrow && <p className="my-2">{eyebrow}</p>}
      <h2 className="mb-[15px] text-[30px] lg:text-[50px]">{title}</h2>
      {text && (
        <span className="px-0 lg:px-[100px] min-[1281px]:px-[300px] lg:flex w-full text-center justify-center">
          {text}
          {""}
          {subtitle && <p className="text-primary mx-2">{subtitle}</p>}
        </span>
      )}
    </Reveal>
  );
}
