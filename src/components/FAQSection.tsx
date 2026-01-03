import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como envio os arquivos?',
      answer:
        'Após a confirmação do pagamento, você receberá um link para upload via Google Drive ou WeTransfer. Envie seus vídeos brutos, briefing e qualquer material de apoio. Nossa equipe fará o resto.',
    },
    {
      question: 'Qual o prazo de entrega?',
      answer:
        'O prazo padrão é de 5 dias úteis após a captação de todo o material. Para projetos urgentes, consulte disponibilidade de entrega expressa (taxa adicional pode ser aplicada).',
    },
    {
      question: 'Posso pedir alterações?',
      answer:
        'Sim! Está incluída 1 rodada de ajustes simples no pacote. Isso inclui correções de texto, ajustes de corte, troca de trilha sonora e pequenas modificações. Alterações que exijam refilmagem ou mudança completa de conceito não estão cobertas.',
    },
    {
      question: 'Preciso ter os vídeos gravados?',
      answer:
        'não. Este pack é focado em captação edição ágil. Iremos marcar uma diária de até 4h para a captação dos vídeos.',
    },
    {
      question: 'Os vídeos funcionam para qualquer nicho?',
      answer:
        'Sim! Já trabalhamos com e-commerce, infoprodutos, coaching, saúde, beleza, educação, finanças e muito mais. A edição ágil se adapta ao seu conteúdo e estilo de comunicação.',
    },
    {
      question: 'Vocês criam o roteiro?',
      answer:
        'Incluímos estruturação básica dos vídeos (início, meio, fim) e sugestões de headlines. Se você precisar de roteiros completos escritos do zero, consulte nossos pacotes de criação de conteúdo.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-300">
            Tudo o que você precisa saber antes de começar.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-green-400/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-green-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
