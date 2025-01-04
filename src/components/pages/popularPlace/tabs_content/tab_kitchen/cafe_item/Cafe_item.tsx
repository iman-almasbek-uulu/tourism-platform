import UseTranslate from '@/ui/Translate';
import scss from './Cafe_item.module.scss';
import hotelImg from "@/images/hotel.jpg";
import icon from "@/images/Icon.png"
import icon2 from "@/images/Icon2.png"
import icon4 from "@/images/Icon4.png"
import icon5 from "@/images/Icon5.png"
import like from "@/images/like2.png"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { FC, useEffect, useState } from 'react';
import { fetchKitchenItemSlice } from '@/redux/slices/popularPlacesSlices/kitchenItemSlice';
import { Cafe } from '@/redux/slices/popularPlacesSlices/types';
import { usePathname } from 'next/navigation';
interface propsType {    
    kitchens: Cafe[];
    isCurrent: number
}
const Cafe_item: FC<propsType> = ({kitchens,isCurrent}) => {
    const dispatch = useDispatch<AppDispatch>()
    const {t} = UseTranslate()
    const {kitchenItem,loading,error} = useSelector((state: RootState) => state.kitchenItem) 
    useEffect(() => {
        dispatch(fetchKitchenItemSlice({id: isCurrent}))
    },[dispatch])    
    const pathName = usePathname();
    const routeName = pathName.split("/")[2];
     return (
        <div className={scss.cafe_item}>
            <h4>{kitchenItem?.kitchen_name}</h4>
            <div className={scss.imgs}>
                {kitchenItem?.kitchen_image.map(el => <img src={el.image} alt=''/>)}
            </div>
            <div className={scss.info}>
                <div>
                    <div className={scss.left}>
                            <h5>{t("Рейтинги и отзывы","التقييمات والمراجعات","Ratings and reviews")}</h5>
                            
                            <div className={scss.stars_review}>
                                <div className={scss.grades}>{kitchenItem?.average_rating}</div>
                                <div className={scss.stars}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <p>{kitchenItem?.rating_count} {t("отзывы","مراجعات","reviews")}</p>
                            </div>

                            <div className={scss.assess}>
                                <p>№ 1 <span>{t("","",`of ${kitchens.length} Restaurants in ${routeName}`)}</span></p>
                                <p> {t("","","ASSESSMENTS")}</p>
                            </div>

                            <ul>
                                <li>
                                    <div>
                                        <img src={icon.src} alt="" />
                                        <span>{t("","","Nutrition")}</span>
                                    </div>
                                    <div>
                                        <div className={scss.stars}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={icon2.src} alt="" />
                                        <span>{t("","","Service")}</span>
                                    </div>
                                    <div className={scss.stars}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={icon4.src} alt="" />
                                        <span>{t("","","Price quality")}</span>
                                    </div>
                                    <div>
                                        <div className={scss.stars}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src={icon5.src} alt="" />
                                        <span>{t("","","Atmosphere")}</span>
                                    </div>
                                    <div>
                                        <div className={scss.stars}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            
                    </div>
                </div>
                <div>
                    <div className={scss.middle}>
                        <h5>{t("Более подробно","أكثر تفصيلاً","More detailed")}</h5>
                        <div>
                            <p className={scss.title}>{t(" Диапазон цен","نطاق السعر","PRICE RANGE")}</p>
                            <p className={scss.descr}>{`$${kitchenItem?.price} - $${kitchenItem?.price}`}</p>
                        </div>
                        <div>
                            <p className={scss.title}>{t("Специализированное меню","قائمة متخصصة","Specialized menu")}</p>
                            <p className={scss.descr}>{kitchenItem?.specialized_menu}</p>
                        </div>
                        <div>
                            <p className={scss.title}>{t("Время приема пищи","وقت الوجبة","Meal time")}</p>
                            <p className={scss.descr}>{kitchenItem?.meal_time.map(item => item+", ")}</p>
                        </div>
                        <div>
                            <p className={scss.title}>{t("Показать всю информацию","عرض جميع المعلومات","Show all information")}</p>
                            <p className={scss.descr}>{t("","","services, description")}</p>
                        </div>

                    </div>
                </div>
                <div>
                    <div className={scss.right}>
                        <h5>{t("Местоположение и контактные данные","تفاصيل الموقع ووسائل الاتصال","Location and contact details")}</h5>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cafe_item;