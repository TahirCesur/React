import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Person from "./Person";
import data from "../../data/persons.json";

//* 1. olarak useState import edilmeli...

//* 2. olarak useState tanımlanmalı
//* persons değişkeni, değeri saklar, setPersons ise değeri değiştiren method tur.

const Birthday = () => {
  const [persons, setPersons] = useState(data);

  const temizle = () => {
    setPersons([]); // Boş lduğunu göstermek için [ ] kullanmış olduk...
  };

  const yukle = () => {
    setPersons(data); // Bilgileri tekrar çekmek için data dan çağırmış oluyoruz...
  };

  return (
    <Card>
      <Card.Body>
        <h1>Bugün Doğanlar</h1>
        <p>Bugün doğan {persons.length} kişi bulundu</p>

        {persons.map((item) => {
          const { id, image, name, age } = item;
          return <Person image={image} name={name} age={age} key={id} />;
        })}
        <Button variant="danger" onClick={temizle}>
          Temizle
        </Button>

        <Button variant="success" onClick={yukle}>
          Yükle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Birthday;

//! Not ; Bilgileri data klasöründeki persons.json dosyasından almış olduk.....
//* Resimleri de public klasöründeki img klasöründen almış olduk...

//? 28. satırda ise persons.json dan map yardımıyla döngü kurmamız gerekiyor...
