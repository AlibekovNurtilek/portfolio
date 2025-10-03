import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TTS система",
    description: "Улучшение качества TTS через очистку данных и оптимизацию learning rate. Автоматизация сбора данных из YouTube.",
    url: "https://tts.aitil.kg/",
    tags: ["Deep Learning", "Speech", "PyTorch"]
  },
  {
    title: "ASR система",
    description: "Реализация автоматической системы распознавания речи с высокой точностью.",
    url: "https://asr.aitil.kg/",
    tags: ["ASR", "Deep Learning", "NLP"]
  },
  {
    title: "LLM чат",
    description: "Разработка и оптимизация собственного LLM чата с улучшенной семантической точностью.",
    url: "https://chat.aitil.kg/",
    tags: ["LLM", "NLP", "AI"]
  },
  {
    title: "Стартап AITilchi",
    description: "Морфологический анализатор для кыргызского языка, точность 90%+, превосходящий существующие решения.",
    url: "http://aitilchi.home.kg",
    tags: ["Startup", "NLP", "Morphology"],
    featured: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">
            Проекты
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Реальные продукты в production с тысячами пользователей
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`p-6 bg-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1 border animate-scale-in ${
                  project.featured ? 'border-primary md:col-span-2' : 'border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto group"
                    asChild
                  >
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Посетить проект
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;