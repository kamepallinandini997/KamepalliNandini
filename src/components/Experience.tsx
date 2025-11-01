import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="relative py-12 md:py-16 gradient-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-accent opacity-10 rounded-3xl blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-3xl blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
            Professional <span className="hero-text">Experience</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

            {/* Current Role */}
            <div className="relative mb-8 animate-slide-in-right">
              <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

              <div className="ml-20">
                <Card className="tech-border hover-lift hover-glow overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          Associate Software Engineer
                        </h3>
                        <h4 className="text-xl font-semibold mb-4">
                          Zennial Pro Pvt Ltd
                        </h4>
                      </div>
                      <div className="flex flex-col lg:text-right space-y-2">
                        <div className="flex items-center lg:justify-end text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>Apr 2025 – Present</span>
                        </div>
                        <div className="flex items-center lg:justify-end text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>Remote</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        Leading Agentic AI development initiatives and building
                        enterprise-grade intelligent systems with a focus on
                        automation, scalability, and secure role-based solutions.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Responsibilities */}
                        <div>
                          <h5 className="font-semibold text-primary mb-3">
                            Key Responsibilities:
                          </h5>
                          <ul className="space-y-2 text-muted-foreground">
                            {[
                              "Agentic AI solutions with GPT & LangChain",
                              "Role-based task tracking systems with RBAC",
                              "JWT authentication implementation",
                              "RESTful API design & MongoDB integration",
                              "Cross-team collaboration on enterprise AI solutions",
                            ].map((item) => (
                              <li key={item} className="flex items-start">
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="font-semibold text-primary mb-3">
                            Technologies:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Python",
                              "FastAPI",
                              "LangGraph",
                              "GPT",
                              "LangChain",
                              "MongoDB",
                              "JWT",
                              "RBAC",
                              "REST APIs"
                            ].map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="font-semibold text-primary mb-3">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-2 text-muted-foreground">
                          {[
                            "Implemented AI workflow automation reducing manual tasks by 60%",
                            "Built robust authentication system handling 10k+ concurrent users",
                            "Optimized API performance with 40% faster response times",
                          ].map((achievement) => (
                            <li key={achievement} className="flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
