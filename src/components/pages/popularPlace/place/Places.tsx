import UseTranslate from '@/ui/Translate';
import scss from './Places.module.scss'
import groupPng from "@/images/Group.png"
import imgCholpon from "@/images/cholpon.jpg"

const Places = () => {

    const {t} = UseTranslate()

    return (
        <section id={scss.Places}>
            <div className="container">
            <div className={scss.region}>
                    <div className={scss.img}>
                        <img src={imgCholpon.src} alt="" />
                        <div className="">
                            <img src={groupPng.src} alt="temperature" />
                            <span>26^G</span>
                        </div>
                    </div>
                    <div className={scss.block}>    
                        <h2>{t("","","Cholpon-Ata ")}</h2>
                        <p>{t(
                            ``,
                            ``,
                            `Cholpon-Ata is the most famous resort town on the shore of Lake Issyk-Kul. Once upon a time, caravans of the Great Silk Road passed through Cholpon-Ata. Today, tens of thousands of tourists from all over the CIS come to Cholpon-Ata. The city is famous for its clean sandy beaches and transparent lake.
                            The best time to visit Cholpon-Ata is from mid–June to September. `,
                            
                        )}</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}


export default Places;