"use client";

import AboutSection from "./AboutSection";
import CtaSection from "./CtaSection";
import HomeAbout from "./HomeAbout";
import HomeExpertise from "./HomeExpertise";
import PortfolioSection from "./PortfolioSection";

export default function Home() {
  return (
    <>
      <AboutSection />
      <HomeAbout />
      <HomeExpertise />
      <PortfolioSection />
      <CtaSection />
    </>
  );
}
