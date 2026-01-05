import Hero from './components/Hero';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import ScopeSection from './components/ScopeSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection'; // O Novo Componente
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
// Importando os componentes estratégicos
import StickyCTA from './components/StickyCTA';
import CookieConsent from './components/CookieConsent'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-primary selection:text-white">
      <Hero />
      <PainSection />
      
      {/* Bloco de Entrega */}
      <SolutionSection />
      <ScopeSection />
      
      {/* Bloco de Autoridade & Prova */}
      <PortfolioSection />
      <TestimonialsSection /> {/* <--- AQUI ESTÁ A PROVA SOCIAL ANTES DA VENDA */}
      
      {/* Bloco de Fechamento */}
      <PricingSection />
      <FAQSection />
      <Footer />
      
      {/* Componentes Flutuantes (camada superior) */}
      <StickyCTA />
      <CookieConsent />
    </div>
  );
}

export default App;
