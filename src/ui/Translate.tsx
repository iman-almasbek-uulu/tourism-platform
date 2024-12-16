"use client"
import { setLanguage } from "@/redux/slices/languageSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

const UseTranslate = () => {
    const dispatch = useDispatch<AppDispatch>();
    const currentLang = useSelector<RootState>((state) => state.language.currentLang)

    const t = (ru: string, ar:string, en: string) => {
        switch (currentLang) {
            case "ru":
                return ru
            case "ar":
                return ar
            case "en":
                return en
            default:    
                return en
        }
    }
    const changeLanguage = (lang: string) => {
        dispatch(setLanguage(lang))
    }

    return {t, changeLanguage}
};

export default UseTranslate;