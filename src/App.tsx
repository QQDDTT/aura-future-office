import { useState } from 'react';
import AmbientBackground from './components/AmbientBackground';
import I18nSwitcher from './components/I18nSwitcher';
import HeroSection from './components/HeroSection';
import ScenarioCard from './components/ScenarioCard';
import EngineSection from './components/EngineSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const SLIDES = [
  'hero',
  'meeting',
  'finance',
  'hr',
  'data',
  'engine'
];

function App() {
  const { i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((p) => Math.min(p + 1, SLIDES.length - 1));
  const restart = () => setCurrentSlide(0);

  return (
    <div className="w-full h-screen bg-[#05050a] overflow-hidden relative">
      <AmbientBackground />
      <I18nSwitcher />
      
      {/* 侧边分页指示器 */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === i 
                ? 'bg-purple-400 scale-[2] shadow-[0_0_10px_rgba(147,51,234,0.8)]' 
                : 'bg-white/20 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.main 
          key={i18n.language + '-' + currentSlide}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)', transition: { duration: 0.3 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full absolute inset-0 overflow-y-auto no-scrollbar flex items-center justify-center"
        >
          {currentSlide === 0 && <HeroSection onNext={nextSlide} />}
          {currentSlide === 1 && <ScenarioCard scenarioKey="meeting" onNext={nextSlide} />}
          {currentSlide === 2 && <ScenarioCard scenarioKey="finance" onNext={nextSlide} />}
          {currentSlide === 3 && <ScenarioCard scenarioKey="hr" onNext={nextSlide} />}
          {currentSlide === 4 && <ScenarioCard scenarioKey="data" onNext={nextSlide} isLast />}
          {currentSlide === 5 && <EngineSection onRestart={restart} />}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export default App;
