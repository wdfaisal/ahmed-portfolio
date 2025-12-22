import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  LayoutDashboard,
  FolderKanban,
  Wrench,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

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

interface Skill {
  id: string;
  name: string;
  category: string;
  icon: string | null;
  proficiency: number;
  display_order: number;
}

const Admin = () => {
  const navigate = useNavigate();
  const { user, isAdmin, loading, signOut } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"projects" | "skills">("projects");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Projects state
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [showProjectForm, setShowProjectForm] = useState(false);

  // Skills state
  const [skills, setSkills] = useState<Skill[]>([]);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [showSkillForm, setShowSkillForm] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      fetchProjects();
      fetchSkills();
    }
  }, [user]);

  const fetchProjects = async () => {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    setProjects(data || []);
  };

  const fetchSkills = async () => {
    const { data } = await supabase
      .from("skills")
      .select("*")
      .order("display_order", { ascending: true });
    setSkills(data || []);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse text-primary">جاري التحميل...</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>لوحة الإدارة | أحمد فيصل</title>
      </Helmet>

      <div className="min-h-screen bg-background flex">
        {/* Sidebar */}
        <aside
          className={`fixed md:static inset-y-0 right-0 z-50 w-64 glass-card border-l border-border transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">م</span>
              </div>
              <div>
                <h2 className="font-bold text-foreground">لوحة الإدارة</h2>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveTab("projects")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === "projects"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <FolderKanban className="w-5 h-5" />
              المشاريع
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === "skills"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <Wrench className="w-5 h-5" />
              المهارات
            </button>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
            >
              <LogOut className="w-5 h-5" />
              تسجيل الخروج
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between mb-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 glass-card rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold gradient-text">
              {activeTab === "projects" ? "المشاريع" : "المهارات"}
            </h1>
          </div>

          {/* Header */}
          <div className="hidden md:flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold gradient-text">
                {activeTab === "projects" ? "إدارة المشاريع" : "إدارة المهارات"}
              </h1>
              <p className="text-muted-foreground mt-1">
                {activeTab === "projects"
                  ? "أضف وعدّل مشاريعك"
                  : "أضف وعدّل مهاراتك"}
              </p>
            </div>
            <Button
              variant="hero"
              onClick={() => {
                if (activeTab === "projects") {
                  setEditingProject(null);
                  setShowProjectForm(true);
                } else {
                  setEditingSkill(null);
                  setShowSkillForm(true);
                }
              }}
            >
              <Plus className="w-5 h-5" />
              {activeTab === "projects" ? "إضافة مشروع" : "إضافة مهارة"}
            </Button>
          </div>

          {/* Mobile Add Button */}
          <div className="md:hidden mb-6">
            <Button
              variant="hero"
              className="w-full"
              onClick={() => {
                if (activeTab === "projects") {
                  setEditingProject(null);
                  setShowProjectForm(true);
                } else {
                  setEditingSkill(null);
                  setShowSkillForm(true);
                }
              }}
            >
              <Plus className="w-5 h-5" />
              {activeTab === "projects" ? "إضافة مشروع" : "إضافة مهارة"}
            </Button>
          </div>

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <ProjectsManager
              projects={projects}
              showForm={showProjectForm}
              editingProject={editingProject}
              setShowForm={setShowProjectForm}
              setEditingProject={setEditingProject}
              onRefresh={fetchProjects}
              isAdmin={isAdmin}
            />
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <SkillsManager
              skills={skills}
              showForm={showSkillForm}
              editingSkill={editingSkill}
              setShowForm={setShowSkillForm}
              setEditingSkill={setEditingSkill}
              onRefresh={fetchSkills}
              isAdmin={isAdmin}
            />
          )}
        </main>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-background/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </div>
    </>
  );
};

// Projects Manager Component
interface ProjectsManagerProps {
  projects: Project[];
  showForm: boolean;
  editingProject: Project | null;
  setShowForm: (show: boolean) => void;
  setEditingProject: (project: Project | null) => void;
  onRefresh: () => void;
  isAdmin: boolean;
}

const ProjectsManager = ({
  projects,
  showForm,
  editingProject,
  setShowForm,
  setEditingProject,
  onRefresh,
  isAdmin,
}: ProjectsManagerProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    title_ar: "",
    description: "",
    description_ar: "",
    image_url: "",
    preview_url: "",
    github_url: "",
    tags: "",
    category: "saas",
    featured: false,
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title,
        title_ar: editingProject.title_ar,
        description: editingProject.description,
        description_ar: editingProject.description_ar,
        image_url: editingProject.image_url || "",
        preview_url: editingProject.preview_url || "",
        github_url: editingProject.github_url || "",
        tags: editingProject.tags.join(", "),
        category: editingProject.category,
        featured: editingProject.featured,
      });
    } else {
      setFormData({
        title: "",
        title_ar: "",
        description: "",
        description_ar: "",
        image_url: "",
        preview_url: "",
        github_url: "",
        tags: "",
        category: "saas",
        featured: false,
      });
    }
  }, [editingProject]);

  const handleSave = async () => {
    if (!isAdmin) {
      toast({
        title: "غير مصرح",
        description: "ليس لديك صلاحية لهذا الإجراء",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);
    const projectData = {
      title: formData.title,
      title_ar: formData.title_ar,
      description: formData.description,
      description_ar: formData.description_ar,
      image_url: formData.image_url || null,
      preview_url: formData.preview_url || null,
      github_url: formData.github_url || null,
      tags: formData.tags.split(",").map((t) => t.trim()).filter(Boolean),
      category: formData.category,
      featured: formData.featured,
    };

    try {
      if (editingProject) {
        const { error } = await supabase
          .from("projects")
          .update(projectData)
          .eq("id", editingProject.id);
        if (error) throw error;
        toast({ title: "تم تحديث المشروع بنجاح" });
      } else {
        const { error } = await supabase.from("projects").insert(projectData);
        if (error) throw error;
        toast({ title: "تم إضافة المشروع بنجاح" });
      }
      setShowForm(false);
      setEditingProject(null);
      onRefresh();
    } catch (error: any) {
      toast({
        title: "خطأ",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!isAdmin) {
      toast({
        title: "غير مصرح",
        description: "ليس لديك صلاحية لهذا الإجراء",
        variant: "destructive",
      });
      return;
    }

    if (!confirm("هل أنت متأكد من حذف هذا المشروع؟")) return;

    const { error } = await supabase.from("projects").delete().eq("id", id);
    if (error) {
      toast({ title: "خطأ", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "تم حذف المشروع" });
      onRefresh();
    }
  };

  return (
    <div>
      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80">
          <div className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">
                {editingProject ? "تعديل المشروع" : "إضافة مشروع جديد"}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingProject(null);
                }}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">العنوان (عربي)</label>
                  <input
                    type="text"
                    value={formData.title_ar}
                    onChange={(e) => setFormData({ ...formData, title_ar: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">العنوان (إنجليزي)</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">الوصف (عربي)</label>
                <textarea
                  value={formData.description_ar}
                  onChange={(e) => setFormData({ ...formData, description_ar: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">الوصف (إنجليزي)</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none resize-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">رابط الصورة</label>
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">الفئة</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                  >
                    <option value="saas">SaaS</option>
                    <option value="website">مواقع</option>
                    <option value="cloud">أنظمة سحابية</option>
                    <option value="automation">أتمتة</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">رابط المعاينة</label>
                  <input
                    type="url"
                    value={formData.preview_url}
                    onChange={(e) => setFormData({ ...formData, preview_url: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">رابط GitHub</label>
                  <input
                    type="url"
                    value={formData.github_url}
                    onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">التقنيات (مفصولة بفاصلة)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                  placeholder="React, Node.js, PostgreSQL"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 accent-primary"
                />
                <label htmlFor="featured" className="text-sm">مشروع مميز</label>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="hero" onClick={handleSave} disabled={saving} className="flex-1">
                  {saving ? "جاري الحفظ..." : (
                    <>
                      <Save className="w-4 h-4" />
                      حفظ
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingProject(null);
                  }}
                >
                  إلغاء
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Projects List */}
      {projects.length === 0 ? (
        <div className="text-center py-20 glass-card rounded-2xl">
          <FolderKanban className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-bold mb-2">لا توجد مشاريع</h3>
          <p className="text-muted-foreground">ابدأ بإضافة مشروعك الأول</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="glass-card rounded-xl overflow-hidden group">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
                {project.image_url ? (
                  <img
                    src={project.image_url}
                    alt={project.title_ar}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-3xl font-bold gradient-text">
                    {project.title_ar.charAt(0)}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground mb-1">{project.title_ar}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {project.description_ar}
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      setEditingProject(project);
                      setShowForm(true);
                    }}
                  >
                    <Pencil className="w-4 h-4" />
                    تعديل
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:bg-destructive/10"
                    onClick={() => handleDelete(project.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Skills Manager Component
interface SkillsManagerProps {
  skills: Skill[];
  showForm: boolean;
  editingSkill: Skill | null;
  setShowForm: (show: boolean) => void;
  setEditingSkill: (skill: Skill | null) => void;
  onRefresh: () => void;
  isAdmin: boolean;
}

const SkillsManager = ({
  skills,
  showForm,
  editingSkill,
  setShowForm,
  setEditingSkill,
  onRefresh,
  isAdmin,
}: SkillsManagerProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    category: "frontend",
    icon: "",
    proficiency: 80,
    display_order: 0,
  });
  const [saving, setSaving] = useState(false);

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "قواعد البيانات" },
    { id: "cloud", name: "Cloud & DevOps" },
    { id: "ai", name: "الذكاء الاصطناعي" },
    { id: "tools", name: "الأدوات" },
  ];

  useEffect(() => {
    if (editingSkill) {
      setFormData({
        name: editingSkill.name,
        category: editingSkill.category,
        icon: editingSkill.icon || "",
        proficiency: editingSkill.proficiency,
        display_order: editingSkill.display_order,
      });
    } else {
      setFormData({
        name: "",
        category: "frontend",
        icon: "",
        proficiency: 80,
        display_order: 0,
      });
    }
  }, [editingSkill]);

  const handleSave = async () => {
    if (!isAdmin) {
      toast({
        title: "غير مصرح",
        description: "ليس لديك صلاحية لهذا الإجراء",
        variant: "destructive",
      });
      return;
    }

    setSaving(true);
    const skillData = {
      name: formData.name,
      category: formData.category,
      icon: formData.icon || null,
      proficiency: formData.proficiency,
      display_order: formData.display_order,
    };

    try {
      if (editingSkill) {
        const { error } = await supabase
          .from("skills")
          .update(skillData)
          .eq("id", editingSkill.id);
        if (error) throw error;
        toast({ title: "تم تحديث المهارة بنجاح" });
      } else {
        const { error } = await supabase.from("skills").insert(skillData);
        if (error) throw error;
        toast({ title: "تم إضافة المهارة بنجاح" });
      }
      setShowForm(false);
      setEditingSkill(null);
      onRefresh();
    } catch (error: any) {
      toast({
        title: "خطأ",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!isAdmin) {
      toast({
        title: "غير مصرح",
        description: "ليس لديك صلاحية لهذا الإجراء",
        variant: "destructive",
      });
      return;
    }

    if (!confirm("هل أنت متأكد من حذف هذه المهارة؟")) return;

    const { error } = await supabase.from("skills").delete().eq("id", id);
    if (error) {
      toast({ title: "خطأ", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "تم حذف المهارة" });
      onRefresh();
    }
  };

  return (
    <div>
      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80">
          <div className="glass-card w-full max-w-md rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">
                {editingSkill ? "تعديل المهارة" : "إضافة مهارة جديدة"}
              </h2>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingSkill(null);
                }}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">اسم المهارة</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                  placeholder="React.js"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">الفئة</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">الأيقونة (اختياري)</label>
                <input
                  type="text"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                  placeholder="SiReact"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  مستوى الإتقان: {formData.proficiency}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={formData.proficiency}
                  onChange={(e) => setFormData({ ...formData, proficiency: Number(e.target.value) })}
                  className="w-full accent-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">ترتيب العرض</label>
                <input
                  type="number"
                  value={formData.display_order}
                  onChange={(e) => setFormData({ ...formData, display_order: Number(e.target.value) })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary outline-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="hero" onClick={handleSave} disabled={saving} className="flex-1">
                  {saving ? "جاري الحفظ..." : (
                    <>
                      <Save className="w-4 h-4" />
                      حفظ
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingSkill(null);
                  }}
                >
                  إلغاء
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills List */}
      {skills.length === 0 ? (
        <div className="text-center py-20 glass-card rounded-2xl">
          <Wrench className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-xl font-bold mb-2">لا توجد مهارات</h3>
          <p className="text-muted-foreground">ابدأ بإضافة مهاراتك</p>
        </div>
      ) : (
        <div className="space-y-4">
          {categories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category.id);
            if (categorySkills.length === 0) return null;

            return (
              <div key={category.id} className="glass-card rounded-xl p-4">
                <h3 className="font-bold text-foreground mb-4">{category.name}</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center justify-between p-3 bg-secondary rounded-lg group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => {
                            setEditingSkill(skill);
                            setShowForm(true);
                          }}
                          className="p-1 hover:bg-primary/10 rounded"
                        >
                          <Pencil className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleDelete(skill.id)}
                          className="p-1 hover:bg-destructive/10 rounded text-destructive"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Admin;
