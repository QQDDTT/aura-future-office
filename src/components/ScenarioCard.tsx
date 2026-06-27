import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowRight, Zap, ChevronDown } from 'lucide-react';

interface ScenarioProps {
  scenarioKey: string;
  onNext: () => void;
  isLast?: boolean;
}

export default function ScenarioCard({ scenarioKey, onNext, isLast }: ScenarioProps) {
  const { t } = useTranslation();
  const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { ease: easeOutExpo, duration: 0.8 } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -80, scale: 0.95 }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className="min-h-screen w-full max-w-6xl mx-auto flex flex-col justify-center py-20 px-6"
    >
      <div className="mb-12 flex justify-center">
        <div className="inline-block px-6 py-3 rounded-2xl rounded-bl-sm bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
          <span className="text-base font-medium text-purple-200">"{t(`scenarios.${scenarioKey}.intent`)}"</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
          className="p-8 rounded-[2rem] bg-black/40 border border-white/5 flex flex-col gap-6"
        >
          <div className="text-gray-500 font-semibold">{t(`scenarios.${scenarioKey}.past_title`)}</div>
          <div className="text-gray-400 leading-relaxed">
            {t(`scenarios.${scenarioKey}.past_desc`)}
          </div>
          <div className="mt-auto opacity-30 flex items-center justify-center py-8">
             <div className="flex gap-4 items-center">
                <div className="w-16 h-12 rounded-lg border border-gray-600 bg-gray-800 flex items-center justify-center">Sys</div>
                <ArrowRight className="text-gray-600 w-5 h-5" />
                <div className="w-16 h-12 rounded-lg border border-gray-600 bg-gray-800 flex items-center justify-center">DB</div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-6 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-emerald-400 opacity-50" />
          
          <motion.div variants={itemVariants} className="text-white font-semibold flex items-center gap-2">
            <Zap className="text-purple-400 w-5 h-5 fill-purple-400/20" />
            {t(`scenarios.${scenarioKey}.future_title`)}
          </motion.div>
          
          <div className="flex flex-col gap-4 mt-2">
            {[1, 2, 3].map((num) => (
              <motion.div 
                key={num}
                variants={itemVariants}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="relative flex items-center justify-center flex-shrink-0">
                  <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                  <CheckCircle2 className="text-emerald-400 w-5 h-5 relative z-10" />
                </div>
                <span className="text-gray-300 text-sm md:text-base">{t(`scenarios.${scenarioKey}.future_task${num}`)}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-16 flex justify-center"
      >
        <button 
          onClick={onNext}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm font-medium tracking-wider">{isLast ? '进入反应堆' : '下一个场景'}</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-purple-400" />
        </button>
      </motion.div>
    </motion.div>
  );
}
