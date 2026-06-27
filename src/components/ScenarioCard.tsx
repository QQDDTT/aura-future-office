import { motion, type Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';

interface ScenarioProps {
  scenarioKey: string;
}

export default function ScenarioCard({ scenarioKey }: ScenarioProps) {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.8 } }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-32">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 flex justify-center"
      >
        <div className="inline-block px-6 py-3 rounded-2xl rounded-bl-sm bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl">
          <span className="text-base font-medium text-purple-200">"{t(`scenarios.${scenarioKey}.intent`)}"</span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Past - Traditional */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Future - Aura Agent */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
    </div>
  );
}
