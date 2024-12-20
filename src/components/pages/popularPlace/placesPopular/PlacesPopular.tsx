"use client"
import UseTranslate from "@/ui/Translate"
import scss from "./Places.module.scss"
import imgItem from "@/images/image 956.jpg"
import imgRight from "@/images/Arrow_alt_lright.png"
import imgHeart from "@/images/Vector.png"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useMemo, useState } from "react"

interface CardType  {
    id: number;
    title: string;
    rating: number;
    reviews: number
}
type TabsDataType = Record<number, CardType[]>;


const PlacesPopular = () => {
    const {region} = useParams()
    const {t} = UseTranslate()
    const [activeTab, setActiveTab] = useState(1);

    const allCards: CardType[] = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        title: 'Balykchy '+i,
        rating: 4.5,
        reviews: 23434,
    }));

    const CARDS_PER_TAB = 3;
    const tabsData: TabsDataType = useMemo(() => {

      const result: TabsDataType = {};
      const totalTabs = Math.ceil(allCards.length / CARDS_PER_TAB);
      
      for (let i = 0; i < totalTabs; i++) {
        const startIndex = i * CARDS_PER_TAB;
        result[i + 1] = allCards.slice(startIndex, startIndex + CARDS_PER_TAB);
      }
      
      return result;
    }, []);
    console.log(tabsData);
    
  
    const totalTabs = Object.keys(tabsData).length;

    return (
        <section id={scss.Places}>
            <div className="container">
                <h2>{t("","","")}</h2>
                <div className={scss.list}>
                    {tabsData[activeTab].map((item) => (
                        <div key={item.id} className={scss.item}>
                            <img src={imgItem.src} alt="" />
                            <div className={scss.block}>
                                <h6>{t("","",item.title)}</h6>
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
                <div className={scss.tabs}>
                    {Array.from({length: totalTabs}, (_,i) => i + 1).map((el,i) => (
                        <button 
                        style={{background: activeTab === el ? '#3C5F63' : 'transparent'}}
                        key={el}
                        onClick={() => setActiveTab(el)}> {el}</button>
                    ))
                    
                    }
                </div>

            </div>
        </section>
    )
}

export default PlacesPopular