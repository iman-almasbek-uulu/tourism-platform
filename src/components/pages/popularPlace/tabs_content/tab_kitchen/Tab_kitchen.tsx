import UseTranslate from '@/ui/Translate';
import scss from './Tab_kitchen.module.scss';
import Cafes from './cafes/Cafes';
import Cafe_item from './cafe_item/Cafe_item';
import { fetchKitchens } from '@/redux/slices/popularPlacesSlices/kitchensSLice';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
export const Tab_kitchen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { kitchens, loading, error } = useSelector((state: RootState) => state.kitchens);
    const [currentId, setCurrentId] = useState<number | null>(null);

    useEffect(() => {
      dispatch(fetchKitchens());
    }, [dispatch]);
    useEffect(() => {
      if (kitchens.length > 0 && currentId === null) {
        setCurrentId(kitchens[0].id);
      }
    }, [kitchens, currentId]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div className={scss.kitchen}>
        <Cafes
          kitchens={kitchens}
          loading={loading}
          error={error}
          isCurrent={currentId}
          setIsCurrent={setCurrentId}
        />
        <Cafe_item kitchens={kitchens} isCurrent={currentId} />
      </div>
    );
  };

export default Tab_kitchen;