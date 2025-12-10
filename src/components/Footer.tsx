import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">م</span>
              </div>
              <span className="text-lg font-bold gradient-text">مطور</span>
            </div>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              صُنع بـ <Heart className="w-4 h-4 text-destructive fill-destructive" /> في {currentYear}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              عني
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              المشاريع
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              الخدمات
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              تواصل
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
