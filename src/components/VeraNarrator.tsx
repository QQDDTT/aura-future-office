import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export default function VeraNarrator({ text, className = '', align = 'center' }: Props) {
  // 文字逐字出现的特效 (Stagger)
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={text}
        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`relative inline-flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(147,51,234,0.15)] ${className}`}
      >
        {/* 光感微粒背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-2xl pointer-events-none" />
        
        {/* 薇拉 标识 */}
        <div className={`flex items-center gap-2 text-xs font-bold tracking-widest text-purple-400 uppercase ${align === 'center' ? 'justify-center' : align === 'left' ? 'justify-start' : 'justify-end'}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(147,51,234,1)] animate-pulse" />
          <span>Vera . Architect</span>
        </div>

        {/* 台词文本 */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className={`text-lg md:text-xl font-medium text-white leading-relaxed ${align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'}`}
        >
          {letters.map((char, index) => (
            <motion.span variants={child} key={index} className="inline-block">
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
