import { Mail, Github, Linkedin, Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Давайте работать вместе
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Открыт к интересным проектам и сотрудничеству в области ML и Data Science
          </p>
          
          <Card className="p-8 bg-card border-border mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:nurtilek.alibekov@example.com"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-card-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">nurtilek.alibekov@example.com</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/AlibekovNurtilek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-card-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground">@AlibekovNurtilek</p>
                </div>
              </a>
              
              <a 
                href="https://kg.linkedin.com/in/nurtilek-alibekov-513b08270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-card-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Nurtilek Alibekov</p>
                </div>
              </a>
              
              <a 
                href="https://leetcode.com/u/nurti15032003/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-card-foreground">LeetCode</p>
                  <p className="text-sm text-muted-foreground">200+ задач решено</p>
                </div>
              </a>
            </div>
            
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow"
            >
              <Download className="w-5 h-5 mr-2" />
              Скачать резюме
            </Button>
          </Card>
          
          <p className="text-muted-foreground">
            © 2025 Nurtilek Alibekov. Все права защищены. Сделано с любовью к ML & Data Science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;