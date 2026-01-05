import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';
import LegalModal from './LegalModal';     
import CookieConsent from './CookieConsent'; 

export default function Footer() {
  // Estado para controlar o Modal
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms'>('terms');

  // Função para abrir o modal
  const openLegal = (type: 'privacy' | 'terms') => {
    setLegalType(type);
    setLegalOpen(true);
  };

  return (
    <>
      <footer className="py-16 px-4 bg-gray-900/80 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para ter presença constante nas redes?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato e comece a construir sua audiência com vídeos que vendem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://wa.me/5511934354900?text=Quero%20saber%20mais%20sobre%20o%20pacote%20de%2015%20v%C3%ADdeos!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // MUDANÇA AQUI: bg-primary (Azul) e text-white
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.a>

              <motion.a
                href="mailto:contato@owlcompany.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // MUDANÇA AQUI: hover da borda com a cor primária
                className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold border border-gray-700 hover:border-primary/50 transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                Email
              </motion.a>
            </div>
          </motion.div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Owl Rec. Todos os direitos reservados.
              </p>

              <div className="flex gap-6">
                <button
                  onClick={() => openLegal('terms')}
                  // MUDANÇA AQUI: hover:text-secondary (Laranja) para destaque nos detalhes
                  className="text-gray-400 hover:text-secondary transition-colors text-sm cursor-pointer bg-transparent border-none"
                >
                  Termos de Uso
                </button>
                <button
                  onClick={() => openLegal('privacy')}
                  // MUDANÇA AQUI: hover:text-secondary (Laranja)
                  className="text-gray-400 hover:text-secondary transition-colors text-sm cursor-pointer bg-transparent border-none"
                >
                  Política de Privacidade
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL JURÍDICO */}
      <LegalModal 
        isOpen={legalOpen} 
        onClose={() => setLegalOpen(false)} 
        type={legalType} 
      />

      {/* AVISO DE COOKIES */}
      <CookieConsent 
        onOpenPrivacy={() => openLegal('privacy')}
      />
    </>
  );
}
