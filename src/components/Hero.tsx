//Hero.tsx
import { Github, Linkedin, Code2, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00djJoLTJ2LTJoMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Доступен для проектов</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Nurtilek
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Alibekov
                </span>
              </h1>
              
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
                Full Stack ML Engineer
              </h2>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Создаю умные системы с помощью Deep Learning, LLM, Data Science и Data Engineering. 
              Основатель стартапа <span className="font-semibold text-purple-400">AITilchi</span> — морфологического анализатора 
              кыргызского языка с точностью 90%+.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/50 group"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Связаться
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <div className="flex gap-3 justify-center">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-700 bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white backdrop-blur-sm transition-all hover:scale-105"
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
                  variant="outline" 
                  className="border-gray-700 bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white backdrop-blur-sm transition-all hover:scale-105"
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
                  variant="outline" 
                  className="border-gray-700 bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white backdrop-blur-sm transition-all hover:scale-105"
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
          
          {/* Right side - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-1 bg-slate-900 rounded-full overflow-hidden">
                  <img 
                    src="/me.jpg" 
                    alt="Nurtilek Alibekov"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              {/* <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30 flex items-center justify-center animate-bounce-slow">
                <Code2 className="w-10 h-10 text-purple-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center animate-bounce-slow animation-delay-1000">
                <Sparkles className="w-10 h-10 text-cyan-400" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;