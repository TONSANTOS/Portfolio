import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { resources } from "./locales/index"

const getInitialLanguage = () => {
    const savedLanguage = localStorage.getItem("userLanguage");

    if (savedLanguage) return savedLanguage;

    const browserLanguage = navigator.language.split('-')[0];
    
    return ['en', 'pt'].includes(browserLanguage) ? browserLanguage : 'pt';
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: getInitialLanguage(),
        fallbackLng: "pt",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;