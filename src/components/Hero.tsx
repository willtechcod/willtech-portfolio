"use client";
import { motion } from "framer-motion";
import { Terminal, ChevronRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-reactBlue/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="h-[1px] w-8 bg-reactBlue" />
          <span className="text-reactBlue font-mono text-sm tracking-widest uppercase">
            Desenvolvedor Full Stack
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Construindo o futuro com <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-reactBlue to-white">
            código escalável.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-foreground/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Olá, eu sou o <span className="text-white font-semibold">William</span>. 
          Especializado em transformar ideias complexas em aplicações web de alta performance 
          utilizando o ecossistema <span className="text-reactBlue">React</span> e <span className="text-nodeGreen">Node.js</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a 
            href="#projects" 
            className="group px-8 py-4 bg-reactBlue text-background font-bold rounded-xl flex items-center gap-2 hover:bg-[#dcf0f5] transition-all"
          >
            Ver Projetos
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <button 
  className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all backdrop-blur-sm"
  onClick={() => window.open('/projects/cv-william.pdf', '_blank')}
>
  Download CV
  <Download size={18} />
</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 p-4 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-foreground/40 flex items-center gap-4"
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
          </div>
          <div className="flex gap-2">
            <span className="text-nodeGreen">➜</span>
            <span className="text-reactBlue">~</span>
            <span>npx create-next-app willtech-code --latest</span>
          </div>
          <span className="animate-pulse">_</span>
        </motion.div>
      </div>
    </section>
  );
}