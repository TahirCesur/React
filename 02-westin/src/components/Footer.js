import React from "react";

// Hazır aldığımız formattan sadece class ları className yapmış olduk...
// <a href="javascript:void(0)"></a> te "javascript:void(0)"" olan yeri "#"" işareti ile değiştirdik...
// <div></div> eklersek problem çıkabilir diye format etkilenebilir diye
// 10. satıra <> ekledik... 57. satırda da kapatmış olduk...

const Footer = () => {
  return (
    <>
      <footer className="py-6 text-center">
        <div className="container">
          <div className="social-icon mb-3">
            <ul className="list-inline py-2 mb-0">
              <li className="list-inline-item">
                <a href="#">
                  <img src="assets/img/facebook.svg" alt="/" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img src="assets/img/twitter.svg" alt="/" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img src="assets/img/github.svg" alt="/" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img src="assets/img/linkedin.svg" alt="/" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <img src="assets/img/telegram.svg" alt="/" />
                </a>
              </li>
            </ul>
          </div>
          <p className="mb-0">
            Copyright © 2021. Template has been designed by{" "}
            <a className="base-color" href="#">
              Retrina
            </a>
          </p>
        </div>
      </footer>

      <a className="return-to-top d-inline-block" href="javascript:void(0)">
        <i className="lni lni-arrow-up"></i>
      </a>

      <div className="mouse-cursor cursor-effect"></div>
      <div className="mouse-cursor cursor"></div>
    </>
  );
};

export default Footer;
