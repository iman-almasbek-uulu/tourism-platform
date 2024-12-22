"use client"
import Link from 'next/link';
import scss from './Header.module.scss';
import UseTranslate from '@/ui/Translate';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import {useWindowSize} from "react-use" 
import { useState } from 'react';
import down from "@/images/down.png"
import path from 'path';



const Header = () => {
    const dispatch = useDispatch<AppDispatch>()
    // const {regions} = useSelector((state:))
    const {width} = useWindowSize()
    const {t, changeLanguage} = UseTranslate()
    const lang = useSelector<RootState, string>((state) => state.language.currentLang)
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isRegion, setIsRegion] = useState<boolean>(false)
    const [isRotate, setIsRotate] = useState<boolean>(false)

    const navItems = [
        {name: {
            ru: "Главная",
            ar: "الرئيسية",
            en: "Home",
        },
        path: "/",
        },
        {name: {
            ru: "регионы",
            ar: "المناطق",
            en: "regions",
        },
        path: "/regions",

        },
        {
            name: {
                ru: "культура",
                ar: "الثقافة",
                en: "culture",
            },
            path: "/culture",
        },
        {
            name: { 
                ru: "галерея",
                ar: "معرض",
                en: "gallery",
            },
            path: "/gallery",
        },
        {
            name: {
                ru: "маршруты",
                ar: "الطرق",
                en: "routes",
            },
            path: "/routes",
        }, 
    ] 

    return (
        <header id={scss.Header}>
            <div className={`${scss.container} container`}>
                <div className={scss.logo}>LOGO</div>
                {width > 834 
                    ? <>

                        <nav>
                            <Link href="/">{t("Главная","الرئيسية","Home",)}</Link>
                            <div onClick={() => setIsRegion(!isRegion)} className={scss.link} >{t("регионы","المناطق","regions",)}
                                {
                                isRegion ?
                                <div className={scss.links}>
                                    <Link onClick={() => setIsRegion(!isRegion)} href={`/talas`}>{t("","","talas")}</Link>
                                    <Link onClick={() => setIsRegion(!isRegion)} href={`/naryn`}>{t("","","naryn")}</Link>
                                    <Link onClick={() => setIsRegion(!isRegion)} href={`/chui`}>{t("","","chui")}</Link>
                                    <Link onClick={() => setIsRegion(!isRegion)} href={`/osh`}>{t("","","osh")}</Link>
                                </div>
                                :
                                ""
                                }
                            </div>
                            <Link href="/culture">{t("культура","الثقافة","culture",)}</Link>
                            <Link href="/gallery">{t("галерея","معرض","gallery",)}</Link>
                            <Link href="/routes">{t("маршруты","الطرق","routes",)}</Link>
                        </nav>
                        <div className={scss.block}>
                            <div className="">
                                <select
                                        onChange={(e) => changeLanguage(e.target.value)}
                                        onClick={() => setIsRotate(!isRotate)}
                                        name="lang"
                                        id={scss.Lang}
                                        value={lang}
                                >
                                        <option value="ru" hidden={lang === "ru"}>ru</option>
                                        <option value="ar" hidden={lang === "ar"}>ar</option>
                                        <option value="en" hidden={lang === "en"}>en</option>
                                </select>
                                <img         
                                    style={{
                                        transform: isRotate ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.1s ease-in-out', 
                                    }} 
                                    src={down.src} alt="arrow down" 
                                />
                            </div>
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