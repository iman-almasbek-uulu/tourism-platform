"use client"
import Link from 'next/link';
import scss from './Header.module.scss';
import UseTranslate from '@/ui/Translate';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import {useWindowSize} from "react-use" 
import { useState } from 'react';
const Header = () => {
    const {width} = useWindowSize()
    const {t, changeLanguage} = UseTranslate()
    const lang = useSelector<RootState, string>((state) => state.language.currentLang)
    const [isShow, setIsShow] = useState<boolean>(false)
    
    return (
        <header id={scss.Header}>
            <div className={`${scss.container} container`}>
                <div className={scss.logo}>LOGO</div>
                {width > 834 
                    ? <>

                        <nav>
                            <Link href="/">{t("Главная","الرئيسية","Home",)}</Link>
                            <Link href="/regions">{t("регионы","المناطق","regions",)}</Link>
                            <Link href="/culture">{t("культура","الثقافة","culture",)}</Link>
                            <Link href="/gallery">{t("галерея","معرض","gallery",)}</Link>
                            <Link href="/routes">{t("маршруты","الطرق","routes",)}</Link>
                        </nav>
                        <div className={scss.block}>
                            <select
                                    onChange={(e) => changeLanguage(e.target.value)}
                                    name="lang"
                                    id={scss.Lang}
                                    value={lang}
                            >
                                    <option value="ru" hidden={lang === "ru"}>ru</option>
                                    <option value="ar" hidden={lang === "ar"}>ar</option>
                                    <option value="en" hidden={lang === "en"}>en</option>
                                    <option value="zh" hidden={lang === "zh"}>zh</option>
                            </select>
                            <button>{t("Регистрация","التسجيل","Sign up")}</button>
                        </div>
                    </>
                    : <>
                        <div className={scss.block2}>
                            <button>{t("Регистрация","التسجيل","Sign up")}</button>
                            <img onClick={() => setIsShow(!isShow)} src="images/Vector.png" alt="menu-burger" />
                        </div>
                        {isShow && <div className={scss.modal}>
                            <nav>
                                <Link href="/">{t("Главная","الرئيسية","Home",)}</Link>
                                <Link href="/regions">{t("регионы","المناطق","regions",)}</Link>
                                <Link href="/culture">{t("культура","الثقافة","culture",)}</Link>
                                <Link href="/gallery">{t("галерея","معرض","gallery",)}</Link>
                                <Link href="/routes">{t("маршруты","الطرق","routes",)}</Link>
                                <select
                                    onChange={(e) => changeLanguage(e.target.value)}
                                    name="lang"
                                    id={scss.Lang}
                                    value={lang}
                                >
                                    <option value="ru" hidden={lang === "ru"}>ru</option>
                                    <option value="ar" hidden={lang === "ar"}>ar</option>
                                    <option value="en" hidden={lang === "en"}>en</option>
                                    <option value="zh" hidden={lang === "zh"}>zh</option>
                                </select>

                            </nav>
                        </div>
                        }

                    </>
                }
            </div>

        </header>
    );
};

export default Header;