import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// set language or by appending ?lng=LANGUAGE
const resources = {
    en: {
        translation: {
            "let's start": "Let's start",
            "input-title": "Let's see when you can leave"
        }
    },
    chi: {
        translation: {
            "let's start": "開始計時",
            "input-title": "睇下你今日搵幾錢"
        }
    }
};

i18n
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "en", // use en if detected lng is not available
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;