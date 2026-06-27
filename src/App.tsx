import AmbientBackground from './components/AmbientBackground';
import I18nSwitcher from './components/I18nSwitcher';
import HeroSection from './components/HeroSection';
import ScenarioCard from './components/ScenarioCard';
import EngineSection from './components/EngineSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={i18n.language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative min-h-screen"
      >
        <AmbientBackground />
        <I18nSwitcher />
        
        <main className="w-full relative">
          <HeroSection />
          
          <div className="flex flex-col gap-10">
            <ScenarioCard scenarioKey="meeting" />
            <ScenarioCard scenarioKey="finance" />
            <ScenarioCard scenarioKey="hr" />
            <ScenarioCard scenarioKey="data" />
          </div>

          <EngineSection />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
