import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Table, FileSpreadsheet, Zap } from 'lucide-react';

interface Props {
  onNext: () => void;
  isLast?: boolean;
}

export default function DataScenario({ onNext, isLast }: Props) {
  const { t } = useTranslation();
  const [isFuture, setIsFuture] = useState(false);
  const scenarioKey = 'data';

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
          <span className="text-lg md:text-xl font-medium text-emerald-200">"{t(`scenarios.${scenarioKey}.intent`)}"</span>
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
                <path d="M 200 60 L 400 150" stroke="#333" strokeWidth="3" strokeDasharray="5,5" fill="none" />
                <path d="M 200 150 L 400 150" stroke="#333" strokeWidth="3" strokeDasharray="5,5" fill="none" />
                <path d="M 200 240 L 400 150" stroke="#333" strokeWidth="3" strokeDasharray="5,5" fill="none" />
                
                <g transform="translate(100, 40)">
                  <rect width="110" height="40" rx="8" fill="#111" stroke="#333" />
                  <foreignObject x="0" y="0" width="110" height="40">
                    <div className="w-full h-full flex items-center justify-center gap-1.5 text-[#888]">
                      <Table size={14} />
                      <span className="text-[12px] whitespace-nowrap">{t('scenarios.data.past_node1')}</span>
                    </div>
                  </foreignObject>
                </g>
                <g transform="translate(100, 130)">
                  <rect width="110" height="40" rx="8" fill="#111" stroke="#333" />
                  <foreignObject x="0" y="0" width="110" height="40">
                    <div className="w-full h-full flex items-center justify-center gap-1.5 text-[#888]">
                      <Table size={14} />
                      <span className="text-[12px] whitespace-nowrap">{t('scenarios.data.past_node2')}</span>
                    </div>
                  </foreignObject>
                </g>
                <g transform="translate(100, 220)">
                  <rect width="110" height="40" rx="8" fill="#111" stroke="#333" />
                  <foreignObject x="0" y="0" width="110" height="40">
                    <div className="w-full h-full flex items-center justify-center gap-1.5 text-[#888]">
                      <Table size={14} />
                      <span className="text-[12px] whitespace-nowrap">{t('scenarios.data.past_node3')}</span>
                    </div>
                  </foreignObject>
                </g>

                <g transform="translate(350, 130)">
                  <rect width="120" height="40" rx="8" fill="#220000" stroke="#ef4444" />
                  <foreignObject x="0" y="0" width="120" height="40">
                    <div className="w-full h-full flex items-center justify-center gap-1.5 text-[#ef4444]">
                      <FileSpreadsheet size={14} />
                      <span className="text-[12px] whitespace-nowrap">{t('scenarios.data.past_node4')}</span>
                    </div>
                  </foreignObject>
                  <motion.rect width="120" height="40" rx="8" fill="none" stroke="#ef4444" animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} style={{ originX: '60px', originY: '20px' }} />
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
              <div className="absolute top-0 left-0 text-emerald-400 font-semibold flex items-center gap-2">
                <Zap className="w-5 h-5 fill-emerald-400/20" />
                {t(`scenarios.${scenarioKey}.future_title`)}
              </div>
              <svg className="w-full h-full" viewBox="0 0 800 300">
                <defs>
                  <filter id="glowEmerald"><feGaussianBlur stdDeviation="4" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  <linearGradient id="emeraldGrad"><stop offset="0%" stopColor="#10b981" /><stop offset="100%" stopColor="#0ea5e9" /></linearGradient>
                </defs>
                
                {/* Aura Vortex Layout (inputs converging into center, one output) */}
                <circle cx="400" cy="150" r="100" fill="url(#emeraldGrad)" opacity="0.1" filter="url(#glowEmerald)">
                  <animate attributeName="r" values="100;80;100" dur="2s" repeatCount="indefinite" />
                </circle>

                <motion.path d="M 150 50 Q 250 150 400 150" stroke="url(#emeraldGrad)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                <motion.path d="M 150 250 Q 250 150 400 150" stroke="url(#emeraldGrad)" strokeWidth="3" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} />
                <motion.path d="M 400 150 L 650 150" stroke="url(#emeraldGrad)" strokeWidth="4" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.2 }} />

                <motion.circle r="4" fill="#fff" filter="url(#glowEmerald)"><animateMotion dur="1s" repeatCount="indefinite" path="M 150 50 Q 250 150 400 150" /></motion.circle>
                <motion.circle r="4" fill="#fff" filter="url(#glowEmerald)"><animateMotion dur="1s" begin="0.3s" repeatCount="indefinite" path="M 150 250 Q 250 150 400 150" /></motion.circle>
                <motion.circle r="5" fill="#fff" filter="url(#glowEmerald)"><animateMotion dur="1.5s" begin="1.2s" repeatCount="indefinite" path="M 400 150 L 650 150" /></motion.circle>

                <circle cx="400" cy="150" r="25" fill="#111" stroke="#10b981" strokeWidth="2" filter="url(#glowEmerald)" />
                <text x="400" y="155" fill="#d1fae5" fontSize="14" textAnchor="middle" fontWeight="bold">Aura</text>

                <foreignObject x="20" y="40" width="220" height="80">
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="bg-emerald-900/20 border border-emerald-500/40 p-4 rounded-2xl backdrop-blur-md text-emerald-50 text-sm text-right shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    {t(`scenarios.${scenarioKey}.future_task1`)}
                  </motion.div>
                </foreignObject>
                <foreignObject x="20" y="200" width="220" height="80">
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.7 }} className="bg-emerald-900/20 border border-emerald-500/40 p-4 rounded-2xl backdrop-blur-md text-emerald-50 text-sm text-right shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    {t(`scenarios.${scenarioKey}.future_task2`)}
                  </motion.div>
                </foreignObject>
                <foreignObject x="550" y="110" width="240" height="80">
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.9 }} className="bg-emerald-900/20 border border-emerald-500/40 p-4 rounded-2xl backdrop-blur-md text-emerald-50 text-sm shadow-[0_0_20px_rgba(16,185,129,0.15)]">
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
          <button onClick={() => setIsFuture(true)} className="px-8 py-4 rounded-full bg-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/40 hover:bg-emerald-500/20 transition-all hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            🚀 {t('actions.inject_aura')}
          </button>
        ) : (
          <button onClick={onNext} className="flex flex-col items-center gap-2 text-emerald-200 hover:text-white transition-colors duration-300 group">
            <span className="text-sm font-medium tracking-wider">{isLast ? t('actions.enter_reactor') : t('actions.next_scenario')}</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </button>
        )}
      </div>
    </motion.div>
  );
}
