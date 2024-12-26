"use client"
import UseTranslate from "@/ui/Translate"
import scss from "./Places.module.scss"
import imgItem from "@/images/image 956.jpg"
import imgRight from "@/images/Arrow_alt_lright.png"
import imgHeart from "@/images/Vector.png"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/redux/store"
import { fetchRegions } from "@/redux/slices/regionsSlice"
import { PopularPlace, RegionData } from "@/redux/slices/types"


type TabsDataType = Record<number, PopularPlace[]>;


const PlacesPopular = () => {
    const {region} = useParams()
    const {t} = UseTranslate()
    const [activeTab, setActiveTab] = useState(1);
    const pathName = usePathname();
    const dispatch = useDispatch<AppDispatch>();
    const { regions, error, loading } = useSelector((state: RootState) => state.regions);
    const routeName = pathName.split("/")[1];

    useEffect(() => {
        dispatch(fetchRegions());
    }, [dispatch]);

    const filteredRegion = regions.find((region: RegionData) => 
        region.region_category.toLowerCase().replaceAll(" ", "") === routeName.toLowerCase().replaceAll(" ", "")
    );
    





    const CARDS_PER_TAB = 3;
    const tabsData: TabsDataType = useMemo(() => {
        if (!filteredRegion || !filteredRegion.popular_places) {
            // Если данные отсутствуют, возвращаем пустой объект
            return {};
        }
    
        const result: TabsDataType = {};
        const totalTabs = Math.ceil(filteredRegion.popular_places.length / CARDS_PER_TAB);
    
        for (let i = 0; i < totalTabs; i++) {
            const startIndex = i * CARDS_PER_TAB;
            result[i + 1] = filteredRegion.popular_places.slice(startIndex, startIndex + CARDS_PER_TAB);
        }
    
        return result;
    }, [filteredRegion]);
    
    
  
    const totalTabs = Object.keys(tabsData).length;

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {filteredRegion ? (
                <section id={scss.Places}>
                    <div className="container">
                        <h2>{t("","","")}</h2>
                        <div className={scss.list}>
                            {tabsData[activeTab].map((item,i) => (
                                <div key={i} className={scss.item}>
                                    <img src={item.popular_image} alt="" />
                                    <div className={scss.block}>
                                        <h6>{t("","",item.popular_name)}</h6>
                                        <div>
                                            <span className={scss.grade}>{item.avg_rating}</span>
                                            <span className={scss.stars}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </span>
                                            <span className={scss.review}>
                                                {item.rating_count} reviews
                                            </span>
                                        </div>
                                    </div>
                                    <img className={scss.heart} src={imgHeart.src} alt="" />
                                    <Link href={`/${routeName}/${item.popular_name}`}>
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
            ) : (
                ""
            )}
        </>
    )
}

export default PlacesPopular