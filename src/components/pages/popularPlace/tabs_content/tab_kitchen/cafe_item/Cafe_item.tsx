import UseTranslate from '@/ui/Translate';
import scss from './Cafe_item.module.scss';
import hotelImg from "@/images/hotel.jpg";
import icon from "@/images/Icon.png"
import icon2 from "@/images/Icon2.png"
import icon4 from "@/images/Icon4.png"
import icon5 from "@/images/Icon5.png"
import like from "@/images/like2.png"

const Cafe_item = () => {
    const {t} = UseTranslate()
    return (
        <div className={scss.cafe_item}>
            <h4>{t("","","Ethno-cafe Dastorkon")}</h4>
            <div className={scss.imgs}>
                <img src={hotelImg.src} alt="" />
                <img src={hotelImg.src} alt="" />
                <img src={hotelImg.src} alt="" />
                <img src={hotelImg.src} alt="" />
            </div>
            <div className={scss.info}>
                <div className={scss.left}>
                        <h5>{t("Рейтинги и отзывы","التقييمات والمراجعات","Ratings and reviews")}</h5>
                        
                        <div className={scss.stars_review}>
                            <div className={scss.grades}>4.5</div>
                            <div className={scss.stars}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <p>298 {t("отзывы","مراجعات","reviews")}</p>
                        </div>

                        <div className={scss.assess}>
                            <p>№ 1 <span>{t("","","of 23 Restaurants in Cholpon-Ata")}</span></p>
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
                <div className={scss.middle}>
                    <h5>{t("Более подробно","أكثر تفصيلاً","More detailed")}</h5>
                    <div>
                        <p className={scss.title}>{t(" Диапазон цен","نطاق السعر","PRICE RANGE")}</p>
                        <p className={scss.descr}>{t("","","")}</p>
                    </div>
                    <div>
                        <p className={scss.title}>{t("Специализированное меню","قائمة متخصصة","Specialized menu")}</p>
                        <p className={scss.descr}>{t("","","Подходит для вегетарианцев, Для веганов")}</p>
                    </div>
                    <div>
                        <p className={scss.title}>{t("Время приема пищи","وقت الوجبة","Meal time")}</p>
                        <p className={scss.descr}>{t("","","Breakfast, Lunch, Dinner, Brunch, Open Late,")}</p>
                    </div>
                    <div>
                        <p className={scss.title}>{t("Показать всю информацию","عرض جميع المعلومات","Show all information")}</p>
                        <p className={scss.descr}>{t("","","services, description")}</p>
                    </div>

                </div>
                <div className={scss.right}>
                    <h5>{t("Местоположение и контактные данные","تفاصيل الموقع ووسائل الاتصال","Location and contact details")}</h5>

                </div>
            </div>
        </div>
    );
};

export default Cafe_item;