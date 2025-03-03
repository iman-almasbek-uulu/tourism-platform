"use client";
import scss from './Region.module.scss';

import groupPng from "@/images/Group.png"

import UseTranslate from '@/ui/Translate';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { RegionData } from '@/redux/slices/types';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { fetchRegions } from '@/redux/slices/regionsSlice';
import { formatString } from '@/components/utils/utils';

const Region = () => {
    const { t } = UseTranslate();
    const pathName = usePathname();
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const { regions, error, loading } = useSelector((state: RootState) => state.regions);
    const currentLang = useSelector((state: RootState) => state.language.currentLang);
    const routeName = pathName.split("/")[1];

    useEffect(() => {
        dispatch(fetchRegions());
    }, [dispatch, currentLang]); 
    const filteredRegion = regions.find((region: RegionData) =>
        region.region_category.toLowerCase().replaceAll(" ", "") === routeName.toLowerCase().replaceAll(" ", "")
    );

    useEffect(() => {
        if (!filteredRegion) {
            router.push("/404");
        }
    }, [filteredRegion, router]);

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {filteredRegion ? (
                <section id={scss.Region}>
                    <div className="container">
                        <div className={scss.region}>
                            <div className={scss.img}>
                                <img src={filteredRegion.region_image} alt="" />
                                <div className="">
                                    <img src={groupPng.src} alt="temperature" />
                                    <span>26°C</span>
                                </div>
                            </div>

                            <div className={scss.block}>    
                                        <h2>{formatString(filteredRegion.region_name)}</h2>
                                        <p>{
                                            filteredRegion.region_description.slice(0, 470) + "..."
                                        }</p>

                            </div>
                        </div>
                    </div>
                </section>

            ) : (
                <p>{t("Регион не найден", "المنطقة غير موجودة", "Region not found")}</p>
            )}

        </>
    );
};

export default Region;
