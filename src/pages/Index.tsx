import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>
        
        {/* About Section */}
        <About />
        
        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>
        
        
        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        
        {/* Services Section */}
        <section id="services">
          <Services />
        </section>
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
