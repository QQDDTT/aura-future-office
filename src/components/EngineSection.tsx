import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Brain, Network, Cpu } from 'lucide-react';
import VeraNarrator from './VeraNarrator';

interface Props {
  onRestart: () => void;
}

export default function EngineSection({ onRestart }: Props) {
  const { t } = useTranslation();
  const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const nodes = [
    { id: 'understand', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-400/20' },
    { id: 'plan', icon: Network, color: 'text-blue-400', bg: 'bg-blue-400/20' },
    { id: 'execute', icon: Cpu, color: 'text-emerald-400', bg: 'bg-emerald-400/20' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -100, scale: 0.9 }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className="min-h-screen w-full max-w-5xl mx-auto flex flex-col items-center justify-center relative px-6"
    >
      <div className="text-center mb-16 flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t('engine.title')}</h2>
        <VeraNarrator text={t('vera.engine')} />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 w-full relative">
        <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />
        
        {nodes.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 + 0.2, ease: easeOutExpo }}
            className="flex flex-col items-center gap-6 relative z-10"
          >
            <div className={`w-28 h-28 rounded-3xl ${node.bg} backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl relative group`}>
              <node.icon className={`w-12 h-12 ${node.color} transition-transform duration-500 group-hover:scale-110`} />
              <div className="absolute inset-0 rounded-3xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105" />
            </div>
            <div className="text-lg font-medium text-gray-300">
              {t(`engine.${node.id}`)}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: easeOutExpo }}
        className="mt-28"
      >
        <button 
          onClick={onRestart}
          className="px-10 py-5 rounded-full bg-white text-black font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
        >
          {t('vera.cta')}
        </button>
      </motion.div>
    </motion.div>
  );
}
