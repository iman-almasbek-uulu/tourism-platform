"use client";
import { setLanguage } from "@/redux/slices/languageSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UseTranslate = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentLang = useSelector<RootState>((state) => state.language.currentLang);
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    // Пример: загрузка переводов с бэкенда, если требуется
    const fetchTranslations = async () => {
      // Замените API URL своим
      const response = await fetch(`/api/translations?lang=${currentLang}`);
      const data = await response.json();
      setTranslations(data);
    };
    fetchTranslations();
  }, [currentLang]);

  const t = (ru: string, ar: string, en: string): string => {
    return translations[ru] || (currentLang === "ru" ? ru : currentLang === "ar" ? ar : en);
  };

  const changeLanguage = (lang: string) => {
    dispatch(setLanguage(lang));
    localStorage.setItem("lang", lang);
  };

  return { t, changeLanguage };
};

export default UseTranslate;
