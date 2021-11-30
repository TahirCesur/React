import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

// 1. olarak useState import edilmeli...

// 2. olarak useState tanımlanmalı
// sayac değişkeni, değeri saklar, setSayac ise değeri değiştiren method tur.

const Counter = () => {
  const [sayac, setSayac] = useState(0);

  const artir = () => {
    setSayac(sayac + 1);
  };

  const azalt = () => {
    if (sayac > 0) setSayac(sayac - 1);
  };

  const reset = () => {
    setSayac(0);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <ButtonGroup aria-label="Basic example">
        <Button variant="warning" onClick={artir}>
          +
        </Button>
        <Button variant="secondary" disabled>
          {sayac}
        </Button>
        <Button variant="warning" onClick={azalt}>
          -
        </Button>
        <Button variant="danger" onClick={reset}>
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Counter;

// 30. satırda disabled yaptık ki gri olan button kısmına basılamasın....
// {sayac} state ini de buraya ekleyip bağlamış olduk...
