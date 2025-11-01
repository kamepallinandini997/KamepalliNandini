import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { CheckCircle } from "lucide-react";
import { 
  Brain, 
  Zap, 
  Settings, 
  Database
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Backend API Development",
      description: "High-performance REST APIs with FastAPI, authentication, and scalable architecture.",
      features: [
        "FastAPI & Python Development",
        "JWT Authentication Systems",
        "Database Integration (MongoDB)",
        "API Documentation & Testing",
        "Containerization with Docker"
      ],
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Settings,
      title: "Agentic AI Systems",
      description: "Intelligent automation systems that can reason, plan, and execute complex workflows.",
      features: [
        "GPT & LangChain Integration",
        "Workflow Automation",
        "Intelligent Task Management",
        "Multi-Agent Coordination",
        "Conversational AI Interfaces"
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Database,
      title: "Role-Based System Design",
      description: "Secure, scalable systems with comprehensive role-based access control and task automation.",
      features: [
        "RBAC Implementation",
        "User Management Systems",
        "Secure Authentication",
        "Permission Management",
        "Audit & Compliance Tracking"
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Brain,
      title: "AI/ML Model Development",
      description: "Custom machine learning models and AI solutions tailored to your business needs.",
      features: [
        "Neural Network Architecture Design",
        "Predictive Analytics Models",
        "Computer Vision Solutions",
        "Natural Language Processing",
        "Model Training & Optimization"
      ],
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    }
  ];

  return (
    <section id="services" className="relative py-0 gradient-secondary overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-accent opacity-10 rounded-3xl blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-3xl blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            My <span className="hero-text">Services</span>
          </h2>
          <div className="w-24 h-1 gradient-primary mx-auto rounded-full shadow-lg"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
            I offer comprehensive AI/ML and software development services to help businesses 
            leverage cutting-edge technology for growth and innovation.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="tech-border hover-lift hover-glow hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300 ease-out h-full animate-fade-in-up"
                style={{animationDelay: `${index * 150}ms`}}
              >
                <CardHeader className="pb-4 relative">
                  <div className={`inline-flex p-4 rounded-xl ${service.bgColor} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-7 w-7 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
