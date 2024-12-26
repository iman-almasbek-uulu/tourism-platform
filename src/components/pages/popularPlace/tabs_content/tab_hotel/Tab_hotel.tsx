import React, { useEffect, useState } from "react";
import scss from "./Tab_hotel.module.scss";
import UseTranslate from "@/ui/Translate";
import hotelImg from "@/images/hotel.jpg";
import imgRight from "@/images/Arrow_alt_lright.png";
import imgHeart from "@/images/Vector.png";
import imgLike from "@/images/like.png";
import imgShare from "@/images/share.png";
import imgBed from "@/images/bed.png";
import { formatString } from "@/components/utils/utils";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "@/redux/slices/popularPlacesSlices/hotelsSlice";
import { fetchHotelItemSlice } from "@/redux/slices/popularPlacesSlices/hotelItemSlice";
const Tab_hotel = () => {
  const { t } = UseTranslate();
  const dispatch = useDispatch<AppDispatch>();
  const {hotels, error, loading} = useSelector((state: RootState) => state.hotels);
  const {hotelItemSlice} = useSelector((state: RootState) => state.hotelItem);
    useEffect(() => {
        dispatch(fetchHotels());
    }, [dispatch]);
    const [isCurrent, setIsCurrent] = useState<string>("");
    const indexHotel = hotels.findIndex((item) => item.name.replaceAll(" ","").toLowerCase() === isCurrent.replaceAll(" ","").toLowerCase());
    const id: number | null = indexHotel !== -1 ? indexHotel + 1 : null;
    useEffect(() => {
        if (id !== null) {
            dispatch(fetchHotelItemSlice({ id }));
        }
    }, [dispatch, id])
    
  return (
    <>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {hotels ? (
                <div className={scss.hotel}>
                <h4>{t("", "", "The best hotels nearby")}</h4>
                <div className={scss.list}>
                  {hotels.map((el, index) => (
                      <div key={index} className={scss.item}>
                      <img src={hotelImg.src} alt="popular place" />
                      <div className={scss.block}>
                          <h6>{formatString(t("", "", el.name))}</h6>
                          <div>
                          <span className={scss.stars}>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                          </span>
                          <span className={scss.review}>23 434 reviews</span>
                          </div>
                      </div>
                      <img className={scss.heart} src={imgHeart.src} alt="" />
                      <button onClick={() => setIsCurrent(el.name)}>
                          <img className={scss.right} src={imgRight.src} alt="" />
                      </button>
                      </div>
                  ))}
                </div>
                  {hotelItemSlice ? (
                    <div className={scss.hotel_item}>
                        <h4>{t("", "", hotelItemSlice.name)}</h4>
                        <div className={scss.imgs}>
                            <img src={hotelImg.src} alt="" />
                            <img src={hotelImg.src} alt="" />
                            <img src={hotelImg.src} alt="" />
                            <img src={hotelImg.src} alt="" />
                        </div>
                        <div className={scss.info}>
                            <div className={scss.left}>
                                <div className={scss.titles}>
                                    <div className={scss.title}>
                                        <h5>{t("","","Well Furnished Apartment")}</h5>
                                        <p>{t("","","107 Przhevalsky str., Karakol 722360")}</p>
                                    </div>
                                    <div className={scss.links}>
                                        <button>
                                            <img src={imgLike.src} alt="" />
                                        </button>
                                        <button>
                                            <img src={imgShare.src} alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className={scss.list}>
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <div key={index}>   
                                            <img src={imgBed.src} alt="" />
                                            <span>{t("","","3 Bedrooms")}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={scss.descr}>
                                    <h6>{t("","","Apartment Description")}</h6>
                                    <p>{t("","","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")}</p>
                                </div>
                                <div className={scss.amen}>
                                    <h6>{t("","","Offered Amenities")}</h6>
                                    <div className={scss.amenities}>
                                        {Array.from({ length: 6 }).map((_, index) => (
                                            <div key={index}>
                                                <img src={imgBed.src} alt="" />
                                                <span>{t("","","Kitchen")}</span>
                                            </div>
                                        ))}
                                        <button>{t("","","Show All 10 Amenities")}</button>
                                    </div>
                                </div>
                                <div className={scss.safe}>
                                    <h6>{t("","","Safety and Hygiene")}</h6>
            
                                    <div className={scss.safe_list}>
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <div key={index}>
                                                <img src={imgBed.src} alt="" />
                                                <span>{t("","","Daily Cleaning")}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={scss.right}>
                                    <div className={scss.price}>$ 1000 - $ 2000</div>
                                    <ul>
                                        <li>{t("","","Short Period: $ 1000")}</li>
                                        <li>{t("","","Medium Period: $ 2000")}</li>
                                        <li>{t("","","Long Period: $ 2000")}</li>
                                    </ul>
                                    <button>{t("","","Show All 10 Amenities")}</button>
                                    <div className={scss.call}>
                                        <div><img src={imgBed.src} alt="" /><span>Property Inquiry</span></div>
                                        <div><img src={imgBed.src} alt="" /><span>Property Inquiry</span></div>
                                    </div>
                            </div>
            
                        </div>
                    </div>
                  ) : ''}
          
              </div>
        ) : (
            ""
        )}
    </>

  );
};

export default Tab_hotel;
