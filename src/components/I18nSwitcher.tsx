import { useTranslation } from 'react-i18next';

export default function I18nSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-8 right-8 z-50 flex gap-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
      {['zh', 'ja', 'en'].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`text-sm font-semibold transition-colors duration-300 ${
            i18n.language === lng ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
