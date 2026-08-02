import Hero from "../components/sections/Hero";
import BentoGrid from "../components/sections/BentoGrid";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";
import TechStackSection from "../components/sections/TechStackSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Hero />
      <BentoGrid />
      <ProjectsSection />
      <ServicesSection />
      <TechStackSection />
      <ContactSection />
    </main>
  );
}