import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Ticket, Clock, Users, Zap } from 'lucide-react';

interface Props {
  onNext: () => void;
  isLast?: boolean;
}

export default function HRScenario({ onNext, isLast }: Props) {
  const { t } = useTranslation();
  const [isFuture, setIsFuture] = useState(false);
  const scenarioKey = 'hr';

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
          <span className="text-lg md:text-xl font-medium text-rose-200">"{t(`scenarios.${scenarioKey}.intent`)}"</span>
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
                <path d="M 200 150 Q 400 150 400 80" stroke="#333" strokeWidth="3" strokeDasharray="5,5" fill="none" />
                <path d="M 200 150 Q 400 150 400 220" stroke="#333" strokeWidth="3" strokeDasharray="5,5" fill="none" />
                
                <g transform="translate(150, 130)">
                  <rect width="110" height="40" rx="8" fill="#111" stroke="#333" />
                  <foreignObject x="0" y="0" width="110" height="40">
                    <div className="w-full h-full flex items-center justify-center gap-1.5 text-[#888]">
                      <Ticket size={14} />
                      <span className="text-[12px] whitespace-nowrap">{t('scenarios.hr.past_node1')}</span>
                    </div>
                  </foreignObject>
                </g>
                <g transform="translate(350, 60)">
                  <rect width="110" height="40" rx="8" fill="#220000" stroke="#ef4444" />
                  <foreignObject x="0" y="0" width="110" height="40">
                    <div className="w-full h-full flex items-center justify-center gap-1.5 text-[#ef4444]">
                      <Clock size={14} />
                      <span className="text-[12px] whitespace-nowrap">{t('scenarios.hr.past_node2')}</span>
                    </div>
                  </foreignObject>
                  <motion.rect width="110" height="40" rx="8" fill="none" stroke="#ef4444" animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ originX: '55px', originY: '20px' }} />
                </g>
                <g transform="translate(350, 200)">
                  <rect width="110" height="40" rx="8" fill="#111" stroke="#333" />
                  <foreignObject x="0" y="0" width="110" height="40">
                    <div className="w-full h-full flex items-center justify-center gap-1.5 text-[#888]">
                      <Users size={14} />
                      <span className="text-[12px] whitespace-nowrap">{t('scenarios.hr.past_node3')}</span>
                    </div>
                  </foreignObject>
                </g>

                <foreignObject x="500" y="130" width="300" height="100">
                  <div className="text-left text-sm text-gray-500 px-4">{t(`scenarios.${scenarioKey}.past_desc`)}</div>
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
              <div className="absolute top-0 left-0 text-rose-400 font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 fill-rose-400/20" />
                {t(`scenarios.${scenarioKey}.future_title`)}
              </div>
              <svg className="w-full h-full" viewBox="0 0 800 300">
                <defs>
                  <filter id="glowRose"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  <linearGradient id="roseGrad"><stop offset="0%" stopColor="#f43f5e" /><stop offset="100%" stopColor="#8b5cf6" /></linearGradient>
                </defs>
                
                {/* Aura Starburst Layout */}
                <circle cx="400" cy="150" r="100" fill="url(#roseGrad)" opacity="0.1" filter="url(#glowRose)">
                  <animate attributeName="r" values="90;120;90" dur="3s" repeatCount="indefinite" />
                </circle>

                <motion.path d="M 400 150 Q 200 50 150 100" stroke="url(#roseGrad)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                <motion.path d="M 400 150 Q 600 50 650 100" stroke="url(#roseGrad)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} />
                <motion.path d="M 400 150 Q 400 300 400 250" stroke="url(#roseGrad)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.9 }} />

                <motion.circle r="4" fill="#fff" filter="url(#glowRose)"><animateMotion dur="1s" repeatCount="indefinite" path="M 400 150 Q 200 50 150 100" /></motion.circle>
                <motion.circle r="4" fill="#fff" filter="url(#glowRose)"><animateMotion dur="1.1s" begin="0.3s" repeatCount="indefinite" path="M 400 150 Q 600 50 650 100" /></motion.circle>
                <motion.circle r="4" fill="#fff" filter="url(#glowRose)"><animateMotion dur="0.9s" begin="0.6s" repeatCount="indefinite" path="M 400 150 Q 400 300 400 250" /></motion.circle>

                <circle cx="400" cy="150" r="25" fill="#111" stroke="#f43f5e" strokeWidth="2" filter="url(#glowRose)" />
                <text x="400" y="155" fill="#ffe4e6" fontSize="14" textAnchor="middle" fontWeight="bold">Aura</text>

                <foreignObject x="30" y="60" width="220" height="80">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="bg-rose-900/20 border border-rose-500/40 p-4 rounded-2xl backdrop-blur-md text-rose-50 text-sm shadow-[0_0_20px_rgba(244,63,94,0.15)]">
                    {t(`scenarios.${scenarioKey}.future_task1`)}
                  </motion.div>
                </foreignObject>
                <foreignObject x="550" y="60" width="220" height="80">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7 }} className="bg-rose-900/20 border border-rose-500/40 p-4 rounded-2xl backdrop-blur-md text-rose-50 text-sm shadow-[0_0_20px_rgba(244,63,94,0.15)]">
                    {t(`scenarios.${scenarioKey}.future_task2`)}
                  </motion.div>
                </foreignObject>
                <foreignObject x="280" y="240" width="240" height="60">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} className="bg-rose-900/20 border border-rose-500/40 p-4 rounded-2xl backdrop-blur-md text-rose-50 text-sm text-center shadow-[0_0_20px_rgba(244,63,94,0.15)]">
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
          <button onClick={() => setIsFuture(true)} className="px-8 py-4 rounded-full bg-rose-500/10 text-rose-300 font-bold border border-rose-500/40 hover:bg-rose-500/20 transition-all hover:scale-105 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
            🚀 {t('actions.inject_aura')}
          </button>
        ) : (
          <button onClick={onNext} className="flex flex-col items-center gap-2 text-rose-200 hover:text-white transition-colors duration-300 group">
            <span className="text-sm font-medium tracking-wider">{isLast ? t('actions.enter_reactor') : t('actions.next_scenario')}</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
