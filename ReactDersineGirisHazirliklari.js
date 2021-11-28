//! Kurulum

//? Nodejs’i kurma sebebimiz npm (node package manager) ile react projemize farklı
//? kütüphaneler ekleyebilmek içindir.

//! Cmd veya terminalde çalıştırlacak kodlar

/*
npx create-react-app (my-app)-->proje adımız. Parantez içinde yazılmaz direk yazılır.
cd my-app
npm run start

Bunlar yapıldıktan sonra klasörümüz oluşmuş olur...

VsCode da açılan dosyada temizlik yapılırsa iyi olur..
src klasörünün içinde sadece App.js ve index.js kalması yeterli olacaktır.
*/

//Todo 00-giris dosyası ;
// İlk kurulan react projesinde oluşan dosyadır ve orjinaldir.
// Neler olduğunu görme açısından oraya bırakmış oldum.

//Todo 00-girissadehali dosyası ise ;
// Gereksiz dosyaların silinerek proje başlangıcı haline getirilen klasördür.
// Dosyalar ve uzantılar importlardan silinerek hazırlanmış oldu.

//Todo 01-02-03-04 klasörleri ise ders klasörleridir...

//! Projeyi durdurma komutu..
// ctrl c deyince (y/n) geliyor.. y harfine basınca proje durdurulur..

//! src klaöründeki index.js dosyası ;
// Bizim componentleri tanımladığımız ve import ettiğimiz yerdir.

//? Yapılan tüm işlemler public klasöründeki index.html dosayasındaki ;
//? <div id="root"></div> e yerleştirilir...
/*
src klasöründeki index.js e <App /> yerleştirilir ve 
document.getElementById("root") ile de bağlama yapılır..
Not ; <App /> işlem yaptığımız dosyayı işaret eder.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
*/

//! src-->index.js
/*
import React from "react";
import ReactDOM from "react-dom";
*/
// Not ; 1 ve 2. satırdaki 2 importta node_modules kütühanesi ile bağlantı kurar..
// Olmazsa olmazdır...

//TODO--> src klasörüne component klaörü açıp iç içe klasörlerle componentler oluşturabiliriz..
//? Component isimleri büyük harfle başlamalıdır..
