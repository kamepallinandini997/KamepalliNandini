import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import nandiniProfile from "@/assets/nandini-profile.jpg";

const Hero = () => {
  // 🚀 HMR Verification Marker - Remove after confirming hot reload works
  console.log('[Hero.tsx] Component loaded at:', new Date().toLocaleTimeString());
  
  const heroRef = useRef<HTMLElement | null>(null);

  const scrollToAbout = () => {
    const aboutEl = document.getElementById("about");
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const fallback = heroRef.current?.nextElementSibling as HTMLElement | null;
    if (fallback) {
      fallback.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center gradient-hero relative overflow-hidden"
    >
      {/* Background remains subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/10 opacity-15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold font-poppins leading-tight bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text text-transparent block">
                Nandini
                <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent block">
                  Kamepalli
                </span>
              </h1>
              <h2 className="text-3xl lg:text-5xl font-semibold text-muted-foreground leading-relaxed">
               Agentic AI Enthusiast |  {" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
               Python & API 
                </span>{" "}
                 Developer
              </h2>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                I build intelligent systems and enterprise solutions with
                hands-on experience in{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent font-semibold">
                  FastAPI, GPT
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent font-semibold">
                  LangChain
                </span>
                . Passionate about creating AI-powered solutions that solve
                real-world problems.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                variant="gradient"
                className="group px-12 py-8 text-xl font-semibold hover-lift"
                onClick={scrollToAbout}
              >
                <span className="relative z-10">View My Work</span>
                <ArrowDown className="ml-3 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>

              {/* Fixed Resume Download */}
              <a href="/Nandini_Kamepalli_Profile.pdf" download>
                <Button
                  size="lg"
                className="group px-12 py-8 text-xl font-semibold hover-lift"
                >
                  <Download className="h-6 w-6" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right mt-10 lg:mt-0">
            <div className="relative">
              {/* Gradient Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-pink-300 rounded-3xl blur-3xl opacity-40 scale-110 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-pink-400 to-purple-300 rounded-3xl blur-2xl opacity-30 scale-105"></div>

              <div className="relative glass-card rounded-3xl p-6 hover-lift hover-scale">
                <img
                  src={nandiniProfile}
                  alt="Kamepalli Nandini - AI & ML Engineer"
                  className="w-96 h-96 object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://via.placeholder.com/400";
                  }}
                />

                {/* Floating Gradient Particles */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-tr from-blue-400 to-pink-400 rounded-full animate-bounce opacity-80"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-bl from-pink-400 to-purple-300 rounded-full animate-bounce opacity-60"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div className="absolute top-1/4 -right-6 w-4 h-4 bg-gradient-to-r from-blue-300 to-pink-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-50">
        <button
          type="button"
          onClick={scrollToAbout}
          aria-label="Scroll to about"
          className="p-4 rounded-full hover-glow cursor-pointer focus:outline-none focus:ring-2 bg-white/20 backdrop-blur-md"
          style={{ pointerEvents: "auto" }}
        >
          <ArrowDown className="h-6 w-6 text-gradient-to-r from-blue-400 via-purple-300 to-pink-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
