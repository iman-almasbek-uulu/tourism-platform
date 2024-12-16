"use client"
import scss from './Region.module.scss';
import imgBlock from "@/images/Rectangle 142.jpg"
import groupPng from "@/images/Group.png"
import UseTranslate from '@/ui/Translate';
const Region = () => {
    const {t} = UseTranslate()
    return (
        <section id={scss.Region}>
            <div className="container">
                <div className={scss.region}>
                    <div className={scss.img}>
                        <img src={imgBlock.src} alt="" />
                        <div className="">
                            <img src={groupPng.src} alt="temperature" />
                            <span>26^G</span>
                        </div>
                    </div>
                    <div className={scss.block}>    
                        <h2>{t("","","Issyk-Kul")}</h2>
                        <p>{t(
                            ``,
                            ``,
                            `Issyk-Kul is an endorheic lake (i.e., without outflow) in the Northern Tian Shan mountains 
                            in Eastern Kyrgyzstan. It is the seventh-deepest lake in the world, the tenth-largest lake 
                            in the world by volume and the second-largest saline lake after the Caspian Sea. Issyk-Kul 
                            means "warm lake" in the Kyrgyz language; although it is located at a lofty elevation of 1,607 
                            metres and subject to severe cold during winter, it rarely freezes, due to the salinity.`,
                            
                        )}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Region;