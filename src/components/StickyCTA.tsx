import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  // Faz o botão aparecer só depois que o cliente rolar um pouco a página
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleCTAClick = () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.fbq) {
      // @ts-ignore
      window.fbq('track', 'Contact', {
        content_name: 'Sticky CTA - Pack 10 Vídeos R$ 1240',
        currency: 'BRL',
        value: 1240.00
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 z-50 flex justify-center pointer-events-none md:bottom-6 md:p-0"
        >
          <motion.a
            onClick={handleCTAClick}
            href="https://wa.me/5511934354900?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20pacote%20de%2010%20v%C3%ADdeos%20por%201240!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-4 md:px-8 rounded-full text-base md:text-lg font-bold hover:bg-primary-hover transition-colors shadow-2xl shadow-primary/40 cursor-pointer pointer-events-auto w-full max-w-[400px] md:w-auto md:max-w-none"
          >
            <MessageCircle className="w-6 h-6" />
            Garantir 10 Vídeos por R$ 1.240
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
