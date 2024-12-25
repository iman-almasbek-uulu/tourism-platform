import UseTranslate from '@/ui/Translate';
import scss from './Cafes.module.scss';
import imgHotel from "@/images/hotel.jpg" 
import { useState } from 'react';

const Cafes = () => {

    const {t} = UseTranslate()

    const lengths = 10
    const [isLimit, setIsLimit] = useState<number>(1)

    const data = Array.from({length:lengths}, (_,i) => (
        <div key={i} className={scss.item}>
            <img src={imgHotel.src} alt="" />
            <div className={scss.info}>
                <h6 className={scss.title}>{t("","","Ethno-cafe Dastorkon")}</h6>
                <div className={scss.stars_review}>
                    <div className={scss.stars}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <p>{t("","","Reviews: 13")}</p>
                </div>
                <div className={scss.prices}>
                    {t(
                        "",
                        "",
                        "$$ - $$$, Russian, Canadian"
                    )}
                </div>
            </div>

        </div>
    ))

    function splitArray(arr:any, size:any) {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
          result.push(arr.slice(i, i + size));
        }
        return result;
      }
      
      const dividedArray = splitArray(data, 4);
      

    return (
        <div className={scss.cafes}>

            <div className={scss.cafes_title}>
                <h4>{t("","","The best restaurants with reasonable prices")}</h4>
                <p onClick={() => setIsLimit(dividedArray.length)}>{t("","","Show all")}</p>
            </div>
            {
                dividedArray.slice(0, isLimit).map((item, index) => (                    
                    <div key={index} className={scss.list}>
                        {item.map((el: any) => (
                            el
                        ))}
                    </div>
                ))
            }
        </div>
    );
};

export default Cafes;