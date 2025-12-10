import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>مطور Full Stack | تطوير SaaS وأنظمة سحابية وأتمتة بالذكاء الاصطناعي</title>
        <meta 
          name="description" 
          content="مطور Full Stack متخصص في تطوير تطبيقات SaaS، بناء مواقع الشركات، تصميم أنظمة سحابية، وأتمتة الأعمال بالذكاء الاصطناعي. خبرة +5 سنوات." 
        />
        <meta name="keywords" content="مطور, Full Stack, SaaS, أنظمة سحابية, ذكاء اصطناعي, تطوير مواقع, React, Node.js" />
        <link rel="canonical" href="https://developer.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
