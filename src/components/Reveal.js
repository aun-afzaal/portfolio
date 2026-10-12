"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = "0.2s" }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${shown ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
