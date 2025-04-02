import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './assets/locales/en/translation.json';
import translationDE from './assets/locales/de/translation.json';
import translationFR from './assets/locales/fr/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    de: {
        translation: translationDE
    },
    fr: {
        translation: translationFR
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    });

export default i18n;
