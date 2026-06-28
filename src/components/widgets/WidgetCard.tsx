import React from 'react';
import { motion } from 'framer-motion';

interface WidgetCardProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  glowColor?: string;
}

export const WidgetCard: React.FC<WidgetCardProps> = ({ 
  children, 
  delay = 0, 
  className = "", 
  glowColor = "rgba(255,255,255,0.1)",
  ...rest 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom dramatic ease-out
      }}
      className={`relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl ${className}`}
      {...rest}
    >
      {/* Subtle internal glow/reflection effect based on glowColor */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: `radial-gradient(120% 120% at 0% 0%, ${glowColor} 0%, transparent 50%)`
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 p-5">
        {children}
      </div>
    </motion.div>
  );
};
