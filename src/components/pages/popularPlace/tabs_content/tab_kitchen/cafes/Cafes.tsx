import UseTranslate from '@/ui/Translate';
import scss from './Cafes.module.scss';
import { FC, useEffect, useState } from 'react';
import { Cafe } from '@/redux/slices/popularPlacesSlices/types';
import Stars from '@/ui/stars/Stars';
interface propsType {
    kitchens: Cafe[];
    loading: boolean;
    error: string | any;
    isCurrent: number | null; // Разрешаем null
    setIsCurrent: (id: number | null) => void; // Изменяем тип функции
}
const Cafes: FC<propsType> = ({kitchens,loading,error,setIsCurrent}) => {
    const {t} = UseTranslate()
    const [isLimit, setIsLimit] = useState<number>(1)



    const data = kitchens.map((el,i) => (
        <div onClick={() => setIsCurrent(el.id)} key={i} className={scss.item}>
            <img src={el.main_image} alt="" />
            <div className={scss.info}>
                <h6 className={scss.title}>{el.kitchen_name}</h6>
                <div className={scss.stars_review}>
                    <Stars rating={el.average_rating}/>
                    <p>Reviews: {el.rating_count}</p>
                </div>
                <div className={scss.prices}>
                    {
                        `$${el.price} - $${el.price}, ${el.type_of_cafe.map(item => item+", ")}`
                    }
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