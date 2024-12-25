import UseTranslate from '@/ui/Translate';
import scss from './Tab_kitchen.module.scss';
import Cafes from './cafes/Cafes';
import Cafe_item from './cafe_item/Cafe_item';
const Tab_kitchen = () => {

    const {t} = UseTranslate()
    return (
        <div className={scss.kitchen}>
            <Cafes />
            <Cafe_item />
        </div>
    );
};

export default Tab_kitchen;