import React, { useState, useEffect } from "react";
import "./clock3.css";
import moment from "moment";

//* 1. olarak useState import edilmeli...

//* 2. olarak useState tanımlanmalı
//* dateTime değişkeni, değeri saklar, setDateTime ise değeri değiştiren method tur.

const Clock3 = (props) => {
  const [dateTime, setDateTime] = useState(moment());

  const timeStr = dateTime.format("HH:mm"); /* saat ve dakika */
  const dateStr = dateTime.format("LL"); // November 28, 2021 bu şekli verir...
  const dayStr = dateTime.format("dddd"); // Sunday --> gibi gün verir
  const hour = dateTime.format("HH"); // Saati alarak Evening Afternon Morning vermesini sağlayacağız...
  const minute = dateTime.format("mm");
  const second = dateTime.format("ss");

  let message = "";
  if (hour >= 6 && hour < 11) message = "Morning";
  else if (hour >= 11 && hour < 17) message = "Afternoon";
  else if (hour >= 17 && hour < 21) message = "Evening";
  else message = "Night";

  //! useEffect
  // [] parametresi ile birlikte kullanıldığında sadece component ilk render
  // edildiğinde çalışır. Sonrasındaki renderlarda çalışmaz.
  // Eğer useEffect kullanmasaydık setInterval içinde dateTime isimli state i değiştiren
  // bir komut olduğu için, her render işleminde yeni bir setInterval nesnesi oluşturulacak
  // bu oluşturulan her bir setInterval ise başka bir setInterval oluşturacaktı. Bu şekilde logaritmik
  // artan setInterval lar bir süre sonra uygulamayı yavaşlatıp, sonunda da cevap veremez hale getirecekti

  useEffect(() => {
    /* Bu kısım ilk renderda çalışır */
    const sayac = setInterval(() => {
      setDateTime(moment()); /* Her saniyede çalışmasını sağlar */
    }, 1000);
    return () => {
      clearInterval(sayac); /* Burasıda setInterval ı temizleyecek */
    };
  }, []);

  return (
    <div
      className="clock-container"
      style={{ color: props.yaziRengi, backgroundColor: props.zeminRengi }}
    >
      <div className="clock">
        {hour}
        {second % 2 == 0 ? ":" : " "}
        {minute}
      </div>
      <div>
        <div className="date">{dateStr}</div>
        <div className="day">
          {dayStr} {message}
        </div>
      </div>
    </div>
  );
};

export default Clock3;
