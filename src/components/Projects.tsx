import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Agentic AI Workflow System",
      description:
        "An intelligent task automation system leveraging GPT and LangChain to streamline enterprise workflows. Features role-based access control and dynamic task assignments for maximum efficiency.",
      technologies: ["GPT", "LangChain", "FastAPI", "MongoDB", "JWT"],
      status: "In Development",
      highlights: [
        "40% improvement in task completion time",
        "Role-based intelligent automation",
        "Scalable microservices architecture",
      ],
      github: "#",
    },
    {
      title: "Role-Based Task Tracking System",
      description:
        "A robust task management system with role-based access and automation, built using Python, FastAPI, MongoDB, and Agentic AI concepts for enterprise workflow tracking.",
      technologies: ["Python", "FastAPI", "MongoDB", "JWT", "Agentic AI"],
      status: "Completed",
      highlights: [
        "Implemented secure RBAC system for tasks",
        "Automated task assignment and tracking",
        "Scalable architecture with MongoDB and FastAPI",
      ],
      github: "https://github.com/kamepallinandini997/role-based-task-tracker",
    },
    {
      title: "Enterprise API Gateway",
      description:
        "High-performance RESTful API system with authentication, rate limiting, and logging. Built with FastAPI and containerized deployment for enterprise-grade reliability.",
      technologies: ["FastAPI", "Pydantic", "MongoDB", "JWT"],
      status: "Completed",
      highlights: [
        "99.9% uptime achievement",
        "Handles 1000+ requests/second",
        "Advanced security implementation",
      ],
      github: "https://github.com/kamepallinandini997/Enterprise-API-Gateway",
    },
  ];

  return (
    <section className="relative py-20 gradient-secondary overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-accent opacity-10 rounded-3xl blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-3xl blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            Explore My <span className="hero-text">Projects</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my journey in building intelligent systems, from backend APIs to AI-driven automation, combining Python, FastAPI, MongoDB, and cutting-edge AI tools.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="tech-border hover-lift hover-glow h-full flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold leading-tight">
                    {project.title}
                  </CardTitle>
                  <Badge
                    variant={project.status === "Completed" ? "default" : "secondary"}
                    className={project.status === "Completed" ? "gradient-primary text-primary-foreground" : ""}
                  >
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs text-black">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* View Code Button */}
                <div className="flex mt-auto">
                  <a
                    href={project.github !== "#" ? project.github : "#"}
                    target={project.github !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      size="sm"
                      disabled={project.github === "#"}
                      className={`w-full gradient-primary hover:opacity-90 ${
                        project.github === "#" ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12 animate-fade-in-up">
          <div className="tech-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              Explore my GitHub for more projects, contributions, and code samples.
            </p>
            <a
              href="https://github.com/kamepallinandini997?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gradient-primary hover:opacity-90 hover-lift px-8"
              >
                <Github className="mr-2 h-5 w-5" />
                Visit GitHub Profile
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
