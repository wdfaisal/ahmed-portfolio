import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "الرئيسية", href: "#hero" },
  { name: "عني", href: "#about" },
  { name: "المهارات", href: "#skills" },
  { name: "المشاريع", href: "/projects", isPage: true },
  { name: "الخدمات", href: "#services" },
  { name: "التوصيات", href: "#testimonials" },
  { name: "تواصل", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">م</span>
            </div>
            <span className="text-xl font-bold gradient-text">مطور</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="nav-link text-sm font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link text-sm font-medium"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              احصل على استشارة
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="nav-link text-base font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="nav-link text-base font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <Button variant="hero" className="mt-2">
                احصل على استشارة
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
