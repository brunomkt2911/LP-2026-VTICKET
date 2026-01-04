import Hero from './components/Hero';
import PainSection from './components/PainSection';
import SolutionSection from './components/SolutionSection';
import ScopeSection from './components/ScopeSection';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
// Importando os novos componentes estratégicos
import StickyCTA from './components/StickyCTA';
import CookieConsent from './components/CookieConsent'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Hero />
      <PainSection />
      <SolutionSection />
      <ScopeSection />
      <PortfolioSection />
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
