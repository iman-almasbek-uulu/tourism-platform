"use client"
import UseTranslate from "@/ui/Translate"
import scss from "./Places.module.scss"
import imgItem from "@/images/image 956.jpg"
import imgRight from "@/images/Arrow_alt_lright.png"
import imgHeart from "@/images/Vector.png"
import Link from "next/link"
import { useParams } from "next/navigation"
const Places = () => {
    const {region} = useParams()
    const {t} = UseTranslate()


    return (
        <section id={scss.Places}>
            <div className="container">
                <h2>{t("","","")}</h2>
                <div className={scss.list}>
                    {Array.from({length: 10}, (_,i) => (
                        <div key={i} className={scss.item}>
                            <img src={imgItem.src} alt="" />
                            <div className={scss.block}>
                                <h6>{t("","","Balykchy")}</h6>
                                <div>
                                    <span className={scss.grade}>4.5</span>
                                    <span className={scss.stars}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                    <span className={scss.review}>
                                        23 434 reviews
                                    </span>
                                </div>
                            </div>
                            <img className={scss.heart} src={imgHeart.src} alt="" />
                            <Link href={`/${region}/balykchy`}>
                                <img className={scss.right} src={imgRight.src} alt="" />
                            </Link>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Places