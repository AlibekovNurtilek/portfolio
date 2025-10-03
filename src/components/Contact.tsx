//Contact.tsx
import { Mail, Github, Linkedin, Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-36 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Давайте работать вместе
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Открыт к интересным проектам и сотрудничеству в области ML и Data Science
          </p>
          
          <Card className="p-8 bg-slate-900/60 backdrop-blur border border-slate-700/60 hover:border-purple-400/50 transition-colors mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a 
                href="mailto:nurtilek.alibekov@example.com"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-slate-800/60 transition-colors group border border-transparent"
              >
                <div className="w-12 h-12 bg-purple-500/15 rounded-lg flex items-center justify-center group-hover:bg-purple-500/25 transition-colors border border-purple-500/30">
                  <Mail className="w-6 h-6 text-purple-300" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">Email</p>
                  <p className="text-sm text-gray-400">nurtilek.alibekov@example.com</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/AlibekovNurtilek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-slate-800/60 transition-colors group border border-transparent"
              >
                <div className="w-12 h-12 bg-purple-500/15 rounded-lg flex items-center justify-center group-hover:bg-purple-500/25 transition-colors border border-purple-500/30">
                  <Github className="w-6 h-6 text-purple-300" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">GitHub</p>
                  <p className="text-sm text-gray-400">@AlibekovNurtilek</p>
                </div>
              </a>
              
              <a 
                href="https://kg.linkedin.com/in/nurtilek-alibekov-513b08270"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-slate-800/60 transition-colors group border border-transparent"
              >
                <div className="w-12 h-12 bg-purple-500/15 rounded-lg flex items-center justify-center group-hover:bg-purple-500/25 transition-colors border border-purple-500/30">
                  <Linkedin className="w-6 h-6 text-purple-300" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">LinkedIn</p>
                  <p className="text-sm text-gray-400">Nurtilek Alibekov</p>
                </div>
              </a>
              
              <a 
                href="https://leetcode.com/u/nurti15032003/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-slate-800/60 transition-colors group border border-transparent"
              >
                <div className="w-12 h-12 bg-purple-500/15 rounded-lg flex items-center justify-center group-hover:bg-purple-500/25 transition-colors border border-purple-500/30">
                  <Code2 className="w-6 h-6 text-purple-300" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-white">LeetCode</p>
                  <p className="text-sm text-gray-400">200+ задач решено</p>
                </div>
              </a>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg shadow-purple-500/50"
            >
              <Download className="w-5 h-5 mr-2" />
              Скачать резюме
            </Button>
          </Card>
          
          <p className="text-gray-500">
            © 2025 Nurtilek Alibekov. Все права защищены. Сделано с любовью к ML & Data Science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;