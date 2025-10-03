import { Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            Nurtilek Alibekov
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90 mb-8">
            Full Stack ML Engineer
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Создаю умные системы с помощью Deep Learning, LLM, Data Science и Data Engineering. 
            Основатель стартапа <span className="font-semibold text-white">AITilchi</span> — морфологического анализатора 
            кыргызского языка с точностью 90%+, превосходящего существующие решения.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 shadow-glow"
              asChild
            >
              <a href="#contact">Связаться</a>
            </Button>
            
            <div className="flex gap-3">
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/10 border border-white/20"
                asChild
              >
                <a 
                  href="https://github.com/AlibekovNurtilek" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/10 border border-white/20"
                asChild
              >
                <a 
                  href="https://kg.linkedin.com/in/nurtilek-alibekov-513b08270" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/10 border border-white/20"
                asChild
              >
                <a 
                  href="https://leetcode.com/u/nurti15032003/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                >
                  <Code2 className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;