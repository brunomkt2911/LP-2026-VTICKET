import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Só mostra o botão depois que o usuário rolar 300px (passou da Hero section)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Dispara o Pixel antes de abrir o WhatsApp
    // @ts-ignore
    if (typeof window !== 'undefined' && window.fbq) {
      // @ts-ignore
      window.fbq('track', 'Contact', {
        content_name: 'Botão Flutuante (Sticky)',
        currency: 'BRL',
        value: 1140.00 // Valor simbólico do lead para o Facebook otimizar
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
        >
            <motion.a
              href="https://wa.me/5511934354900?text=Ol%C3%A1!%20Estou%20no%20site%20e%20quero%20tirar%20uma%20d%C3%BAvida."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              // AQUI ESTÁ A ANIMAÇÃO "RADAR" PULSANTE
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 rgba(14, 165, 233, 0.7)", // Cor Primary (Azul) concentrada
                  "0 0 0 20px rgba(14, 165, 233, 0)", // Onda se expandindo e sumindo
                  "0 0 0 0 rgba(14, 165, 233, 0)"
                ]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop" 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              // MUDANÇA DE COR: bg-primary (Azul) em vez de verde
              className="flex items-center gap-2 bg-primary text-white p-4 md:px-6 md:py-4 rounded-full shadow-lg cursor-pointer hover:bg-primary-hover transition-colors font-bold"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              {/* Texto aparece só em telas maiores para converter mais */}
              <span className="hidden md:inline">Quero Vender Mais</span>
            </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
