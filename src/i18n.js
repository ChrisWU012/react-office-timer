import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// set language or by appending /?lng=chi
const resources = {
    en: {
        translation: {
            "let's start": "Let's start",
            "input-alert": "Please fill the blanks",
            "input-title": "Let's see when you can leave",
            "in-time error": "The clocking-in time has yet started",
            "off-time error": "The clocking-out time is over",
            "start time": "When did you go to work?",
            "end time": "When will you get off work?",
            "salary?": "What's your salary? (optional)",
            "confirm": "Enter",
            "time left": "Time left:",
            "time to off": "Time to off："
        }
    },
    chi: {
        translation: {
            "let's start": "開始計時",
            "input-alert": "請輪入資料",
            "input-title": "睇下你今日搵幾錢",
            "in-time error": "你仲未返工？",
            "off-time error": "你已經收咗工？",
            "start time": "幾點返工？",
            "end time": "幾點放工？",
            "salary?": "幾錢人工？(非必須)",
            "confirm": "確定",
            "time left": "距離放工時間仲有：",
            "time to off": "今日放工時間："
        }
    }
};

i18n
    .use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: "chi", // use en if detected lng is not available
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;