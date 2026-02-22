"use client";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { p } from "framer-motion/client";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || "xpqjrlvq");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/5 border border-reactBlue/20 p-12 rounded-3xl backdrop-blur-md"
        >
          <div className="flex justify-center mb-6 text-reactBlue">
            <CheckCircle size={64} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Mensagem Enviada!</h2>
          <p className="text-foreground/60 mb-8">
            Obrigado pelo contacto, Responderei o mais brevemente possível.
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="text-reactBlue font-mono border border-reactBlue/30 px-6 py-2 rounded-full hover:bg-reactBlue/10 transition-all"
          >
            Enviar nova mensagem
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-mono text-reactBlue mb-4">Contacto</h2>
        <p className="text-foreground/60">Interessado em escalar o seu projeto ou uma nova oportunidade?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
<div className="space-y-8">
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-6 group"
  >
    <div className="w-12 h-12 rounded-lg bg-reactBlue/10 flex items-center justify-center text-reactBlue group-hover:bg-reactBlue group-hover:text-background transition-all duration-300">
      <Mail size={24} />
    </div>
    <div>
      <p className="text-xs font-mono text-reactBlue uppercase tracking-widest">E-mail</p>
      <p className="text-lg font-medium text-foreground/80">contato@willtechcode.com.br</p>
    </div>
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.1 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-12 h-12 rounded-lg bg-reactBlue/10 flex items-center justify-center text-reactBlue group-hover:bg-reactBlue group-hover:text-background transition-all duration-300">
      <Phone size={24} />
    </div>
    <div>
      <p className="text-xs font-mono text-reactBlue uppercase tracking-widest">WhatsApp</p>
      <p className="text-lg font-medium text-foreground/80">+55 (47) 99164-7104</p>
    </div>
  </motion.div>
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="flex items-center gap-6 group"
  >
    <div className="w-12 h-12 rounded-lg bg-reactBlue/10 flex items-center justify-center text-reactBlue group-hover:bg-reactBlue group-hover:text-background transition-all duration-300">
      <MapPin size={24} />
    </div>
    <div>
      <p className="text-xs font-mono text-reactBlue uppercase tracking-widest">Localização</p>
      <p className="text-lg font-medium text-foreground/80">Joinville - SC, Brasil</p>
    </div>
  </motion.div>
</div>
        </div>

        {/* Formulário com useForm */}
        <motion.form 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl space-y-5"
        >
          <div>
            <input 
              id="name"
              type="text" 
              name="name" 
              placeholder="Seu Nome" 
              required
              className="w-full bg-background/50 border border-white/10 rounded-xl p-4 focus:border-reactBlue outline-none transition-all"
            />
          </div>
          
          <div>
            <input 
              id="email"
              type="email" 
              name="email" 
              placeholder="Seu E-mail" 
              required
              className="w-full bg-background/50 border border-white/10 rounded-xl p-4 focus:border-reactBlue outline-none transition-all"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
          </div>
          
          <div>
            <textarea 
              id="message"
              name="message" 
              rows={4} 
              placeholder="Sua Mensagem" 
              required
              className="w-full bg-background/50 border border-white/10 rounded-xl p-4 focus:border-reactBlue outline-none transition-all resize-none"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
          </div>
          
          <motion.button 
  type="submit"
  disabled={state.submitting}
  whileHover={{ scale: 1.02, backgroundColor: "#ffffff" }}
  whileTap={{ scale: 0.98 }}
  className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 font-bold transition-all duration-300 ${
    state.submitting 
      ? "bg-white/20 text-white/50 cursor-not-allowed" 
      : "bg-white text-background hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
  }`}
>
  <span className="uppercase tracking-widest text-sm text-black">
    {state.submitting ? "Enviando..." : "Enviar Mensagem"}
  </span>
  <Send size={20} className="text-black" />
</motion.button>
        </motion.form>
      </div>
    </section>
  );
}