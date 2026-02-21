"use client"; 
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  const whatsappUrl = "https://wa.me/5547991647104";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center
                 hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
    >
      <MessageCircle size={28} />
      
      {/* Efeito de pulso CSS puro */}
      <style jsx>{`
        .group::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #25D366;
          border-radius: 50%;
          z-index: -1;
          animation: pulse-whatsapp 2s infinite cubic-bezier(0.66, 0, 0, 1);
        }

        @keyframes pulse-whatsapp {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </motion.a>
  );
}