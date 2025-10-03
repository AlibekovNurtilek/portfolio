import { Brain, Database, Mic, Code, LineChart, Server, Globe, Boxes } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "Deep Learning", icon: Brain, desc: "PyTorch, TensorFlow" },
  { name: "LLM & NLP", icon: Brain, desc: "Морфоанализ, Text Preprocessing" },
  { name: "Speech Processing", icon: Mic, desc: "TTS, ASR, Voice Cloning" },
  { name: "Data Engineering", icon: Database, desc: "Пайплайны, Big Data" },
  { name: "Data Science & ML", icon: LineChart, desc: "Статистика, ML алгоритмы" },
  { name: "Backend Development", icon: Server, desc: "ASP.NET Core, FastAPI" },
  { name: "Frontend Basics", icon: Globe, desc: "React" },
  { name: "DevOps/MLOps", icon: Boxes, desc: "CI/CD, Docker, Kubernetes" }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">
            Навыки
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Полный стек технологий для создания интеллектуальных систем
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="p-6 bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;