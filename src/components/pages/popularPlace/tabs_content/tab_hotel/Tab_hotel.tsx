import React, { useEffect, useState } from "react";
import scss from "./Tab_hotel.module.scss";
import UseTranslate from "@/ui/Translate";
import hotelImg from "@/images/hotel.jpg";
import imgRight from "@/images/Arrow_alt_lright.png";
import imgHeart from "@/images/Vector.png";
import imgLike from "@/images/like.png";
import imgShare from "@/images/share.png";
import imgBed from "@/images/bed.png";
import imgContact from "@/images/contact.png";
import imgProper from "@/images/proper.png";
import { formatString } from "@/components/utils/utils";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "@/redux/slices/popularPlacesSlices/hotelsSlice";
import { fetchHotelItemSlice } from "@/redux/slices/popularPlacesSlices/hotelItemSlice";
import { usePathname } from "next/navigation";
import Stars from "@/ui/stars/Stars";

const Tab_hotel = () => {
  const { t } = UseTranslate();
  const dispatch = useDispatch<AppDispatch>();
  const { hotels, error, loading } = useSelector((state: RootState) => state.hotels);
  const { hotelItemSlice } = useSelector((state: RootState) => state.hotelItem);
  const pathName = usePathname();
  const routeName = pathName.split("/")[2];
  
  const [isCurrent, setIsCurrent] = useState<number | null>(null);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  useEffect(() => {
    if (hotels.length > 0 && isCurrent === null) {
      setIsCurrent(hotels[0].id);
    }
  }, [hotels, isCurrent]);

  useEffect(() => {
    if (isCurrent !== null) {
      dispatch(fetchHotelItemSlice({ id: isCurrent }));
    }
  }, [isCurrent, dispatch]);

  const filteredHotels = hotels.filter((el) => 
    el.popular_places.replaceAll(" ", "").toLocaleLowerCase() === 
    routeName.replaceAll(" ", "").toLocaleLowerCase()
  );

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {filteredHotels.length > 0 ? (
        <div className={scss.hotel}>
          <h4>{t("", "", "The best attractions nearby")}</h4>
          <div className={scss.list}>
            {hotels.map((el, index) => (
              <div key={index} className={scss.item}>
                <img src={hotelImg.src} alt="popular place" />
                <div className={scss.block}>
                  <h6>{formatString(t("", "", el.name))}</h6>
                  <div>
                    <Stars rating={el.average_rating}/>
                    <span className={scss.review}>{el.rating_count} reviews</span>
                  </div>
                </div>
                <img className={scss.heart} src={imgHeart.src} alt="" />
                <button onClick={() => setIsCurrent(el.id)}>
                  <img className={scss.right} src={imgRight.src} alt="" />
                </button>
              </div>
            ))}
          </div>
          {hotelItemSlice ? (
            <div className={scss.hotel_item}>
              <h4>{t("", "", hotelItemSlice.name)}</h4>
              <div className={scss.imgs}>
                {hotelItemSlice.hotel_image.map((img,i) => <img key={i} src={img}/>)}
              </div>
              <div className={scss.info}>
                <div className={scss.left}>
                  <div className={scss.titles}>
                    <div className={scss.title}>
                      <h5>{t("", "", "Well Furnished Apartment")} </h5>
                      <p>{hotelItemSlice.address}</p>
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
                      <div>
                        <img src={imgBed.src} alt="" />
                        <span>{hotelItemSlice.bedroom} Bedrooms</span>
                      </div>
                      <div>
                        <img src={imgBed.src} alt="" />
                        <span>{hotelItemSlice.bathroom} Bathrooms</span>
                      </div>
                      <div>
                        <img src={imgBed.src} alt="" />
                        <span>{hotelItemSlice.cars}cars/{hotelItemSlice.bikes}bikes</span>
                      </div>
                      <div>
                        <img src={imgBed.src} alt="" />
                        <span>{hotelItemSlice.pets} Pets Allowed</span>
                      </div>
                  </div>
                  <div className={scss.descr}>
                    <h6>{t("", "", "Apartment Description")}</h6>
                    <p>
                      {t(
                        "",
                        "",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                      )
                      
                      }
                    </p>
                  </div>
                  <div className={scss.amen}>
                    <h6>{t("", "", "Offered Amenities")}</h6>
                    <div className={scss.amenities}>
                      {hotelItemSlice.amenities.map((item, index) => (
                        <div key={index}>
                          <img src={imgBed.src} alt="" />
                          <span>{item}</span>
                        </div>
                      ))}
                      <button>{t("", "", "Show All 10 Amenities")}</button>
                    </div>
                  </div>
                  <div className={scss.safe}>
                    <h6>{t("", "", "Safety and Hygiene")}</h6>
                    <div className={scss.safe_list}>
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index}>
                          <img src={imgBed.src} alt="" />
                          <span>{t("", "", "Daily Cleaning")}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className={scss.right}>
                    <div className={scss.price}>$ {hotelItemSlice.price_short_period} - $ {hotelItemSlice.price_long_period}</div>
                    <ul>
                      <li>{t("", "", "Short Period: $ ")} {hotelItemSlice.price_short_period}</li>
                      <li>{t("", "", "Medium Period: $ ")}{hotelItemSlice.price_medium_period}</li>
                      <li>{t("", "", "Long Period: $ ")}{hotelItemSlice.price_long_period}</li>
                    </ul>
                    <button>{t("", "", "Reserve Now")}</button>
                    <div className={scss.call}>
                      <div>
                        <img src={imgProper.src} alt="" />
                        <span>{t('','','Property Inquiry')}</span>
                      </div>
                      <div>
                        <img src={imgContact.src} alt="" />
                        <span>{t('','','Contact Host')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : <p>safasfasf</p>}
    </>
  );
};

export default Tab_hotel;
