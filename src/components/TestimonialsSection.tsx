import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useEffect } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: '1151578688', // Samuel
      name: 'Samuel',
      role: 'CEO MindFlux',
      highlight: 'ROAS 13 com Ads',
      quote: 'Tivemos um ROAS de 13 com os anúncios e UGCs produzidos. Resultado absurdo.',
    },
    {
      id: '1151578722', // Glaucia
      name: 'Glaucia Petri',
      role: 'Rainha do Forex',
      highlight: 'Acertou de Primeira',
      quote: 'Já contratei diversas equipes, mas nunca tive esse resultado. Me senti muito à vontade e acertaram a mão logo de cara.',
    },
    {
      id: '1151578699', // David
      name: 'David',
      role: 'CEO KauffMan',
      highlight: 'Marca Reposicionada',
      quote: 'Minha primeira experiência contratando videomaker e foi a melhor possível. Reposicionou totalmente nossa marca no Instagram.',
    },
  ];

  // Script do Vimeo para garantir performance
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          {/* BRINCADEIRA: Aspas flutuando em Laranja (Secondary) */}
          <div className="flex justify-center mb-4">
             <motion.div
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             >
                <Quote className="w-12 h-12 text-secondary/80 rotate-180" />
             </motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Resultados reais.
          </h2>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            O que dizem quem já escalou comigo.
          </p>
        </motion.div>

        {/* LÓGICA DO CARROSSEL MOBILE:
            - flex + overflow-x-auto: Permite rolagem lateral
            - snap-x: Faz o scroll "travar" no card certinho
            - scrollbar-hide: Esconde a barra de rolagem feia (se configurado no CSS global, senão não atrapalha)
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-3 md:gap-8 md:pb-0 scrollbar-hide">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }} 
              // min-w-[85vw] força largura fixa no mobile para ativar o scroll
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-secondary/50 transition-colors shadow-xl flex flex-col min-w-[85vw] md:min-w-0 snap-center"
            >
              {/* Cabeçalho do Card */}
              <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">{item.role}</p>
                </div>
                {/* Estrelas Pipocando */}
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
                    >
                        <Star className="w-4 h-4 text-secondary fill-secondary" />
                    </motion.div>
                    ))}
                </div>
              </div>

              {/* Player de Vídeo (Estilo Stories Vertical) */}
              <div className="relative w-full rounded-xl overflow-hidden bg-black aspect-[9/16] mb-4 border border-gray-700 shadow-inner group">
                 <iframe
                    // ATENÇÃO: Autoplay=0 para não travar o celular do cliente com 3 vídeos rodando
                    src={`https://player.vimeo.com/video/${item.id}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0&muted=0`}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    title={item.name}
                    className="absolute top-0 left-0 w-full h-full"
                 />
              </div>

              {/* Texto do Depoimento */}
              <div className="text-center mt-auto">
                <p className="text-primary font-bold text-lg mb-2">"{item.highlight}"</p>
                <p className="text-gray-300 text-sm italic leading-relaxed">
                  {item.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Dica visual para mobile */}
        <p className="md:hidden text-center text-gray-500 text-sm mt-4 animate-pulse">
           ← Deslize para ver mais depoimentos →
        </p>
      </div>
    </section>
  );
}
