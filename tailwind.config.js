/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // AQUI ESTÁ A MÁGICA
        
        // Primary = O novo "Verde". Onde você usava verde, agora será esse Azul Teal.
        primary: {
          DEFAULT: '#0EA5E9', // Sky Blue 500 (Um azul vibrante e moderno)
          hover: '#0284C7',   // Sky Blue 600 (Um pouco mais escuro para o hover)
        },
        
        // Secondary = Laranja (para detalhes, bordas ou ícones específicos)
        secondary: {
          DEFAULT: '#F97316', // Orange 500
          hover: '#EA580C',   // Orange 600
        },

        // Um fundo escuro "azulado" para combinar com a paleta (opcional)
        darkBg: '#0F172A', // Slate 900
      },
    },
  },
  plugins: [],
};
