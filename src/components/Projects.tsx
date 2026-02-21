"use client";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "WillTechCod Portfolio",
    description: "Portfólio de alta performance desenvolvido com React.js, Tailwind CSS. Focado em UX/UI moderno e animações fluidas.",
    githubUrl: "https://github.com/willtechcod/site.portfolio",
    deployUrl: "https://willtechcod.com",
    tags: ["React.js", "Node.js", "Tailwind", "Nodemailer", "Express", "Cors"],
    imageUrl: "https://i.imgur.com/hE3ELVT.gif",
    stars: 5
  },
  {
    title: "Sistema de Pedidos",
    description: "uma hamburgueria com seu cardápio digital onde é vinculado ao whatsApp para finalizar o pedido com os dados de entrega",
    githubUrl: "https://github.com/willtechcod/Cardapio-Digital",
    deployUrl: "https://cardapio-digital-rho.vercel.app/",
    tags: ["Html", "CSS", "JavaScript"],
    imageUrl: "https://raw.githubusercontent.com/willtechcod/Cardapio-Digital/refs/heads/main/.github/cardapio.gif",
    stars: 12
  },
  {
    title: "Barber-Pró",
    description: "Sistema de barbeiro profissional, com assinatura mensal onde no modelo pró você tem mais funcões de agendamentos e mais modelos de serviços.",
    githubUrl: "https://github.com/willtechcod/barberpro",
    deployUrl: "https://barberpro.vercel.app/login",
    tags: ["React.js", "Stripe", "Chakra-UI", "PostgreSQL", "Prisma", "Node.js", "Express"],
    imageUrl: "https://raw.githubusercontent.com/willtechcod/barberpro/main/.GitHub/BarberPro.gif",
    stars: 20
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-mono text-reactBlue mb-4"
        >
          Projetos em Destaque
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 max-w-2xl mx-auto"
        >
          Uma seleção dos meus trabalhos mais recentes, focados em escalabilidade, 
          código limpo e a melhor experiência para o usuário final.
        </motion.p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}