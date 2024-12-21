

import React from 'react';
import scss from './Map.module.scss';

const Map = () => {
 

  
 

  return (
    <div id={scss.Mapcontainer}>
      <div className="container">
        <div className={scss.cvadro}>
          <div className={scss.cearcle}></div>
          <p className={scss.maptitle}>Where to go</p>
        </div>
        <div className={scss.mapblock}>
          <input className={scss.blocks} type="text" placeholder="From where?" />
          <input className={scss.blocks} type="text" placeholder="Where?" />
          <button className={scss.mapbtn}>Go</button>
        </div>
     
      </div>
    </div>
  );
};

export default Map;
