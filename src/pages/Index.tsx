import AboutSection from "@/components/AboutSection";
import CertificationsSection from "@/components/CertificationsSection";
import ConsoleSection from "@/components/ConsoleSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import FloatingShapes from "@/components/FloatingShapes";
import HeroSection from "@/components/HeroSection";
import PortfolioSidebar from "@/components/PortfolioSidebar";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollProgress from "@/components/ScrollProgress";
import SkillsSection from "@/components/SkillsSection";
import { useEffect, useState } from "react";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <FloatingShapes />
      <PortfolioSidebar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ConsoleSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
