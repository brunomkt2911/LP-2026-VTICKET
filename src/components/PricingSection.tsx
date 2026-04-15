import { motion } from 'framer-motion';
import { Check, Sparkles, AlertCircle } from 'lucide-react';

export default function PricingSection() {
  const features = [
    '10 vídeos profissionais',
    'Edição completa com cortes dinâmicos', 
    'Legendas animadas e trilha sonora',
    'Entrega ágil em até 5 dias úteis',
    '1 rodada de ajustes incluída',
    'Formato otimizado 9:16 (Reels/TikTok/Shorts)',
  ];

  // Configuração do Pixel Atualizada para R$ 1240
  const handlePurchaseClick = () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.fbq) {
      // @ts-ignore
      window.fbq('track', 'Contact', {
        content_name: 'Botão Preço - Pack 10 Vídeos R$ 1240',
        currency: 'BRL',
        value: 1240.00
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Investimento inteligente
          </h2>
          <p className="text-xl text-gray-300">
            Qualidade premium, volume constante e orçamento otimizado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary/10 via-transparent to-primary/5 p-8 md:p-12 rounded-2xl border-2 border-primary/50 shadow-2xl shadow-primary/10"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-secondary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Pack Essencial 10 Vídeos
            </span>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-400 text-2xl line-through">R$ 1.597</span>
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg shadow-secondary/20">
                ECONOMIZE R$ 357
              </span>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">
              R$ 1.240<span className="text-2xl text-gray-400">,00</span>
            </div>
            <p className="text-gray-300 text-lg mb-4">
              ou <span className="text-primary font-bold">12x de R$ 103,33</span>
            </p>
            <p className="text-secondary font-semibold text-lg">
              Apenas R$ 124,00 por vídeo
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-center gap-3"
              >
                <div className="bg-primary rounded-full p-1 flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-200 text-lg">{feature}</span>
              </motion.li>
            ))}
          </ul>
            
          <div className="flex items-center justify-center gap-2 mb-4 text-secondary font-medium bg-secondary/10 py-2 rounded-lg border border-secondary/20">
              <AlertCircle className="w-5 h-5" />
              <span>Disponibilidade limitada: Apenas 2 vagas semanais</span>
          </div>

          <motion.a
            onClick={handlePurchaseClick}
            href="https://wa.me/5511934354900?text=Ol%C3%A1!%20Vi%20a%20oferta%20do%20Pack%20de%2010%20v%C3%ADdeos%20por%201240%20e%20quero%20aproveitar."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full bg-primary text-white py-5 rounded-xl text-xl font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30 hover:shadow-primary/50 text-center cursor-pointer"
          >
            Quero garantir minha vaga
          </motion.a>

          <p className="text-center text-gray-400 text-sm mt-6">
            🔒 Pagamento seguro e entrega garantida
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 bg-gray-800/50 p-6 rounded-xl border border-gray-700 text-center"
        >
          <p className="text-primary font-semibold text-lg mb-2">
            ✓ Garantia Owl Rec
          </p>
          <p className="text-gray-300">
            Garantia Owl Rec: Incluímos 1 rodada completa de ajustes para o refino final do seu material.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
