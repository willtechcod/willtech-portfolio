"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Freelance / Projetos Full Stack",
    role: "Desenvolvedor Full Stack",
    period: "2023 — Presente",
    description: "Desenvolvimento de aplicações web ponta a ponta utilizando React, Next.js e Node.js. Foco em arquitetura escalável e experiência do usuário.",
    skills: ["React", "Node.js", "TypeScript", "AWS"]
  },
  {
    company: "Sistemas de Gestão (ERP)",
    role: "Analista de Desenvolvimento",
    period: "2021 — 2023",
    description: "Atuação no desenvolvimento de módulos para ERP, otimizando processos de negócio, fluxos financeiros e integração de dados complexos.",
    skills: ["SQL", "Logic", "ERPs", "Backend"]
  },
  {
    company: "E-commerce & Digital Solutions",
    role: "Web Developer",
    period: "2020 — 2021",
    description: "Manutenção e criação de lojas virtuais, com foco em performance de carregamento e integração com APIs de pagamento.",
    skills: ["JavaScript", "APIs", "UI Design"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-mono text-reactBlue mb-16 flex items-center gap-4">
        <span className="text-foreground/20 text-xl"></span> Experiência Profissional
      </h2>

      <div className="relative border-l border-white/10 ml-4 md:ml-8">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-12 ml-8 relative"
          >
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-background border-2 border-reactBlue shadow-[0_0_10px_#61DAFB]" />
            
            <span className="text-reactBlue font-mono text-sm mb-1 block">
              {exp.period}
            </span>
            <h3 className="text-xl font-bold text-white">
              {exp.role} <span className="text-reactBlue/80">@ {exp.company}</span>
            </h3>
            <p className="text-foreground/70 mt-4 leading-relaxed max-w-2xl">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map(skill => (
                <span key={skill} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-reactBlue/10 text-reactBlue border border-reactBlue/20 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}