import { motion } from 'framer-motion';

export default function Hero() {

  const handleHeroClick = () => {
    // @ts-ignore
    if (typeof window !== 'undefined' && window.fbq) {
      // @ts-ignore
      window.fbq('track', 'Contact', {
        content_name: 'Botão Hero - Pack R$ 1140',
        currency: 'BRL',
        value: 1140.00
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Fundo Geral continua Teal/Azul para dar contraste com o Laranja do vídeo */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* LADO ESQUERDO: COPY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Constância Vende Mais que{' '}
            <span className="text-secondary">Perfeição.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Tenha vídeos no seu perfil dia sim, dia não. O Pack Ágil de 15 Reels para quem precisa de volume sem gastar uma fortuna.
          </motion.p>

          <motion.a
            onClick={handleHeroClick}
            href="https://wa.me/5511934354900?text=Quero%20saber%20mais%20sobre%20o%20pacote%20de%2015%20v%C3%ADdeos!"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-primary-hover transition-colors shadow-lg shadow-primary/50 cursor-pointer"
          >
            Garantir meus 15 vídeos por R$ 1.140
          </motion.a>
        </motion.div>

        {/* LADO DIREITO: VÍDEO COM GLOW LARANJA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
             {/* GLOW LARANJA ATRÁS DO VÍDEO (Blur Effect) */}
             <div className="absolute -inset-4 bg-secondary/30 blur-3xl -z-10 rounded-full opacity-70 animate-pulse"></div>

             {/* Container do Vídeo */}
             {/* MUDANÇA: shadow-secondary (Laranja) */}
             <div className="relative w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-secondary/20 border border-white/10 bg-black">
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <iframe
                  src="https://player.vimeo.com/video/1151202152?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Video Preview"
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

              {/* Reflexo de vidro sutil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
