"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Rocket } from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: <Code2 size={20} />, color: "text-reactBlue" },
  { name: "Node.js / TypeScript", icon: <Cpu size={20} />, color: "text-nodeGreen" },
  { name: "Cloud & DevOps", icon: <Globe size={20} />, color: "text-blue-400" },
  { name: "UI/UX Design", icon: <Rocket size={20} />, color: "text-purple-400" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mx-auto md:mx-0 w-full max-w-[400px]"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-3 backdrop-blur-sm shadow-2xl">
           
            <img 
              src="https://avatars.githubusercontent.com/u/74944280?v=4"
              alt="William Dev"
              className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-[1.01] hover:scale-100"
            />
          </div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-reactBlue/30 rounded-tl-3xl -z-10"
          />
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-reactBlue/10 rounded-2xl -z-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="space-y-2">
            <span className="text-reactBlue font-mono text-sm tracking-[0.2em] block mb-2">INTRODUÇÃO</span>
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Transformando café em <span className="text-reactBlue">sistemas robustos</span>.
            </h2>
          </div>
          
          <div className="space-y-4 text-foreground/70 leading-relaxed text-lg max-w-prose">
            <p>
              Sou um desenvolvedor focado no ecossistema <span className="text-white font-medium underline decoration-reactBlue/30">JavaScript/TypeScript</span>. 
              Minha missão é construir softwares que não apenas funcionem, mas que sejam fáceis de manter e escaláveis.
            </p>
            <p>
              Com experiência em arquiteturas modernas, foco no <span className="text-white">Next.js</span> para entregar o melhor SEO e performance, 
              garantindo que cada pixel e cada linha de código tenha um propósito claro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all group cursor-default"
              >
                <div className={`p-2 rounded-lg bg-background shadow-inner group-hover:shadow-reactBlue/20 transition-all ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-foreground/90">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}