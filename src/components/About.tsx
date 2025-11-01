import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="gradient-secondary relative overflow-hidden py-20 lg:py-20"
    >
      {/* Modern background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-accent opacity-5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            About <span className="hero-text">Me</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                My Journey
              </h3>

              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                I am a Python, FastAPI, and MongoDB specialist with hands-on experience in building 
                intelligent systems and enterprise solutions. Currently working as an{" "}
                <span className="hero-text font-semibold bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                  Associate Software Engineer at Zennial Pro Pvt Ltd
                </span>, 
                focusing on Agentic AI, role-based systems, and task automation.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                 I'm passionate about creating intelligent systems that 
                bridge the gap between complex AI capabilities and practical business applications.
              </p>

              <div className="glass-card p-6 rounded-2xl mt-6">
                <h4 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                  Focus Areas
                </h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Agentic AI Development</li>
                  <li>Enterprise Solutions</li>
                  <li>Role-Based Access Systems</li>
                  <li>Task Automation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Achievements */}
          <div className="space-y-7 animate-slide-in-right">
            <Card className="modern-border hover-lift hover-glow overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-10">
                  <div className="gradient-primary p-4 rounded-2xl shadow-lg">
                    <GraduationCap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-3xl mb-3 hero-text">Education</h3>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h4 className="font-semibold text-lg text-foreground">B.Tech in CSE (AI & ML)</h4>
                        <p className="text-muted-foreground">Chebrolu Engineering College</p>
                        <p className="text-muted-foreground">2020 – 2024</p>
                        <div className="flex items-center glass-card p-4 rounded-xl hover-scale">
                          <span className="font-semibold text-primary">CGPA: 8.03</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="tech-border hover-lift overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="gradient-accent p-3 rounded-2xl">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 accent-text">Key Achievements</h3>
                    <ul className="space-y-4 text-lg text-muted-foreground">
                      <li className="flex items-center glass-card p-3 rounded-lg hover-scale">
                        <div className="w-2 h-2 gradient-primary rounded-full mr-3 animate-pulse"></div>
                        KIMO EDGE-23 Award Winner
                      </li>
                      <li className="flex items-center glass-card p-3 rounded-lg hover-scale">
                        <div className="w-2 h-2 gradient-accent rounded-full mr-3"></div>
                        Scholarship Recipient
                      </li>
                      <li className="flex items-center glass-card p-3 rounded-lg hover-scale">
                        <div className="w-2 h-2 gradient-primary rounded-full mr-3"></div>
                        Leadership Roles in Student Organizations
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
