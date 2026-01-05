import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function PortfolioSection() {
  const videos = [
    {
      id: '1151247639', // Atualizado para o Vídeo 10
      title: 'VÍDEO 10',
    },
    {
      id: '1151013491',
      title: 'Aquisição seguidores Felipe',
    },
    {
      id: '1151013835',
      title: 'VÍDEO 8',
    },
    {
      id: '1151013987',
      title: 'VÍDEO 2',
    },
  ];

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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Vídeos que geram resultados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conteúdos otimizados para diversos nichos e segmentos.
          </p>
        </motion.div>

        {/* ALTERAÇÃO TÁTICA:
           - Mobile: flex + overflow-x-auto (Vira carrossel)
           - Desktop: md:grid (Vira grade normal)
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 scrollbar-hide">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              // MUDANÇA: min-w-[85vw] no mobile força o card a ocupar quase toda a tela, incentivando o scroll lateral
              className="group min-w-[85vw] md:min-w-0 snap-center"
            >
              <div className="relative w-full rounded-2xl overflow-hidden border border-gray-700 group-hover:border-primary/50 transition-all bg-gray-800 shadow-xl">
                <div style={{ paddingBottom: '177.78%', position: 'relative', width: '100%' }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0&muted=1`} 
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title={video.title}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Dica visual para o usuário saber que pode arrastar (só aparece no mobile) */}
        <p className="md:hidden text-center text-gray-500 text-sm mt-4 animate-pulse">
           ← Arraste para o lado para ver mais →
        </p>
      </div>
    </section>
  );
}
