import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export default function HeroSection({ onNext }: Props) {
  const { t } = useTranslation();
  const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.95 }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
        className="text-center max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: easeOutExpo }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Aura Future Office</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-400 leading-tight">
          {t('hero.title')}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: easeOutExpo }}
          className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12 max-w-3xl"
        >
          {t('hero.subtitle')}
        </motion.p>
        
        <motion.button
          onClick={onNext}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: easeOutExpo }}
          className="relative px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold backdrop-blur-md transition-all duration-500 group overflow-hidden shadow-[0_0_40px_rgba(147,51,234,0.15)] hover:shadow-[0_0_60px_rgba(147,51,234,0.3)] hover:-translate-y-1"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 flex items-center gap-2">
            {t('hero.cta')}
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
}
