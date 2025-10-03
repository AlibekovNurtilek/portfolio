//Projects.tsx
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
    url: "https://aitilchi.home.kg",
    tags: ["Startup", "NLP", "Morphology"],
    featured: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-4">
              <span className="text-sm text-purple-300">Мои работы</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Проекты
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Реальные продукты в production с тысячами пользователей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className={`p-6 bg-slate-900/60 backdrop-blur border ${
                  project.featured ? 'border-purple-500/40 md:col-span-2 shadow-[0_0_30px_rgba(168,85,247,0.15)]' : 'border-slate-700/60'
                } hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-3 py-1 bg-purple-500/15 text-purple-300 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-slate-800 text-gray-300 text-xs rounded-full border border-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto group border-gray-700 bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white backdrop-blur-sm transition-all"
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