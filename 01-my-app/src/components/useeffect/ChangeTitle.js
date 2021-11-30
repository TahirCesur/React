import React, { useState, useEffect } from "react";

//* 1. olarak useState i import ettik...

const ChangeTitle = () => {
  const [sayac, setSayac] = useState(0);

  const artir = () => {
    setSayac(sayac + 1);
  };

  useEffect(() => {
    document.title = `${sayac} kere tıklandı`;
  }, [sayac]);

  return (
    <div>
      <h2>{sayac} kere tıkladın</h2>
      <button onClick={artir}>TIKLA</button>
    </div>
  );
};

export default ChangeTitle;
