import scss from './Footer.module.scss';
import inst from "@/images/inst.png";
import vk from '@/images/vk.png';
import fb from '@/images/fc.png';
import mail from '@/images/mail.png';
import UseTranslate from '@/ui/Translate';
import Link from 'next/link';



const Footer = () => {

    const {t} = UseTranslate();

    return (
        <footer id={scss.Footer}>

            <div className={scss.logo}>
                <p>logo</p>
                <div className={scss.links}>
                    <a href="https://www.instagram.com/"><img src={inst.src} alt="inst" /></a>
                    <a href="https://vk.com/"><img src={vk.src} alt="vk" /></a>
                    <a href="https://www.facebook.com/"><img src={fb.src} alt="fb" /></a>
                    <a href="mailto:"><img src={mail.src} alt="mail" /></a>
                </div>
            </div>

            <nav>
                <div className={scss.items}>
                    <h4>{t("","","Home")}</h4>
                    <div className={scss.navLinks}>
                        <Link href="/Attractions">{t("","","Attractions")}</Link>
                        <Link href="/Map">{t("","","Map")}</Link>
                    </div>
                </div>
                <div className={scss.items}>
                    <h4>{t("","","Regions")}</h4>
                    <div className={scss.navLinks}>
                        <Link href="/batken">{t("","","Batken")}</Link>
                        <Link href="/jalal-Abad">{t("","","Jalal-Abad")}</Link>
                        <Link href="/issyk_kul">{t("","","Issyk_kul")}</Link>
                        <Link href="/naryn">{t("","","Naryn")}</Link>
                        <Link href="/osh">{t("","","Osh")}</Link>
                        <Link href="/talas">{t("","","Talas")}</Link>
                        <Link href="/chyi">{t("","","Chyi")}</Link>
                    </div>
                </div>
                <div className={scss.items}>
                    <h4>{t("","","Culture")}</h4>
                    <div className={scss.navLinks}>
                        <Link href="/games">{t("","","Games")}</Link>
                        <Link href="/nationalInstruments">{t("","","National Instruments")}</Link>
                        <Link href="/nationalClothes">{t("","","National Clothes")}</Link>
                        <Link href="/nandCrafts">{t("","","Hand Crafts")}</Link>
                        <Link href="/currency">{t("","","Currency")}</Link>
                        <Link href="/kitchen">{t("","","Kitchen")}</Link>
                    </div>
                </div>
                <div className={scss.items}>
                    <h4>
                        <Link href="/gallery">{t("","","Gallery")}</Link>
                    </h4>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;