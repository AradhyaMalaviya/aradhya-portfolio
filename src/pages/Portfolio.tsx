import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { Code2, Mail, ExternalLink, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Portfolio = () => {
  const skills = [
    { name: "Java", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "C++", level: "Intermediate" },
    { name: "Web Development", level: "Learning" },
    { name: "Problem Solving", level: "Strong" },
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-hero-bg overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.05)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Aradhya Malaviya
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Software Developer & BCA Student
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate about technology with expertise in Java, Python, and C++
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact} 
                variant="hero"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors shadow-soft"
                asChild
              >
                <a href="https://github.com/AradhyaMalaviya" target="_blank" rel="noopener noreferrer">
                  <Code2 className="w-5 h-5 mr-2" />
                  View Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-hero-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              About Me
            </h2>
            <Card className="shadow-medium border-0 animate-slide-in">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  Hi, I'm a 3rd-year BCA student passionate about technology. My main skills are in Java, Python, and C++. 
                  I have hands-on experience from class projects and hackathons. I'm a quick learner, a good problem-solver, 
                  and looking for a chance to work on real-world projects. I'm eager to find an opportunity where I can 
                  contribute to a team and build my skills. Let's connect!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-hero-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="shadow-soft border-0 hover:shadow-medium transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-skill-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{skill.name}</h3>
                  <p className="text-muted-foreground text-sm">{skill.level}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Let's Work Together
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
            <div className="flex-1">
              <div className="animate-slide-in">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or simply connect with fellow developers. Feel free to reach out!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-skill-bg rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:aaradhya.malaviya2005@gmail.com"
                        className="text-primary hover:underline"
                      >
                        aaradhya.malaviya2005@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-skill-bg rounded-full flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Connect</p>
                      <p className="text-muted-foreground text-sm">Available for opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="animate-fade-in">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground/5 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Aradhya Malaviya. Built with passion and dedication.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;