import { ArrowLeft, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow delay-300" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] animate-pulse-slow delay-500" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="glass-card px-4 py-2 rounded-full mb-8 animate-fade-in">
            <span className="text-primary font-medium text-sm">
              🚀 متاح للمشاريع الجديدة
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slide-up">
            <span className="text-foreground">أنا </span>
            <span className="gradient-text">مطور Full Stack</span>
            <br />
            <span className="text-foreground">أبني </span>
            <span className="gradient-text-secondary">حلولاً رقمية متكاملة</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-slide-up delay-100">
            متخصص في تطوير تطبيقات SaaS، بناء مواقع الشركات، تصميم أنظمة سحابية،
            وأتمتة الأعمال باستخدام الذكاء الاصطناعي. أحوّل أفكارك إلى منتجات رقمية ناجحة.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-slide-up delay-200">
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold gradient-text">+5</span>
              <span className="text-muted-foreground text-sm">سنوات خبرة</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold gradient-text">+50</span>
              <span className="text-muted-foreground text-sm">مشروع منجز</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl md:text-4xl font-bold gradient-text">+30</span>
              <span className="text-muted-foreground text-sm">عميل سعيد</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-300">
            <Button variant="hero" size="xl">
              استعرض أعمالي
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              تواصل معي
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in delay-400">
            <span className="text-muted-foreground text-sm">تابعني:</span>
            <a
              href="#"
              className="glass-card p-3 rounded-lg hover:border-primary/40 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="glass-card p-3 rounded-lg hover:border-primary/40 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="glass-card p-3 rounded-lg hover:border-primary/40 transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
