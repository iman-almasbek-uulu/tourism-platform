"use client"
import UseTranslate from "@/ui/Translate";
import scss from "./Try.module.scss"
import food1 from "@/images/food.jpg"
import food2 from "@/images/food2.jpg"
import food3 from "@/images/food3.jpg"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { fetchRegions } from "@/redux/slices/regionsSlice";
import { RegionData } from "@/redux/slices/types";
import { formatString } from "@/components/utils/utils";
const Try = () => {

    const {t} = UseTranslate()

    const pathName = usePathname();
    const dispatch = useDispatch<AppDispatch>();
    const { regions, error, loading } = useSelector((state: RootState) => state.regions);
    const routeName = pathName.split("/")[1];

    useEffect(() => {
        dispatch(fetchRegions());
    }, [dispatch]);

    const filteredRegion = regions.find((region: RegionData) => 
        region.region_name.toLowerCase().replaceAll(" ", "") === routeName.toLowerCase().replaceAll(" ", "")
    );

    let [currentContent, setCurrentContent] = useState<number>(0)


    

    return (
        <>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {filteredRegion ? (
            <section id={scss.Try}>
                <div className="container">
                    <h2>{t("","",`What to try in ${filteredRegion.region_name}?`)}</h2>
                    <div className={scss.content}>
                            <div className={scss.item}>
                                <h4>{t(
                                    '',
                                    '',
                                    filteredRegion?.What_to_try[currentContent]?.to_name
                                )}</h4>
                                <p>{t(
                                    '',
                                    '',
                                    filteredRegion?.What_to_try[currentContent]?.first_description,
                                )}</p>
                            </div>
                            <div className={scss.imgs}>
                                    <img src={filteredRegion?.What_to_try[currentContent]?.image} alt="" />
                                <div>
                                    <div className={scss.bg}>
                                        <img src={filteredRegion?.What_to_try[currentContent]?.image} alt="" />
                                    </div>
                                    {filteredRegion.What_to_try.map((el,i) => (
                                        i !== currentContent ?  (
                                            <div key={i} className={scss.bg}>
                                                <div></div>
                                                <img src={el.image} alt="" />
                                            </div>
                                        ) : ""
                                    ))}
                                </div>
                            </div>
                            <div className={scss.item}>
                                <h4>{t(
                                    "Что входит в состав блюда",
                                    "ما الذي يحتويه الطبق",
                                    "What is included in the dish"
                                )}</h4>
                                <p>
                                    {t(
                                        '',
                                        '',
                                        filteredRegion?.What_to_try[currentContent]?.second_description,
                                    )}    
                                </p>
                            </div>
                    </div>
                    <div className={scss.tabs}>
                        <button disabled={currentContent === 0} onClick={() => setCurrentContent(--currentContent)}>-</button>
                        <div className={scss.index}>{
                            filteredRegion.What_to_try.map((el,i) => (
                            <button
                                key={i}
                                style={i === currentContent ? { background: "#004A60", borderRadius: "30px", color: "white" } : undefined} 
                                onClick={() => setCurrentContent(i)}
                            >
                                {i + 1}
                            </button>
                            ))    
                        }</div>
                        <button disabled={currentContent === filteredRegion.What_to_try.length - 1} onClick={() => setCurrentContent(++currentContent)}>+</button>
                    </div>
                </div>
            </section>
        ): (
            ""
        )
        }
        </>
    )
}

export default Try;