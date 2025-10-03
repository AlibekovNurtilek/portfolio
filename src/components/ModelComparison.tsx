//ModelComparison.tsx
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
    <section id="comparison" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center">
            Сравнение моделей
          </h2>
          <p className="text-lg text-gray-400 mb-8 text-center max-w-3xl mx-auto">
            AITilchi превосходит ведущие LLM модели в морфологическом анализе кыргызского языка
          </p>
          
          <div className="mb-8 p-6 bg-slate-900/60 backdrop-blur border border-slate-700/60 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Ключевые метрики:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400">
              <li><strong className="text-white">UPOS</strong> — универсальные части речи</li>
              <li><strong className="text-white">XPOS</strong> — части речи специфичные для кыргызского</li>
              <li><strong className="text-white">UFeats</strong> — грамматические свойства</li>
              <li><strong className="text-white">Lemmas</strong> — лемматизация (корни слов)</li>
              <li><strong className="text-white">AllTags</strong> — общая точность по всем параметрам</li>
            </ul>
          </div>

          <Card className="p-6 bg-slate-900/60 backdrop-blur border border-slate-700/60 hover:border-purple-400/50 transition-colors mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Основные метрики производительности
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={mainMetrics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} stroke="#94a3b8" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis domain={[0, 100]} stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  itemStyle={{ color: 'hsl(var(--foreground))' }}
                />
                <Legend wrapperStyle={{ color: '#e5e7eb' }} />
                <Bar dataKey="OpenAI" fill="#22d3ee" />
                <Bar dataKey="Gemini" fill="#a78bfa" />
                <Bar dataKey="Anthropic" fill="#f59e0b" />
                <Bar dataKey="DeepSeek" fill="#60a5fa" />
                <Bar dataKey="AITilchi" fill="#34d399" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-purple-500/15 border border-purple-500/30 rounded-lg backdrop-blur">
              <span className="text-3xl font-bold text-purple-300">90.48%</span>
              <span className="text-gray-400">Средняя точность AITilchi по всем тегам</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelComparison;