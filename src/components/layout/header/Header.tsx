"use client";
import Link from "next/link";
import scss from "./Header.module.scss";
import UseTranslate from "@/ui/Translate";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useWindowSize } from "react-use";
import { useState } from "react";
import down from "@/images/down.png";
import { usePathname } from "next/navigation";

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { width } = useWindowSize();
  const { t, changeLanguage } = UseTranslate();
  const lang = useSelector<RootState, string>(
    (state) => state.language.currentLang
  );
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isRegion, setIsRegion] = useState<boolean>(false);
  const [isRegionName, setIsRegionName] = useState<string>("");
  const [isCulture, setIsCulture] = useState<boolean>(false);
  const [isRotate, setIsRotate] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const regions = [
    { name: t("Чуй", "شوي", "Chui"), path: "/chui" },
    { name: t("Ош", "أوش", "Osh"), path: "/osh" },
    { name: t("Джалал-Абад", "جلال أباد", "Jalal-Abad"), path: "/jalal-abad" },
    { name: t("Нарын", "نارين", "Naryn"), path: "/naryn" },
    { name: t("Талас", "تالاس", "Talas"), path: "/talas" },
    { name: t("Баткен", "باتكين", "Batken"), path: "/batken" },
    { name: t("Иссык-Куль", "إيسيك كول", "Issyk-Kul"), path: "/issyk-kul" },
  ];

  const culture = [
    {
      name: t(
        "Национальные инструменты",
        "الآلات الوطنية",
        "National Instruments"
      ),
      path: "/culture/instruments",
    },
    {
      name: t("Национальная одежда", "الملابس الوطنية", "National Clothes"),
      path: "/culture/clothes",
    },
    {
      name: t("Ручная работа", "الحرف اليدوية", "Hand Crafts"),
      path: "/culture/crafts",
    },
    { name: t("Кухня", "المطبخ", "Kitchen"), path: "/culture/kitchen" },
    { name: t("Игры", "الألعاب", "Games"), path: "/culture/games" },
  ];

  const navItems = [
    { name: { ru: "Главная", ar: "الرئيسية", en: "Home" }, path: "/" },
    {
      name: { ru: "Регионы", ar: "المناطق", en: "Regions" },
      path: `/${isRegionName}`,
    },
    {
      name: { ru: "Культура", ar: "الثقافة", en: "Culture" },
      path: "/culture",
    },
    { name: { ru: "Галерея", ar: "معرض", en: "Gallery" }, path: "/gallery" },
    { name: { ru: "Маршруты", ar: "الطرق", en: "Routes" }, path: "/routes" },
  ];

  return (
    <header id={scss.Header}>
      <div className={`${scss.container} container`}>
        <div className={scss.logo}>LOGO</div>
        {width > 834 ? (
          <>
            <nav>
              {navItems.map((item, i) => {
                if (item.name.ru === "Регионы") {
                  return (
                    <div
                      key={i}
                      className={`${isActive(item.path) ? scss.active : ""} ${
                        scss.link
                      }`}
                      onClick={() => {
                        setIsRegion(!isRegion);
                        setIsRegionName(item.path.split("/")[1]);
                      }}
                    >
                      {t(item.name.ru, item.name.ar, item.name.en)}
                    </div>
                  );
                } else {
                  return (
                    <Link
                      key={i}
                      href={item.path}
                      className={isActive(item.path) ? scss.active : ""}
                    >
                      {t(item.name.ru, item.name.ar, item.name.en)}
                    </Link>
                  );
                }
              })}
              {isRegion && (
                <div className={scss.links}>
                  {regions.map((region, i) => (
                    <Link
                      onClick={() => {
                        setIsRegionName(region.path.split("/")[1]);
                        setIsRegion(!isRegion);
                      }}
                      key={i}
                      href={region.path}
                      className={isActive(region.path) ? scss.active : ""}
                    >
                      {region.name}
                    </Link>
                  ))}
                </div>
              )}
            </nav>
            <div className={scss.block}>
              <div>
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  onClick={() => setIsRotate(!isRotate)}
                  name="lang"
                  id={scss.Lang}
                  value={lang}
                >
                  <option value="ru" hidden={lang === "ru"}>
                    ru
                  </option>
                  <option value="ar" hidden={lang === "ar"}>
                    ar
                  </option>
                  <option value="en" hidden={lang === "en"}>
                    en
                  </option>
                </select>
                <img
                  style={{
                    transform: isRotate ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.1s ease-in-out",
                  }}
                  src={down.src}
                  alt="arrow down"
                />
              </div>
              <button>{t("Регистрация", "التسجيل", "Sign up")}</button>
            </div>
          </>
        ) : (
          <>
            <div className={scss.block2}>
              <button>{t("Регистрация", "التسجيل", "Sign up")}</button>
              <img
                onClick={() => setIsShow(!isShow)}
                src="images/Vector.png"
                alt="menu-burger"
              />
            </div>
            {isShow && (
              <div className={scss.modal}>
                <nav>
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={isActive(item.path) ? scss.active : ""}
                    >
                      {t(item.name.ru, item.name.ar, item.name.en)}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
