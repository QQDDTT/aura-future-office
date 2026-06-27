import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, FileEdit, XCircle, Paperclip, Zap } from 'lucide-react';

interface Props {
  onNext: () => void;
  isLast?: boolean;
}

export default function FinanceScenario({ onNext, isLast }: Props) {
  const { t } = useTranslation();
  const [isFuture, setIsFuture] = useState(false);
  const scenarioKey = 'finance';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="mb-12 flex justify-center z-10 w-full">
        <div className="inline-block px-8 py-4 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md text-center max-w-2xl shadow-xl">
          <span className="text-lg md:text-xl font-medium text-amber-200">"{t(`scenarios.${scenarioKey}.intent`)}"</span>
        </div>
      </div>

      <div className="relative w-full max-w-5xl h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isFuture ? (
            <motion.div 
              key="past"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: 50, filter: 'blur(10px)', transition: { duration: 0.5 } }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="absolute top-0 left-0 text-gray-500 font-semibold">{t(`scenarios.${scenarioKey}.past_title`)}</div>
              <svg className="w-full h-full" viewBox="0 0 800 300">
                <path d="M 400 40 L 400 120 L 400 200" stroke="#333" strokeWidth="3" strokeDasharray="5,5" fill="none" />
                <motion.circle cx="400" cy="40" r="4" fill="#ef4444" animate={{ cy: [40, 120, 200] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                
                <g transform="translate(350, 20)">
                  <rect width="110" height="40" rx="8" fill="#111" stroke="#333" />
                  <foreignObject x="0" y="0" width="110" height="40">
                    <div className="w-full h-full flex items-center justify-center gap-1.5 text-[#888]">
                      <FileEdit size={14} />
                      <span className="text-[12px] whitespace-nowrap">{t('scenarios.finance.past_node1')}</span>
                    </div>
                  </foreignObject>
                </g>
                <g transform="translate(350, 100)">
                  <rect width="110" height="40" rx="8" fill="#220000" stroke="#ef4444" />
                  <foreignObject x="0" y="0" width="110" height="40">
                    <div className="w-full h-full flex items-center justify-center gap-1.5 text-[#ef4444]">
                      <XCircle size={14} />
                      <span className="text-[12px] whitespace-nowrap">{t('scenarios.finance.past_node2')}</span>
                    </div>
                  </foreignObject>
                  <motion.rect width="110" height="40" rx="8" fill="none" stroke="#ef4444" animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ originX: '55px', originY: '20px' }} />
                </g>
                <g transform="translate(350, 180)">
                  <rect width="110" height="40" rx="8" fill="#111" stroke="#333" />
                  <foreignObject x="0" y="0" width="110" height="40">
                    <div className="w-full h-full flex items-center justify-center gap-1.5 text-[#888]">
                      <Paperclip size={14} />
                      <span className="text-[12px] whitespace-nowrap">{t('scenarios.finance.past_node3')}</span>
                    </div>
                  </foreignObject>
                </g>

                <foreignObject x="250" y="240" width="300" height="60">
                  <div className="text-center text-sm text-gray-500 px-4">{t(`scenarios.${scenarioKey}.past_desc`)}</div>
                </foreignObject>
              </svg>
            </motion.div>
          ) : (
            <motion.div 
              key="future"
              initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="absolute top-0 left-0 text-amber-400 font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 fill-amber-400/20" />
                {t(`scenarios.${scenarioKey}.future_title`)}
              </div>
              <svg className="w-full h-full" viewBox="0 0 800 300">
                <defs>
                  <filter id="glowAmber"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  <linearGradient id="amberGrad"><stop offset="0%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#ef4444" /></linearGradient>
                </defs>
                
                {/* Aura Pipeline/Funnel Layout */}
                <circle cx="400" cy="150" r="100" fill="url(#amberGrad)" opacity="0.1" filter="url(#glowAmber)">
                  <animate attributeName="r" values="90;110;90" dur="4s" repeatCount="indefinite" />
                </circle>

                {/* Pipeline paths */}
                <motion.path d="M 200 150 L 350 150" stroke="url(#amberGrad)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                <motion.path d="M 450 150 L 600 150" stroke="url(#amberGrad)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} />
                <motion.path d="M 400 150 Q 400 250 400 250" stroke="url(#amberGrad)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }} />

                <motion.circle r="4" fill="#fff" filter="url(#glowAmber)"><animateMotion dur="1s" repeatCount="indefinite" path="M 200 150 L 350 150" /></motion.circle>
                <motion.circle r="4" fill="#fff" filter="url(#glowAmber)"><animateMotion dur="1.2s" begin="0.3s" repeatCount="indefinite" path="M 450 150 L 600 150" /></motion.circle>

                <circle cx="400" cy="150" r="25" fill="#111" stroke="#f59e0b" strokeWidth="2" filter="url(#glowAmber)" />
                <text x="400" y="155" fill="#fef3c7" fontSize="14" textAnchor="middle" fontWeight="bold">Aura</text>

                <foreignObject x="50" y="110" width="220" height="80">
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="bg-amber-900/20 border border-amber-500/40 p-4 rounded-2xl backdrop-blur-md text-amber-50 text-sm text-right shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                    {t(`scenarios.${scenarioKey}.future_task1`)}
                  </motion.div>
                </foreignObject>
                <foreignObject x="530" y="110" width="220" height="80">
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.7 }} className="bg-amber-900/20 border border-amber-500/40 p-4 rounded-2xl backdrop-blur-md text-amber-50 text-sm shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                    {t(`scenarios.${scenarioKey}.future_task2`)}
                  </motion.div>
                </foreignObject>
                <foreignObject x="280" y="240" width="240" height="60">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} className="bg-amber-900/20 border border-amber-500/40 p-4 rounded-2xl backdrop-blur-md text-amber-50 text-sm text-center shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                    {t(`scenarios.${scenarioKey}.future_task3`)}
                  </motion.div>
                </foreignObject>
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-16 z-10 flex justify-center h-16">
        {!isFuture ? (
          <button onClick={() => setIsFuture(true)} className="px-8 py-4 rounded-full bg-amber-500/10 text-amber-300 font-bold border border-amber-500/40 hover:bg-amber-500/20 transition-all hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
            🚀 {t('actions.inject_aura')}
          </button>
        ) : (
          <button onClick={onNext} className="flex flex-col items-center gap-2 text-amber-200 hover:text-white transition-colors duration-300 group">
            <span className="text-sm font-medium tracking-wider">{isLast ? t('actions.enter_reactor') : t('actions.next_scenario')}</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
