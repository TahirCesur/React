import React from "react";

// Hazır aldığımız formattan sadece class ları className yapmış olduk...
// Değişiklik yaptığımız yerler props. olan yerler...

const Service = (props) => {
  return (
    <div className="services-box">
      <img src={props.resim} alt="/" />
      <div className="services-content">
        <h5 className="services-head">{props.baslik}</h5>
        <p className="services-description mb-0">{props.aciklama}</p>
      </div>
    </div>
  );
};

export default Service;
