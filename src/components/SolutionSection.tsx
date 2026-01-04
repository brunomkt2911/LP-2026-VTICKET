import { motion } from 'framer-motion';
import { Video, Zap, DollarSign } from 'lucide-react';

export default function SolutionSection() {
  const benefits = [
    {
      icon: Video,
      title: '15 Vídeos Completos',
      description: 'Roteirizados, editados e prontos para postar. Volume que mantém sua audiência engajada.',
    },
    {
      icon: Zap,
      title: 'Entrega Rápida',
      // ALTERADO AQUI: De 7 para 5 dias
      description: 'Receba seu pack em até 5 dias úteis. Agilidade que acompanha o ritmo do algoritmo.',
    },
    {
      icon: DollarSign,
      title: 'Preço Fixo',
      description: 'R$ 1.140,00 por 15 vídeos. Apenas R$ 76,00 por vídeo. Investimento previsível e acessível.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            O Pack 15: Sua solução completa
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tudo o que você precisa para dominar as redes sociais com frequência e qualidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-green-400/10 to-transparent p-8 rounded-xl border border-green-400/30 hover:border-green-400 transition-all hover:shadow-lg hover:shadow-green-400/20"
            >
              <div className="bg-green-400/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
