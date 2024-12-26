
"use client"
import { formatString } from '@/components/utils/utils';
import scss from './Gallery.module.scss';
import hotelImg from "@/images/hotel.jpg"
import imgHeart from "@/images/Vector.png"
import UseTranslate from '@/ui/Translate';
import imgMetka from "@/images/metka.png"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { getApiUrl } from '@/ui/getApi';
import { useEffect } from 'react';
import { fetchGallery } from '@/redux/slices/gallerySlices/gallerySlice';


const Gallery = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {gallery, error, loading} = useSelector((state: RootState) => state.gallery)
    const {t} = UseTranslate()
    useEffect(() => {
        dispatch(fetchGallery())
    },[dispatch])
    console.log(getApiUrl());
    
    
    return (
        <>
            {loading && <h1>Loading</h1>}
            {error && <h1>{error}</h1>}
            <section id={scss.Gallery}>
                <div className="container">
                <div className={scss.list}>
                                {gallery.map((el,i) => (
                                    <div key={i} className={scss.item}>
                                        <img src={el.gallery_image} alt="popular place" />
                                        <div className={scss.block}>
                                            <h6>{ el?.gallery_name}</h6>
                                            <div>
                                                <span className={scss.grade}>{el.rating_count}</span>
                                                <span className={scss.stars}>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </span>
                                                <span className={scss.review}>
                                                    {el.avg_rating} {t("","","reviews")}
                                                </span>
                                            </div>
                                            <span className={scss.metka}>
                                                <img src={imgMetka.src} alt="" />
                                                <span>{el.address}</span>
                                                <span>{t("",""," Karakol 722360")}</span>
                                            </span>
                                        </div>
                                        <img className={scss.heart} src={imgHeart.src} alt="" />

                                    </div>
                                ))}
                            </div>
                </div>
            </section>
        
        </>
    );
};

export default Gallery;