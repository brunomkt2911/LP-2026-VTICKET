import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export default function ScopeSection() {
  const included = [
    'Cortes secos e dinâmicos (Jumpcuts)',
    'Legendas com headlines e texto nativo',
    'Trilha sonora de fundo (Copyright free)',
    'Correção de cor básica',
    'Transições simples e fluidas',
    'Otimização para formato 9:16',
  ];

  const notIncluded = [
    'Motion Graphics complexos',
    'Animações 3D',
    'Tratamento de áudio avançado',
    'Efeitos especiais de cinema',
    'Chroma key e composições',
    'Edição cinematográfica profissional',
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
            O que é Edição Ágil?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparência total: o foco é retenção e clareza, não efeitos especiais.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            // MUDANÇA: Borda e Fundo em Azul (Primary)
            className="bg-primary/5 p-8 rounded-xl border border-primary/30"
          >
            <div className="flex items-center gap-3 mb-6">
              {/* MUDANÇA: Ícone de Check Azul */}
              <div className="bg-primary rounded-full p-2">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">O que ESTÁ incluso</h3>
            </div>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  {/* MUDANÇA: Checkzinho da lista em Azul */}
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/30 p-8 rounded-xl border border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-700 rounded-full p-2">
                <X className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">O que NÃO está incluso</h3>
            </div>
            <ul className="space-y-4">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          // MUDANÇA: Gradiente e Borda Laranja (Secondary) para chamar atenção
          className="mt-8 bg-gradient-to-r from-secondary/10 to-transparent p-6 rounded-xl border border-secondary/20"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            {/* MUDANÇA: Texto "Nota importante" em Laranja */}
            <span className="text-secondary font-semibold">Nota importante:</span> Nosso foco é criar vídeos que seguram atenção e comunicam sua mensagem com clareza. Se você busca produções cinematográficas com efeitos hollywoodianos, este não é o pack ideal. Aqui você ganha volume, velocidade e resultados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
