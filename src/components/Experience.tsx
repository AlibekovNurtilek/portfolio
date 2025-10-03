//Experience.tsx
import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    period: "2023 — 2024",
    title: "Основатель и ML Engineer",
    company: "Стартап AITilchi",
    description: "Разработка морфологического анализатора для кыргызского языка. Достигнута точность 90%+, превосходящая OpenAI, Gemini, Claude и DeepSeek.",
    achievements: [
      "Создание уникальной модели с точностью 92% по UPOS",
      "Полный цикл разработки: сбор данных, обучение, деплой",
      "Data Engineering пайплайны для обработки текстов"
    ]
  },
  {
    period: "2022 — 2023",
    title: ".NET Backend Developer",
    company: "Sigma Software",
    description: "Разработка серверной части мобильного приложения для изучения английского языка.",
    achievements: [
      "Backend разработка на ASP.NET Core",
      "API интеграции и оптимизация производительности",
      "Работа в международной команде"
    ]
  },
  {
    period: "2021 — 2022",
    title: "Full Stack ML Engineer",
    company: "Ulut Soft",
    description: "Разработка и улучшение систем TTS, ASR и LLM. Автоматизация сбора данных и деплоя моделей.",
    achievements: [
      "Улучшение качества TTS через очистку данных",
      "Реализация ASR системы с высокой точностью",
      "Оптимизация LLM чата и семантической точности",
      "Настройка CI/CD, SSL, Nginx для production"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Опыт работы
          </h2>
          <p className="text-lg text-gray-400 mb-12 text-center">
            От backend разработки до создания собственного ML стартапа
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company}
                className="p-6 bg-slate-900/60 backdrop-blur border border-slate-700/60 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-500/15 rounded-lg flex items-center justify-center border border-purple-500/30">
                      <Briefcase className="w-6 h-6 text-purple-300" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-gray-400 mt-1 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-purple-300 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="text-cyan-300 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;