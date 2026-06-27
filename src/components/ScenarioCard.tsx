import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface ScenarioProps {
  scenarioKey: string;
  onNext: () => void;
  isLast?: boolean;
}

export default function ScenarioCard({ scenarioKey, onNext, isLast }: ScenarioProps) {
  const { t } = useTranslation();
  const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 80, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -80, scale: 0.95 }}
      transition={{ duration: 0.8, ease: easeOutExpo }}
      className="min-h-screen w-full max-w-7xl mx-auto flex flex-col justify-center py-20 px-4"
    >
      <div className="mb-10 flex justify-center z-10">
        <div className="inline-block px-8 py-4 rounded-3xl rounded-bl-sm bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.05)] text-center">
          <span className="text-lg md:text-xl font-medium text-purple-200">"{t(`scenarios.${scenarioKey}.intent`)}"</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">
        {/* Past - Linear Blocker Flow */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
          className="relative p-6 rounded-[2rem] bg-black/40 border border-white/5 flex flex-col h-[500px] overflow-hidden"
        >
          <div className="absolute top-6 left-8 text-gray-500 font-semibold z-10">{t(`scenarios.${scenarioKey}.past_title`)}</div>
          
          <div className="w-full h-full relative mt-8 flex-1">
            <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
              {/* Lines */}
              <motion.path 
                d="M 200 60 L 200 160" 
                stroke="#333" strokeWidth="3" strokeDasharray="5,5" fill="none"
              />
              <motion.path 
                d="M 200 160 L 200 260" 
                stroke="#333" strokeWidth="3" strokeDasharray="5,5" fill="none"
              />
              <motion.path 
                d="M 200 260 L 200 360" 
                stroke="#333" strokeWidth="3" strokeDasharray="5,5" fill="none"
              />

              {/* Data packet struggling */}
              <motion.circle
                cx="200" cy="110" r="4" fill="#ef4444"
                animate={{ cy: [60, 160], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                cx="200" cy="210" r="4" fill="#ef4444"
                animate={{ cy: [160, 260], opacity: [0, 1, 0] }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, ease: "linear" }}
              />

              {/* Nodes */}
              <g transform="translate(140, 40)">
                <rect width="120" height="40" rx="8" fill="#111" stroke="#333" />
                <text x="60" y="25" fill="#666" fontSize="14" textAnchor="middle">Manual Entry</text>
              </g>
              <g transform="translate(140, 140)">
                <rect width="120" height="40" rx="8" fill="#111" stroke="#333" />
                <text x="60" y="25" fill="#666" fontSize="14" textAnchor="middle">Legacy Sys</text>
              </g>
              <g transform="translate(140, 240)">
                <rect width="120" height="40" rx="8" fill="#220000" stroke="#ef4444" />
                <text x="60" y="25" fill="#ef4444" fontSize="14" textAnchor="middle">Error / Delay</text>
                {/* Red pulse on error node */}
                <motion.rect
                  width="120" height="40" rx="8" fill="none" stroke="#ef4444"
                  animate={{ scale: [1, 1.1, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ originX: '60px', originY: '20px' }}
                />
              </g>
              <g transform="translate(140, 340)">
                <rect width="120" height="40" rx="8" fill="#111" stroke="#333" />
                <text x="60" y="25" fill="#444" fontSize="14" textAnchor="middle">Final Result</text>
              </g>

              {/* Floating desc */}
              <foreignObject x="270" y="190" width="120" height="100">
                <div className="text-xs text-gray-500 leading-relaxed border-l-2 border-red-900/50 pl-2">
                  {t(`scenarios.${scenarioKey}.past_desc`)}
                </div>
              </foreignObject>
            </svg>
          </div>
        </motion.div>

        {/* Future - Concurrent Aura Network */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: easeOutExpo }}
          className="relative p-6 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col h-[500px] overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-emerald-400 opacity-50" />
          <div className="absolute top-6 left-8 text-white font-semibold z-10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(147,51,234,0.8)] animate-pulse" />
            {t(`scenarios.${scenarioKey}.future_title`)}
          </div>

          <div className="w-full h-full relative mt-8 flex-1">
            <svg className="w-full h-full" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="50%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="lineGrad3" x1="50%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Glowing Background aura */}
              <motion.circle
                cx="250" cy="280" r="60" fill="url(#lineGrad1)" opacity="0.1" filter="url(#glow)"
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Paths from Aura (250, 280) to 3 targets */}
              {/* Target 1: 250, 60 (Top Center) */}
              <motion.path 
                d="M 250 280 Q 250 170 250 60" 
                stroke="url(#lineGrad1)" strokeWidth="2" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
              />
              {/* Target 2: 80, 140 (Top Left) */}
              <motion.path 
                d="M 250 280 Q 150 210 80 140" 
                stroke="url(#lineGrad2)" strokeWidth="2" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 1.0, ease: "circOut" }}
              />
              {/* Target 3: 420, 140 (Top Right) */}
              <motion.path 
                d="M 250 280 Q 350 210 420 140" 
                stroke="url(#lineGrad3)" strokeWidth="2" fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 1.5, delay: 1.2, ease: "circOut" }}
              />

              {/* Data Particles moving along paths */}
              <motion.circle r="3" fill="#fff" filter="url(#glow)">
                <animateMotion dur="2s" repeatCount="indefinite" path="M 250 280 Q 250 170 250 60" />
              </motion.circle>
              <motion.circle r="3" fill="#fff" filter="url(#glow)">
                <animateMotion dur="2.2s" begin="0.5s" repeatCount="indefinite" path="M 250 280 Q 150 210 80 140" />
              </motion.circle>
              <motion.circle r="3" fill="#fff" filter="url(#glow)">
                <animateMotion dur="1.8s" begin="1s" repeatCount="indefinite" path="M 250 280 Q 350 210 420 140" />
              </motion.circle>

              {/* Central Node: Aura Reactor */}
              <motion.g 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                transition={{ type: 'spring', delay: 0.5, bounce: 0.5 }}
              >
                <circle cx="250" cy="280" r="30" fill="#111" stroke="#9333ea" strokeWidth="2" filter="url(#glow)" />
                <circle cx="250" cy="280" r="15" fill="#a855f7" />
                <text x="250" y="335" fill="#d8b4fe" fontSize="14" fontWeight="bold" textAnchor="middle">Aura Agent</text>
              </motion.g>

              {/* Target Nodes & ForeignObjects for Text */}
              {/* Node 1 */}
              <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 1.2 }}>
                <circle cx="250" cy="60" r="6" fill="#10b981" filter="url(#glow)" />
                <foreignObject x="130" y="75" width="240" height="60">
                  <div className="text-center text-sm text-gray-200 bg-white/5 border border-emerald-500/30 rounded-lg p-2 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                    {t(`scenarios.${scenarioKey}.future_task1`)}
                  </div>
                </foreignObject>
              </motion.g>

              {/* Node 2 */}
              <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 1.4 }}>
                <circle cx="80" cy="140" r="6" fill="#3b82f6" filter="url(#glow)" />
                <foreignObject x="10" y="155" width="160" height="80">
                  <div className="text-center text-sm text-gray-200 bg-white/5 border border-blue-500/30 rounded-lg p-2 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    {t(`scenarios.${scenarioKey}.future_task2`)}
                  </div>
                </foreignObject>
              </motion.g>

              {/* Node 3 */}
              <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 1.6 }}>
                <circle cx="420" cy="140" r="6" fill="#8b5cf6" filter="url(#glow)" />
                <foreignObject x="330" y="155" width="160" height="80">
                  <div className="text-center text-sm text-gray-200 bg-white/5 border border-purple-500/30 rounded-lg p-2 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                    {t(`scenarios.${scenarioKey}.future_task3`)}
                  </div>
                </foreignObject>
              </motion.g>
            </svg>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-12 flex justify-center z-10"
      >
        <button 
          onClick={onNext}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm font-medium tracking-wider">{isLast ? '进入反应堆' : '下一个场景'}</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]" />
        </button>
      </motion.div>
    </motion.div>
  );
}
