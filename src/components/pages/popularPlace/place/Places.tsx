import UseTranslate from '@/ui/Translate';
import scss from './Places.module.scss'
import groupPng from "@/images/Group.png"
import imgCholpon from "@/images/cholpon.jpg"
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPopularPlaces } from '@/redux/slices/popularPlacesSlice';
import { fetchPopularPlaceItem } from '@/redux/slices/popularPlaceItemSlice';
import { usePathname } from 'next/navigation';
import { formatString } from '@/components/utils/utils';

const Places = () => {
    const {t} = UseTranslate()
    const dispatch = useDispatch<AppDispatch>()
    const { popularPlaces } = useSelector((state: RootState) => state.popularPlaces)
    const { popularPlace, error, loading } = useSelector((state: RootState) => state.popularPlaceItem)
    const pathName = usePathname();
    const routeName = pathName.split("/")[2];

    
    useEffect(() => {
        dispatch(fetchPopularPlaces());
    }, [dispatch]);

    const foundIndex = popularPlaces.findIndex((item) => item.popular_name.replaceAll(" ","").toLowerCase() === routeName.replaceAll(" ","").toLowerCase());

    const id: number | null = foundIndex !== -1 ? foundIndex + 1 : null;

    useEffect(() => {
        if (id !== null) {
            dispatch(fetchPopularPlaceItem({ id }));
        }
    }, [dispatch, id])

    

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {popularPlace ? (
                <section id={scss.Places}>
                    <div className="container">
                        <div className={scss.region}>
                            <div className={scss.img}>
                                <img src={popularPlace.popular_image} alt="" />
                                <div className="">
                                    <img src={groupPng.src} alt="temperature" />
                                    <span>26^G</span>
                                </div>
                            </div>
                            <div className={scss.block}>    
                                <h2>{formatString(t("","",popularPlace.popular_name))}</h2>
                                <p>{t(
                                    ``,
                                    ``,
                                    popularPlace.description.slice(0, 470) + "..."
                                )}</p>
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                <p>{t("","","Place not found")}</p>
            )}
        </>
    );
};


export default Places;