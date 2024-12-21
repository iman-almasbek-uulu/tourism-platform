import scss from './Footer.module.scss';


const Footer = () => {
    return (
        <footer id={scss.Footer}>
            <div className="container">
                <div className={scss.Footer_content}>
                    <div className={scss.blocks}>
                        <h2 className={scss.footLogo}>logo</h2>
                        <div className={scss.logos}>
                  <img className={scss.log1} src="/images/instagram-167-svgrepo-com.svg" alt="" />
                  <img className={scss.log2} src="/images/faceb.svg" alt="" />
                  <img className={scss.log3} src="/images/vk..svg" alt="" />
                  <img className={scss.log4} src="/images/mail.svg" alt="" />

         </div>
                       
                    </div>
                    <div className={scss.blocks}>
                        <h2 className={scss.footLogo}>Home</h2>
                        <a  className={scss.text} href="">Attractions</a>
                        <a className={scss.text}  href="">Map</a>
                    </div>
                    <div className={scss.blocks} >
                        <h2 className={scss.footLogo}>Regions</h2>
                        <a className={scss.text}  href="">Batken</a>
                        <a className={scss.text}  href="">Jalal-Abad</a>
                        <a className={scss.text}  href="">Issyk_kul</a>
                        <a className={scss.text}  href="">Naryn</a>
                        <a className={scss.text}  href="">Osh</a>
                        <a className={scss.text}  href="">Talas</a>
                        <a className={scss.text}  href="">Chyi</a>
                    </div>
                    <div className={scss.blocks}>
                        <h2 className={scss.footLogo}>Culture</h2>
                        <a className={scss.text}  href="">Games</a>
                        <a className={scss.text}  href="">National instruments</a>
                        <a className={scss.text}  href="">National clothes</a>
                        <a className={scss.text}  href="">Hand crafts</a>
                        <a className={scss.text}  href="">Currency</a>
                        <a className={scss.text}  href="">Kitchen</a>
                    </div>
                    <div>
                        <h2 className={scss.footLogo}>Gallery</h2>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;