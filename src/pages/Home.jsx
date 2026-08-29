import React from 'react';

import HeroSection from "@pages/section/Section_1";
import AboutSection from "@pages/section/Section_2";
import ProjectsSection from "@pages/section/Section_3";
import SkillsSection from "@pages/section/Section_4";
import ContactSection from "@pages/section/Section_5";
import ScrollToTop from "@layout/ScrollToTop";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
            <ScrollToTop/>
        </>
    );
}
