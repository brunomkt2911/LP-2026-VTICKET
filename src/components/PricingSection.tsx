import { motion } from 'framer-motion';
import { Check, Sparkles, AlertCircle } from 'lucide-react';

export default function PricingSection() {
  const features = [
    '15 vídeos profissionais',
    'Roteiro + Edição completa',
    'Legendas e trilha sonora',
    'Entrega ágil em até 5 dias úteis', // MANTIDO: Prazo ajustado
    '1 rodada de ajustes incluída',
    'Formato otimizado 9:16',
  ];

  // Configuração do Pixel
  const handlePurchaseClick = () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.fbq) {
      // @ts-ignore
      window.fbq('track', 'Contact', {
        content_name: 'Botão Preço - Pack R$ 1140',
        currency: 'BRL',
        value: 1140.00
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
            Qualidade de cinema, orçamento otimizado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-green-400/10 via-transparent to-green-400/5 p-8 md:p-12 rounded-2xl border-2 border-green-400/50 shadow-2xl shadow-green-400/10"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-green-400" />
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              Pack Pro 15 Vídeos
            </span>
          </div>

          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-400 text-2xl line-through">R$ 1.597</span>
              <span className="bg-green-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                ECONOMIZE R$ 457
              </span>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">
              R$ 1.140<span className="text-2xl text-gray-400">,00</span>
            </div>
            <p className="text-gray-300 text-lg mb-4">
              ou <span className="text-green-400 font-semibold">12x de R$ 95,00</span>
            </p>
            <p className="text-green-400 font-semibold text-lg">
              Apenas R$ 76,00 por vídeo
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
                <div className="bg-green-400 rounded-full p-1 flex-shrink-0">
                  <Check className="w-4 h-4 text-gray-900" />
                </div>
                <span className="text-gray-200 text-lg">{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Sessão de Escassez (MANTIDA) */}
          <div className="flex items-center justify-center gap-2 mb-4 text-orange-400 font-medium bg-orange-400/10 py-2 rounded-lg border border-orange-400/20">
             <AlertCircle className="w-5 h-5" />
             <span>Disponibilidade limitada: Apenas 2 vagas semanais</span>
          </div>

          <motion.a
            onClick={handlePurchaseClick}
            href="https://wa.me/5511934354900?text=Ol%C3%A1!%20Vi%20a%20oferta%20do%20Pack%20de%2015%20v%C3%ADdeos%20por%201140%20e%20quero%20aproveitar."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full bg-green-400 text-gray-900 py-5 rounded-xl text-xl font-bold hover:bg-green-300 transition-colors shadow-lg shadow-green-400/30 hover:shadow-green-400/50 text-center cursor-pointer"
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
          <p className="text-green-400 font-semibold text-lg mb-2">
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
