import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#05050a]">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-[rgba(147,51,234,0.15)] blur-[120px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ top: '-20%', left: '-10%' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-[rgba(16,185,129,0.1)] blur-[150px]"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ bottom: '-10%', right: '-10%' }}
      />
    </div>
  );
}
