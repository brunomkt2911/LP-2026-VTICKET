import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'; // Certifique-se de ter o lucide-react instalado

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou antes
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-black/90 backdrop-blur-md text-white border-t border-white/10 shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex-1 text-sm md:text-base text-gray-300">
          <p>
            Nós utilizamos cookies para melhorar sua experiência de navegação. 
            Ao continuar, você concorda com nossa{' '}
            <a href="/privacidade" className="text-white underline hover:text-emerald-400 transition-colors">
              Política de Privacidade
            </a>.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white transition-colors p-2 md:hidden"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
          
          <button
            onClick={acceptCookies}
            className="w-full md:w-auto bg-white text-black px-6 py-2.5 rounded-full font-medium hover:bg-gray-200 transition-all active:scale-95"
          >
            Aceitar Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
