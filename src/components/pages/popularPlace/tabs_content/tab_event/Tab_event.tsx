import UseTranslate from '@/ui/Translate';
import scss from './Tab_event.module.scss';
import eventImg from '@/images/event.png'
import ulukImg from '@/images/uluk.jpg'
const Tab_event = () => {
    const {t} = UseTranslate()
    return (
        <div className={scss.event}>
           <div className={scss.filter}>
                <div className={scss.poster}>
                    <h2>{t("","","Poster")}</h2>
                    <div className={scss.search}>
                        <img src="" alt="" />
                        <input type="text" />
                    </div>

                </div>
                <div className={scss.calendar}>

                </div>

            </div>
            <div className={scss.list}>
                {Array.from({length: 12}, (_,i) => (
                    <div className={scss.item}>
                        <div className={scss.img}>
                            <img src={ulukImg.src} alt="" />
                            <div className={scss.eventTabs}>
                                <div className="">
                                    <img src={eventImg.src} alt="" />
                                </div>
                                <div className="">
                                    <img src={eventImg.src} alt="" />
                                    concert
                                </div>
                                <div className="">
                                    <img src={eventImg.src} alt="" />
                                </div>
                            </div>
                        </div>   
                        <div className={scss.info}>
                            <h6>Concert Ulukmanapo</h6>
                            <p>4 August  at 22:00, White Club Republic(Hippodrome, Cholpon-Ata)</p>
                        </div>
                    </div>
                ))
                }
            </div> 
        </div>
    );
};

export default Tab_event;