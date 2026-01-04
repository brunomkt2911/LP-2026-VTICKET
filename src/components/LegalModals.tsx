import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null;

  const content = {
    privacy: {
      title: 'Política de Privacidade',
      icon: Shield,
      text: (
        <div className="space-y-4 text-gray-300">
          <p><strong>1. Introdução:</strong> A Owl Rec valoriza a privacidade de seus usuários. Esta política descreve como coletamos, usamos e protegemos suas informações pessoais.</p>
          <p><strong>2. Coleta de Dados:</strong> Coletamos informações fornecidas voluntariamente (como nome, e-mail e telefone) apenas para fins de contato comercial e processamento de pedidos.</p>
          <p><strong>3. Uso das Informações:</strong> Seus dados são utilizados exclusivamente para: (a) Prestação dos serviços contratados; (b) Comunicação sobre o andamento dos projetos; (c) Melhoria de nossos serviços.</p>
          <p><strong>4. Segurança:</strong> Implementamos medidas de segurança para proteger seus dados contra acesso não autorizado.</p>
          <p><strong>5. Cookies:</strong> Utilizamos cookies para melhorar a experiência de navegação e para fins de marketing (Pixel do Facebook), conforme avisado em nosso banner.</p>
        </div>
      )
    },
    terms: {
      title: 'Termos de Uso',
      icon: FileText,
      text: (
        <div className="space-y-4 text-gray-300">
          <p><strong>1. Aceitação:</strong> Ao contratar os serviços da Owl Rec, você concorda com estes termos.</p>
          <p><strong>2. Serviços:</strong> A Owl Rec compromete-se a entregar os vídeos conforme o pacote contratado, respeitando os prazos estabelecidos (5 dias úteis) após o recebimento de todo o material necessário.</p>
          <p><strong>3. Pagamentos:</strong> O início da produção ocorre mediante a confirmação do pagamento acordado.</p>
          <p><strong>4. Revisões:</strong> O cliente tem direito a 1 (uma) rodada completa de ajustes (refino estratégico). Alterações posteriores ou fora do escopo inicial poderão ser cobradas à parte.</p>
          <p><strong>5. Propriedade Intelectual:</strong> O cliente mantém os direitos sobre sua imagem, concedendo à Owl Rec o direito de uso para portfólio, salvo solicitação expressa em contrário.</p>
        </div>
      )
    }
  };

  const current = content[type];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-400/10 rounded-lg">
                <current.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white">{current.title}</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {current.text}
          </div>
          
          <div className="p-6 border-t border-gray-800 bg-gray-900/50 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-green-400 text-gray-900 font-bold rounded-lg hover:bg-green-300 transition-colors"
            >
              Entendido
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
