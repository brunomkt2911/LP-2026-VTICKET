import { motion } from 'framer-motion';
import { Clock, DollarSign, TrendingUp } from 'lucide-react';

export default function PainSection() {
  const pains = [
    {
      icon: Clock,
      title: 'Editar leva tempo',
      description: 'Você tem um negócio pra tocar. Passar horas no CapCut não é produtivo.',
    },
    {
      icon: DollarSign,
      title: 'Agências são caras',
      description: 'R$ 100-200 por vídeo é inviável para quem está começando ou crescendo.',
    },
    {
      icon: TrendingUp,
      title: 'O algoritmo premia frequência',
      description: 'Um vídeo perfeito por mês não vence 15 vídeos bons no mesmo período.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Você não precisa de cinema.
          </h2>
          <p className="text-xl md:text-2xl text-green-400 font-semibold">
            Você precisa de presença.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-green-400/50 transition-colors"
            >
              <pain.icon className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{pain.title}</h3>
              <p className="text-gray-300 leading-relaxed">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
