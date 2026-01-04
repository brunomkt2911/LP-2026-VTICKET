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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/5511934354900?text=Ol%C3%A1!%20Estou%20no%20site%20e%20quero%20tirar%20uma%20d%C3%BAvida."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center cursor-pointer hover:bg-green-400 transition-colors"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
