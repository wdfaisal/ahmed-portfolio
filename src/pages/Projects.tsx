import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ExternalLink, Github, ArrowRight, Search, Filter, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
interface Project {
  id: string;
  title: string;
  title_ar: string;
  description: string;
  description_ar: string;
  image_url: string | null;
  preview_url: string | null;
  github_url: string | null;
  tags: string[];
  category: string;
  featured: boolean;
}

const staticProjects: Project[] = [
  {
    id: "7",
    title: "AI PDF Notes",
    title_ar: "ملخصاتي - تطبيق ملاحظات PDF بالذكاء الاصطناعي",
    description: "AI-powered PDF note-taking application",
    description_ar: "تطبيق لتدوين ملاحظات PDF المدعوم بالذكاء الاصطناعي. حمّل ملفات PDF، واطرح أسئلة الذكاء الاصطناعي، أو استخدمه مثل MS-Word. احفظ ملاحظاتك وعزز إنتاجيتك بسهولة!",
    image_url: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800",
    preview_url: "https://ai-pdf-notes-nine.vercel.app/",
    github_url: null,
    tags: ["React", "AI", "PDF", "Next.js"],
    category: "saas",
    featured: true,
  },
  {
    id: "1",
    title: "E-Commerce Platform",
    title_ar: "منصة تجارة إلكترونية",
    description: "Full-stack e-commerce solution",
    description_ar: "منصة متكاملة للتجارة الإلكترونية مع نظام دفع وإدارة المخزون",
    image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
    preview_url: "https://example.com",
    github_url: "https://github.com",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "saas",
    featured: true,
  },
  {
    id: "2",
    title: "Business Website",
    title_ar: "موقع شركة استشارات",
    description: "Corporate consulting website",
    description_ar: "موقع احترافي لشركة استشارات مع نظام حجز مواعيد",
    image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    preview_url: "https://example.com",
    github_url: null,
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    category: "website",
    featured: false,
  },
  {
    id: "3",
    title: "Cloud Management System",
    title_ar: "نظام إدارة سحابي",
    description: "Cloud infrastructure management",
    description_ar: "نظام متكامل لإدارة البنية التحتية السحابية والموارد",
    image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    preview_url: "https://example.com",
    github_url: "https://github.com",
    tags: ["AWS", "Terraform", "Docker", "Kubernetes"],
    category: "cloud",
    featured: true,
  },
  {
    id: "4",
    title: "Workflow Automation",
    title_ar: "أتمتة سير العمل",
    description: "Business process automation",
    description_ar: "نظام أتمتة العمليات التجارية وتكامل التطبيقات",
    image_url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800",
    preview_url: null,
    github_url: "https://github.com",
    tags: ["Python", "Zapier", "n8n", "APIs"],
    category: "automation",
    featured: false,
  },
  {
    id: "5",
    title: "SaaS Dashboard",
    title_ar: "لوحة تحكم SaaS",
    description: "Analytics dashboard for SaaS",
    description_ar: "لوحة تحكم متقدمة لتحليل بيانات تطبيقات SaaS",
    image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    preview_url: "https://example.com",
    github_url: "https://github.com",
    tags: ["React", "D3.js", "PostgreSQL", "GraphQL"],
    category: "saas",
    featured: true,
  },
  {
    id: "6",
    title: "Restaurant Website",
    title_ar: "موقع مطعم",
    description: "Modern restaurant website",
    description_ar: "موقع عصري لمطعم مع نظام حجز طاولات وقائمة تفاعلية",
    image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    preview_url: "https://example.com",
    github_url: null,
    tags: ["Vue.js", "Tailwind", "Firebase"],
    category: "website",
    featured: false,
  },
];

const categories = [
  { id: "all", name: "الكل" },
  { id: "saas", name: "SaaS" },
  { id: "website", name: "مواقع" },
  { id: "cloud", name: "أنظمة سحابية" },
  { id: "automation", name: "أتمتة" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = staticProjects.filter((project) => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title_ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description_ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>المشاريع | أحمد فيصل - مطور Full Stack</title>
        <meta name="description" content="استعرض مشاريعي في تطوير تطبيقات SaaS، مواقع الشركات، الأنظمة السحابية، وأتمتة الأعمال" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-24 pb-16 bg-background">
        {/* Header */}
        <section className="section-container mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">معرض الأعمال</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              مجموعة من المشاريع التي عملت عليها في مجالات مختلفة
            </p>
          </div>

          {/* Search & Filter */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="ابحث في المشاريع..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 pl-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "glass-card hover:border-primary/40"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-container">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Filter className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">لا توجد مشاريع</h3>
              <p className="text-muted-foreground">جرب تغيير معايير البحث أو الفئة</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group glass-card-hover rounded-2xl overflow-hidden animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-blue-500/20">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title_ar}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-4xl font-bold gradient-text">{project.title_ar.charAt(0)}</span>
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                      {project.preview_url && (
                        <a
                          href={project.preview_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 glass-card rounded-full hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 glass-card rounded-full hover:scale-110 transition-transform"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                        مميز
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title_ar}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {project.description_ar}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Back to Home */}
        <section className="section-container mt-16 text-center">
          <a href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowRight className="w-4 h-4 rotate-180" />
            العودة للرئيسية
          </a>
        </section>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold gradient-text">
                    {selectedProject.title_ar}
                  </DialogTitle>
                </DialogHeader>

                {/* Project Image */}
                <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-blue-500/20">
                  {selectedProject.image_url ? (
                    <img
                      src={selectedProject.image_url}
                      alt={selectedProject.title_ar}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl font-bold gradient-text">
                        {selectedProject.title_ar.charAt(0)}
                      </span>
                    </div>
                  )}
                  {selectedProject.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-medium">
                      مميز
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">الوصف</h4>
                    <p className="text-foreground">{selectedProject.description_ar}</p>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">التقنيات المستخدمة</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-secondary text-sm text-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4">
                    {selectedProject.preview_url && (
                      <a
                        href={selectedProject.preview_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-5 h-5" />
                        معاينة المشروع
                      </a>
                    )}
                    {selectedProject.github_url && (
                      <a
                        href={selectedProject.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl glass-card hover:border-primary/40 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-5 h-5" />
                        كود المصدر
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>

      <Footer />
    </>
  );
};

export default Projects;
