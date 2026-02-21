"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
   <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-mono text-reactBlue mb-4">Contato</h2>
        <p className="text-foreground/60">Interessado em escalar seu projeto ou uma nova oportunidade?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
       
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-lg bg-reactBlue/10 flex items-center justify-center text-reactBlue group-hover:bg-reactBlue group-hover:text-background transition-all">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs font-mono text-reactBlue">E-mail</p>
              <p className="text-lg">contato@willtechcode.com.br</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-lg bg-reactBlue/10 flex items-center justify-center text-reactBlue group-hover:bg-reactBlue group-hover:text-background transition-all">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs font-mono text-reactBlue">WhatsApp</p>
              <p className="text-lg">+55 (47) 99164-7104</p>
            </div>
          </div>

          <div className="flex items-center gap-6 group">
            <div className="w-12 h-12 rounded-lg bg-reactBlue/10 flex items-center justify-center text-reactBlue group-hover:bg-reactBlue group-hover:text-background transition-all">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs font-mono text-reactBlue">Localização</p>
              <p className="text-lg">Santa Catarina, Brasil</p>
            </div>
          </div>
        </motion.div>
<motion.form 
  initial={{ opacity: 0, x: 20 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  action="https://formspree.io/f/xpqjrlvq"
  method="POST"
  className="bg-white/3 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl space-y-5"
>
  <input 
    type="text" 
    name="name" 
    placeholder="Seu Nome" 
    required
    className="w-full bg-background/50 border border-white/10 rounded-2xl p-4 focus:border-reactBlue outline-none transition-all text-base placeholder:text-white/30"
  />
  
  <input 
    type="email" 
    name="email" 
    placeholder="Seu E-mail" 
    required
    className="w-full bg-background/50 border border-white/10 rounded-2xl p-4 focus:border-reactBlue outline-none transition-all text-base placeholder:text-white/30"
  />
  
  <textarea 
    name="message" 
    rows={4} 
    placeholder="Sua Mensagem" 
    required
    className="w-full bg-background/50 border border-white/10 rounded-2xl p-4 focus:border-reactBlue outline-none transition-all text-base placeholder:text-white/30 resize-none"
  ></textarea>
  
  <motion.button 
    type="submit"
    whileHover={{ 
      scale: 1.02, 
      translateY: -4,
      boxShadow: "0px 0px 25px rgba(97, 218, 251, 0.4)" 
    }}
    whileTap={{ scale: 0.95 }}
    className="
      w-full relative overflow-hidden group
      py-4 rounded-2xl flex items-center justify-center gap-3 
      transition-all duration-300 font-bold
      cursor-pointer
      bg-white text-slate-900
      md:bg-reactBlue md:text-background md:hover:bg-[#dcf0f5]
    "
  >
    <div className="absolute inset-0  w-1/2 h-full bg-white/20 skew-x-[-25deg] -translate-x-full group-hover:animate-[shimmer_1s_infinite] pointer-events-none" />

    <span className="relative  z-10 uppercase tracking-widest text-sm">
      Enviar Mensagem
    </span>
    
    <Send 
      size={20} 
      className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
    />
  </motion.button>
</motion.form>
      </div>
    </section>
  );
}