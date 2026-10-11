"use client";

import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <Reveal delay="0.2s" className="mb-10 text-center">
      {eyebrow && <p>{eyebrow}</p>}
      <h2 className="mb-[15px] text-[30px] lg:text-[50px]">{title}</h2>
      {text && (
        <p className="px-0 lg:px-[100px] min-[1281px]:px-[300px]">{text}</p>
      )}
    </Reveal>
  );
}
