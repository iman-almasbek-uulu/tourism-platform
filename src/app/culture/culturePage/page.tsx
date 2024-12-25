import React from 'react';
import scss from '../culturePage/cultur.module.scss'

const Pages = () => {
         const menuItems = [
                  { label: 'Games', link: '#' },
                  { label: 'National clothes', link: '#' },
                  { label: 'Hand crafts', link: '#' },
                  { label: 'Currency', link: '#' },
                  { label: 'National instruments', link: '#' },
                  { label: 'Kitchen', link: '#' },
                ];
  return (
    <div id={scss.Pages}>
         <div className="container">
                  <div className={scss.Pages}>
<h1 className={scss.title}>Culture</h1>
<p className={scss.text}>The culture of Kyrgyzstan was formed under the strong influence 
         of nomadic life. In addition, it was influenced by the cultures of Russia, Persia 
         and Turkey, and yet it remained quite original and unique. The connection of Kyrgyz
         culture with nature can be traced everywhere: from design to music. One of the most 
         famous examples of Kyrgyz culture is the Manas epic, an incredibly long poem that was
          passed down orally from one generation to the next.</p>

         <div className={scss.menuBlock}>
         <ul className={scss.menu}>
    {menuItems.map((item, index) => (
      <li key={index} className={scss.item}>
        <a href={item.link}>{item.label}</a>
        <img className={scss.arrow} src="../images/arrow.svg" alt="Arrow icon" />
      </li>
    ))}
  </ul>
         </div>
                  </div>
         </div>


    </div>
  )
}

export default Pages;