import React from "react";

// Hazır aldığımız formattan sadece class ları className yapmış olduk...
// h6 h3 ve span a props. gibi değişiklikler yaptık..
const SectionTitle = (props) => {
  return (
    <div className="title-box">
      <h6>{props.aciklama}</h6>
      <h3>{props.baslik}</h3>
      <span>{props.baslik}</span>
    </div>
  );
};

export default SectionTitle;
