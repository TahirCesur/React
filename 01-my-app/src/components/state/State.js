import React, { useState } from "react";
import { Button } from "react-bootstrap";

//* 1. olarak useState import edilmeli...

//* 2. olarak useState tanımlanmalı
//* sayac değişkeni, değeri saklar, setSayac ise değeri değiştiren method tur.

const State = () => {
  const [sayac, setSayac] = useState(0);

  const artir = () => {
    setSayac(sayac + 1);
  };

  /* State yerine normal bir değişken ile yapılabilir mi? Hayır yapamayız...

    var sayac = 0;
    const artir = () => {
      sayac = sayac + 1;
      console.log(sayac);
    };

    *Console da görürüz ama component render edilmez...
    *State componentin her defasında render edilmesini sağlar...
  */

  return (
    <div>
      <h1>Sayaç değeri : {sayac}</h1>
      <Button variant="info" onClick={artir}>
        Artır
      </Button>
    </div>
  );
};

export default State;
