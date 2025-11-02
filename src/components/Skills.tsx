import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Zap, Users, Ear, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, icon: Code },
    { name: "FastAPI", level: 85, icon: Zap },
    { name: "LangChain", level: 80, icon: Brain },
    { name: "LangGraph", level: 80, icon: Brain },
    { name: "MongoDB", level: 75, icon: Database },
    { name: "REST APIs", level: 85, icon: Code },
    { name: "Git", level: 85, icon: Code }
  ];

  const softSkills = [
    { name: "Leadership", icon: Users, description: "Team management and project leadership" },
    { name: "Teamwork", icon: Users, description: "Collaborative problem solving" },
    { name: "Active Listening", icon: Ear, description: "Understanding stakeholder needs" },
    { name: "Problem Solving", icon: Brain, description: "Analytical thinking and innovation" }
  ];

  const certifications = [
    {
      name: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      icon: Trophy,
      color: "text-blue-600",
      link: "https://www.credly.com/badges/28acd732-3802-410a-abd0-29c91b32ae11/public_url",
      type: "badge"
    },
    {
      name: "AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      icon: Trophy,
      color: "text-orange-600",
      link: "https://www.credly.com/badges/c666a4eb-d8e7-4928-ad60-fba9af352a61/linked_in_profile",
      type: "badge"
    },
    {
      name: "AI Certification",
      issuer: "Udemy",
      icon: Trophy,
      color: "text-purple-600",
      link: "https://www.udemy.com/certificate/UC-75751554-6b5f-4ce6-803f-b11e34bc7482/",
      type: "certificate"
    }
  ];

  return (
    <section id="skills" className="relative py-0 gradient-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-accent opacity-10 rounded-3xl blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-3xl blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
            Skills & <span className="hero-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Technical & Soft Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="space-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
            <div className="grid grid-cols-1 gap-3">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card
                    key={skill.name}
                    className="tech-border hover-lift hover-glow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="gradient-primary p-3 rounded-xl">
                          <Icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{skill.name}</h4>
                          <p className="text-xs text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in-up">
          <h3 className="text-xl font-bold mb-4 text-center">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card
                  key={cert.name}
                  className="tech-border hover-lift hover-glow text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className={`inline-flex p-4 rounded-full bg-accent/50 mb-4`}>
                      <Icon className={`h-8 w-8 ${cert.color}`} />
                    </div>
                    <h4 className="font-semibold mb-2">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button size="sm" className="gradient-primary hover:opacity-90">
                        {cert.type === "badge" ? "View Badge" : "View Certificate"}
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
