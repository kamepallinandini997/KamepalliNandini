import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        window.scrollTo({ top: element.offsetTop - offset, behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "glass-card shadow-2xl border-b border-primary/20"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="font-bold text-2xl cursor-pointer hover-scale group"
              onClick={() => scrollToSection("home")}
            >
              <span className="hero-text group-hover:scale-110 transition-transform duration-300">
                Nandini Kamepalli
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-6 py-3 text-muted-foreground hover:text-primary transition-all duration-300 font-medium rounded-xl hover:bg-primary/10 hover-scale group"
                >
                  <span className="relative z-10">{item.name}</span>
                </button>
              ))}
            </div>

            {/* Desktop Resume Button */}
            <div className="hidden md:flex">
              <a href="/Nandini_Kamepalli_Profile.pdf" download>
                <Button
                  size="lg"
                  className="bg-blue-600 text-white font-semibold rounded-xl 
                             transition-none hover:bg-blue-600 active:bg-blue-700"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="glass"
              size="lg"
              className="md:hidden hover-scale"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card border-t border-primary/20 animate-fade-in-up">
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-muted-foreground hover:text-primary transition-all duration-300 py-4 font-medium rounded-xl hover:bg-primary/10 px-4 hover-scale"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-6 border-t border-primary/20">
                  <a href="/Nandini_Kamepalli_Profile.pdf" download>
                    <Button
                      className="bg-blue-600 text-white font-semibold 
                                 rounded-xl w-full transition-none 
                                 hover:bg-blue-600 active:bg-blue-700"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navigation;
