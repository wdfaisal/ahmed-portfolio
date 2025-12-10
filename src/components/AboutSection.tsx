import { Code2, Cpu, Cloud, Bot, Zap, Award } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "تطوير تطبيقات ويب متكاملة باستخدام أحدث التقنيات",
  },
  {
    icon: Cloud,
    title: "Cloud Systems",
    description: "تصميم وبناء أنظمة سحابية قابلة للتوسع",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description: "أتمتة العمليات باستخدام الذكاء الاصطناعي",
  },
  {
    icon: Cpu,
    title: "SaaS Apps",
    description: "بناء تطبيقات SaaS احترافية وقابلة للنمو",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium text-sm">تعرف عليّ</span>
            </div>
            
            <h2 className="section-title">
              <span className="gradient-text">مطور شغوف</span>
              <br />
              <span className="text-foreground">بالابتكار والجودة</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              مرحباً! أنا مطور Full Stack بخبرة تتجاوز 5 سنوات في بناء الحلول الرقمية. 
              شغفي هو تحويل الأفكار المعقدة إلى منتجات بسيطة وفعّالة. أعمل مع الشركات 
              الناشئة والمؤسسات الكبيرة لتحقيق أهدافهم التقنية.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              متخصص في تطوير تطبيقات SaaS، بناء مواقع الشركات، تصميم الأنظمة السحابية، 
              وأتمتة العمليات باستخدام أحدث تقنيات الذكاء الاصطناعي. أؤمن بأن التكنولوجيا 
              يجب أن تخدم الإنسان وتسهّل حياته.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">+50 مشروع</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">+5 سنوات</span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 rounded-2xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
