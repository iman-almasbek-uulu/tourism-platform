"use client";
import UseTranslate from "@/ui/Translate";
import scss from "./Places.module.scss";
import imgRight from "@/images/Arrow_alt_lright.png";
import imgHeart from "@/images/Vector.png";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { fetchRegions } from "@/redux/slices/regionsSlice";
import { RegionData } from "@/redux/slices/types";
import { formatString } from "@/components/utils/utils";
import Stars from "@/ui/stars/Stars";
const Places = () => {
  const { regions } = useParams();
  const { t } = UseTranslate();
  const pathName = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const {
    regions: regionsRT,
    error,
    loading,
  } = useSelector((state: RootState) => state.regions);
  const routeName = pathName.split("/")[1];
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);


  useEffect(() => {
    dispatch(fetchRegions());
  }, [dispatch]);


  const filteredRegion = regionsRT.find(
    (region: RegionData) =>
      region.region_name.toLowerCase().replaceAll(" ", "") ===
      routeName.toLowerCase().replaceAll(" ", "")
  );

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {filteredRegion ? (
        <section id={scss.Places}>
          <div className="container">
            <h2>{t("", "", "Popular places")}</h2>
            <div className={scss.list}>
              {filteredRegion.popular_places.map((place, i) => (
                <div key={i} className={scss.item}>
                  <img src={place.popular_image} alt="popular place" />
                  <div className={scss.block}>
                    <h6>{formatString(t("", "", place.popular_name))}</h6>
                    <div>
                      <span className={scss.grade}>{place.avg_rating}</span>
                      <div className={scss.stars}>
                        <Stars rating={place.avg_rating}/>
                      </div>
                      <span className={scss.review}>{place.rating_count} reviews</span>
                    </div>
                  </div>
                  <img className={scss.heart} src={imgHeart.src} alt="" />
                  <Link href={`/${regions}/${place.popular_name.replaceAll(" ", "").toLowerCase()}`}>
                    <img className={scss.right} src={imgRight.src} alt="" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Places;
