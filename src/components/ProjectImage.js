"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
  priority = false,
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-page ${className}`}>
      {failed || !src || src === "/images/no-image.png" ? (
        <div className="flex h-full w-full items-center justify-center text-5xl text-muted">
          <i className="ri-code-s-slash-line" />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className="object-cover object-top"
        />
      )}
    </div>
  );
}
