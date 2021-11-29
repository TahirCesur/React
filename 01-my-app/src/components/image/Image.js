import React from "react";
import image2 from "../../assets/img/image2.jpg";

//! Locale img ekleme yöntemleri 3 adettir....

//? <h3>Statik yöntem</h3>
/*
<img src="assets/img/image1.jpg"/>
Bu yol direk publicten assets img klasaöründen alınarak yapılır...
*/

//? <h3>Import yöntemi</h3>
/*
<img src={image2}/>
src klasörünün içindeki assets img klasöründen alınarak {} yoluyla yapılır...
2. satırda da import etmemiz gerekiyor... 
*/

//? <h3>Require Yöntemi</h3>
/*
<img src={require("../../assets/img/image3.jpg").default}/>
syntax ı 18. satırda olduğu gibi... {require("../../assets/img/image3.jpg").default} şeklinde olmalı..
Bunu da 25. satırda Image olarak const a tanımlamış olduk...
*/
const Image = () => {
  console.log(require("../../assets/img/image3.jpg"));

  return (
    <div>
      <div>
        <h3>Statik yöntem</h3>
        <img src="assets/img/image1.jpg" />
      </div>

      <div>
        <h3>Import yöntemi</h3>
        <img src={image2} />
      </div>

      <div>
        <h3>Require Yöntemi</h3>
        <img src={require("../../assets/img/image3.jpg").default} />
      </div>
    </div>
  );
};

export default Image;
