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
    company: "Конфиденциально",
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
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">
            Опыт работы
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center">
            От backend разработки до создания собственного ML стартапа
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.company}
                className="p-6 bg-card border-border hover:shadow-card transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-primary font-medium mb-3">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">▸</span>
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