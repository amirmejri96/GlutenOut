import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import frTranslation from './locales/fr.json';
import arTranslation from './locales/ar.json';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      fr: { translation: frTranslation },
      ar: { translation: arTranslation }
    },
    lng: "fr",
    fallbackLng: "fr",
    interpolation: { escapeValue: false }
  });

export default i18n;
