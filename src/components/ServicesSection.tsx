import { Code2, Cloud, Bot, Globe, Database, Smartphone, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Code2,
    title: "تطوير تطبيقات SaaS",
    description: "بناء تطبيقات SaaS قابلة للتوسع مع نظام اشتراكات ولوحات تحكم متقدمة",
    features: ["Multi-tenant Architecture", "Stripe Integration", "Analytics Dashboard"],
  },
  {
    icon: Globe,
    title: "مواقع الشركات",
    description: "تصميم وتطوير مواقع احترافية للشركات والمؤسسات بأحدث التقنيات",
    features: ["تصميم عصري", "SEO محسّن", "سرعة فائقة"],
  },
  {
    icon: Cloud,
    title: "أنظمة سحابية",
    description: "تصميم وبناء أنظمة إدارة سحابية متكاملة للشركات والمؤسسات",
    features: ["AWS / GCP", "Microservices", "High Availability"],
  },
  {
    icon: Bot,
    title: "أتمتة بالذكاء الاصطناعي",
    description: "أتمتة العمليات وخدمة العملاء باستخدام أحدث تقنيات AI",
    features: ["ChatGPT Integration", "Workflow Automation", "Custom AI Bots"],
  },
  {
    icon: Database,
    title: "تطوير APIs",
    description: "بناء واجهات برمجية RESTful و GraphQL آمنة وسريعة",
    features: ["REST / GraphQL", "Authentication", "Rate Limiting"],
  },
  {
    icon: Smartphone,
    title: "تطبيقات الجوال",
    description: "تطوير تطبيقات موبايل هجينة تعمل على iOS و Android",
    features: ["React Native", "Cross-Platform", "Push Notifications"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-card/50">
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">خدماتي</span>
          </div>
          
          <h2 className="section-title">
            <span className="text-foreground">ما أستطيع </span>
            <span className="gradient-text">تقديمه لك</span>
          </h2>
          
          <p className="section-subtitle">
            خدمات تقنية متكاملة لتحويل أفكارك إلى منتجات رقمية ناجحة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 rounded-2xl group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="ghost" size="sm" className="group/btn -mx-3">
                <span className="text-primary group-hover/btn:text-primary/80">اطلب الخدمة</span>
                <ArrowLeft className="w-4 h-4 text-primary group-hover/btn:-translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 glass-card p-8 md:p-12 rounded-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            هل لديك مشروع في ذهنك؟
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            دعنا نتحدث عن كيفية تحويل فكرتك إلى منتج رقمي ناجح. استشارة مجانية!
          </p>
          <Button variant="hero" size="xl">
            احصل على استشارة مجانية
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
