import { Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "PHP", "Laravel", "Express.js", "FastAPI"],
  },
  {
    title: "قواعد البيانات",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase"],
  },
  {
    title: "السحابة و DevOps",
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Linux"],
  },
  {
    title: "الذكاء الاصطناعي والأتمتة",
    skills: ["OpenAI API", "LangChain", "n8n", "Machine Learning", "NLP", "ChatGPT", "Claude"],
  },
  {
    title: "أدوات أخرى",
    skills: ["Git", "Figma", "Stripe", "REST APIs", "GraphQL", "WebSockets"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-card/50">
      {/* Background Effects */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">مهاراتي</span>
          </div>
          
          <h2 className="section-title">
            <span className="gradient-text">التقنيات والأدوات</span>
            <br />
            <span className="text-foreground">التي أتقنها</span>
          </h2>
          
          <p className="section-subtitle">
            مجموعة متنوعة من التقنيات الحديثة التي أستخدمها لبناء حلول رقمية متكاملة
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Bar */}
        <div className="mt-16 glass-card p-8 rounded-2xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Frontend Development", percentage: 95 },
              { label: "Backend Development", percentage: 90 },
              { label: "Cloud & DevOps", percentage: 85 },
              { label: "AI Integration", percentage: 88 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium text-sm">{item.label}</span>
                  <span className="text-primary font-mono text-sm">{item.percentage}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-l from-primary to-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
