import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowUp,
  Heart
} from "lucide-react";

// Scroll helpers
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const navbarHeight = document.querySelector("nav")?.clientHeight || 80;
    const elementPosition = element.offsetTop - navbarHeight;
    window.scrollTo({ top: elementPosition, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" }
  ];

  const services = ["Backend APIs", "Agentic AI Systems", "Role-Based Systems"];
  const emailAddress = "kamepallinandini218@gmail.com";

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nandini-kamepalli-6b1326215/",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/kamepallinandini997?tab=repositories",
      color: "hover:text-gray-800"
    },
    {
      name: "Email",
      icon: Mail,
      href: "#contact",
      color: "hover:text-red-500"
    }
  ];

  return (
    <footer className="relative overflow-hidden text-black">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-300 via-pink-300 to-purple-300 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 pt-8 pb-1 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-2">
                <span className="bg-gradient-to-r from-purple-300 to-blue-500 bg-clip-text text-transparent font-bold">
                  Nandini Kamepalli
                </span>
              </h3>
              <p className="text-sm text-black/70">
                AI Enthusiast & Agentic AI Developer
              </p>
            </div>

            <p className="text-sm text-black/70 leading-relaxed">
              Passionate about creating intelligent systems and enterprise
              solutions that solve real-world problems using cutting-edge AI
              technology.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={
                      social.name !== "Email" ? "noopener noreferrer" : undefined
                    }
                    className={`flex items-center justify-center p-2 rounded-full bg-black/10 transition-colors duration-200 ${social.color}`}
                    aria-label={social.name}
                    onClick={(e) => {
                      if (social.name === "Email") {
                        e.preventDefault();
                        scrollToSection("contact");
                      }
                    }}
                  >
                    <Icon className="h-5 w-5 relative z-10" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 ">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-black/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 ">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-black/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-xl font-bold mb-6 ">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <button
                  className="text-sm text-black/70 hover:text-primary transition-colors duration-200 break-all"
                  onClick={() => scrollToSection("contact")}
                >
                  {emailAddress}
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+919705154091"
                  className="text-sm text-black/70 hover:text-primary transition-colors duration-200"
                >
                  +91 9705154091
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-black/70">
                  Hyderabad, Telangana
                </span>
              </div>

              <Button
                className="mt-6 w-full gradient-primary hover:opacity-90"
                onClick={() => scrollToSection("contact")}
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-black/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-black/70 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start">
                © {currentYear} Nandini Kamepalli
                <Heart className="h-4 w-4 mx-1 text-red-500" />
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-black/70 hover:text-primary group"
              >
                <ArrowUp className="h-4 w-4 mr-2 text-blue-500 group-hover:text-purple-400 transition-colors duration-300" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
