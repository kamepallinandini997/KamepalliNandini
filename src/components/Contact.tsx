import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageSquare,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_wws2neg",
        "template_sog1goh",
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "TxRRSqd1E1QkdfHAD"
      );

      toast({
        title: "Message sent successfully! ✨",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (err) {
      const subject = encodeURIComponent("Contact from Portfolio Website");
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      const mailtoLink = `mailto:kamepallinandini218@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, "_blank");

      toast({
        title: "Opening email client 📧",
        description: "Please send your message through your email client.",
      });

      console.error("EmailJS Error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kamepallinandini218@gmail.com",
      href: "mailto:kamepallinandini218@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana",
      href: "https://www.google.com/maps/place/Zennial+Pro+Private+Limited/@17.4346446,78.3741907,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb93fcc1415fdd:0xe751393c8c5e06b5!8m2!3d17.4346446!4d78.3767656!16s%2Fg%2F11lf08s6vx?entry=ttu&g_ep=EgoyMDI1MTAyOC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nandini-kamepalli",
      href: "https://www.linkedin.com/in/nandini-kamepalli-6b1326215/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/kamepallinandini997",
      href: "https://github.com/kamepallinandini997?tab=repositories",
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-16 relative overflow-hidden gradient-secondary"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-accent opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-7 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-4">
            Let's <span className="hero-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-black mt-4 max-w-2xl mx-auto">
            Ready to discuss your next project or explore collaboration
            opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="animate-fade-in-up space-y-5">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={info.label}
                  className="tech-border hover-lift cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <a
                      href={info.href}
                      className="flex items-center space-x-4 text-left w-full"
                      target={
                        info.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div className="p-3 rounded-xl bg-accent/50">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">
                          {info.label}
                        </h4>
                        <p className="text-muted-foreground break-all">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="tech-border hover-lift group relative overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-xl relative z-10 text-black">
                  <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 p-5">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {["name", "email", "message"].map((fieldName) => (
                      <FormField
                        key={fieldName}
                        control={form.control}
                        name={fieldName as keyof ContactFormData}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium capitalize text-black">
                              {fieldName} *
                            </FormLabel>
                            <FormControl>
                              {fieldName === "message" ? (
                                <Textarea
                                  placeholder={`Your ${fieldName}`}
                                  className="min-h-[90px] resize-none text-sm"
                                  {...field}
                                />
                              ) : (
                                <Input
                                  placeholder={`Your ${fieldName}`}
                                  className="h-10 text-sm"
                                  {...field}
                                />
                              )}
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                    ))}

                    <Button
                      type="submit"
                      size="sm"
                      className="w-full gradient-primary hover:opacity-90 h-10 text-base font-medium relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center relative z-10">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center relative z-10">
                          <Send className="mr-2 h-4 w-4 text-white" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;