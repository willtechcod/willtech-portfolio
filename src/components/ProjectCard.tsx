"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  githubUrl: string;
  deployUrl?: string;
  tags: string[];
  stars?: number;
  imageUrl: string;
}

export default function ProjectCard({ 
  title, description, githubUrl, deployUrl, tags, stars, imageUrl 
}: ProjectProps) {
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full group transition-all duration-300"
    >
      {/* Container da Imagem */}
      <div className="relative h-48 w-full overflow-hidden border-b border-white/5">
        <img 
          src={imageUrl} 
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          onError={(e) => {
            // Fallback caso a imagem do GitHub falhe
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-reactBlue transition-colors">
            {title}
          </h3>
          <div className="flex gap-3 text-foreground/40">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-reactBlue transition-colors">
              <Github size={18} />
            </a>
            {deployUrl && (
              <a href={deployUrl} target="_blank" rel="noopener noreferrer" className="hover:text-reactBlue transition-colors">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] font-mono py-1 px-2 rounded bg-reactBlue/10 text-reactBlue border border-reactBlue/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {stars !== undefined && (
            <div className="flex items-center gap-1 text-xs text-foreground/30 font-mono">
              <Star size={12} className="text-yellow-500/50" />
              <span>{stars} github stars</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}