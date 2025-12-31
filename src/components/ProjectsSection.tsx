import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "نظام إدارة الشركات السحابي",
    description: "نظام متكامل لإدارة الموارد البشرية والمحاسبة والمخزون مع لوحة تحكم ذكية",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    category: "Cloud System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "منصة SaaS للتجارة الإلكترونية",
    description: "منصة متعددة المتاجر مع نظام دفع متكامل وتحليلات متقدمة للمبيعات",
    tags: ["Next.js", "Stripe", "MongoDB", "Vercel"],
    category: "SaaS App",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "بوت أتمتة خدمة العملاء",
    description: "نظام ذكي للرد التلقائي على استفسارات العملاء باستخدام ChatGPT",
    tags: ["Python", "OpenAI", "FastAPI", "Redis"],
    category: "AI Automation",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    title: "موقع شركة استشارات",
    description: "موقع احترافي لشركة استشارات مع نظام حجز مواعيد ومدونة تقنية",
    tags: ["React", "Tailwind", "Supabase", "Vercel"],
    category: "Company Website",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    title: "لوحة تحكم تحليلات البيانات",
    description: "داشبورد متقدم لعرض وتحليل بيانات المبيعات مع تقارير تفاعلية",
    tags: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    category: "Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "تطبيق إدارة المشاريع",
    description: "نظام كامل لتتبع المهام والمشاريع مع نظام إشعارات وتقارير أداء",
    tags: ["React", "Firebase", "TypeScript", "Tailwind"],
    category: "SaaS App",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Layers className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium text-sm">أعمالي</span>
          </div>
          
          <h2 className="section-title">
            <span className="text-foreground">مشاريع </span>
            <span className="gradient-text">مميزة</span>
          </h2>
          
          <p className="section-subtitle">
            مجموعة من أبرز المشاريع التي قمت بتنفيذها في مجالات متنوعة
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card-hover rounded-2xl overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full text-xs font-medium text-primary">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono px-2 py-1 bg-secondary rounded text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="glass" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4" />
                    معاينة
                  </Button>
                  <Button variant="glass" size="icon" className="shrink-0">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="hero-outline" size="lg">
              عرض جميع المشاريع
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
