import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mainMetrics = [
  { name: "UPOS", OpenAI: 73.82, Gemini: 82.89, Anthropic: 76.90, DeepSeek: 82.07, AITilchi: 92.07 },
  { name: "XPOS", OpenAI: 72.88, Gemini: 81.62, Anthropic: 68.87, DeepSeek: 80.89, AITilchi: 91.84 },
  { name: "UFeats", OpenAI: 61.24, Gemini: 75.29, Anthropic: 68.54, DeepSeek: 75.02, AITilchi: 89.01 },
  { name: "Lemmas", OpenAI: 82.31, Gemini: 87.83, Anthropic: 87.09, DeepSeek: 86.52, AITilchi: 90.53 },
  { name: "AllTags", OpenAI: 67.19, Gemini: 78.85, Anthropic: 70.76, DeepSeek: 78.19, AITilchi: 90.48 },
];

const ModelComparison = () => {
  return (
    <section id="comparison" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-center">
            Сравнение моделей
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            AITilchi превосходит ведущие LLM модели в морфологическом анализе кыргызского языка
          </p>
          
          <div className="mb-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-3">Ключевые метрики:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
              <li><strong className="text-foreground">UPOS</strong> — универсальные части речи</li>
              <li><strong className="text-foreground">XPOS</strong> — части речи специфичные для кыргызского</li>
              <li><strong className="text-foreground">UFeats</strong> — грамматические свойства</li>
              <li><strong className="text-foreground">Lemmas</strong> — лемматизация (корни слов)</li>
              <li><strong className="text-foreground">AllTags</strong> — общая точность по всем параметрам</li>
            </ul>
          </div>

          <Card className="p-6 bg-card border-border mb-8">
            <h3 className="text-2xl font-semibold text-card-foreground mb-6 text-center">
              Основные метрики производительности
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={mainMetrics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="OpenAI" fill="#10a37f" />
                <Bar dataKey="Gemini" fill="#8e44ad" />
                <Bar dataKey="Anthropic" fill="#e67e22" />
                <Bar dataKey="DeepSeek" fill="#3498db" />
                <Bar dataKey="AITilchi" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/10 border border-primary rounded-lg">
              <span className="text-3xl font-bold text-primary">90.48%</span>
              <span className="text-muted-foreground">Средняя точность AITilchi по всем тегам</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelComparison;