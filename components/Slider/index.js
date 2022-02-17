import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Slider = function index() {
  return (
    <div className="container">
      <div className="tab-content cattos__tabInfo">
        <div id="home" className="tab-pane fade in active show">
          <div className="cattos__slider">
            <div>
              <div className="cattos__slide">
                <h2 className="cattos__title">
                  Welcome To The World of Cattos
                </h2>
                <h3 className="cattos__detail">
                  where cryptocurrency is used in real world problem. In this
                  application we will use it for passive
                </h3>
                <div className="cattos__bottom">
                  <h4 className="cattos__number">0 / 10000</h4>
                  <ul className="d-flex cattos__tabBox cattos__tabBox--slider">
                    <li className="cattos__tab cattos__tab--slider">
                      <a href="">Road Map</a>
                    </li>
                    <li className="cattos__tab cattos__tab--slider">
                      <a href="">Oasis</a>
                    </li>
                    <li className="cattos__tab cattos__tab--slider">
                      <a href="">Rarity</a>
                    </li>
                  </ul>
                  <h5 className="cattos__cost">
                    1 CTN costs 0.0013 BCH Excluding gas fees,
                  </h5>
                  <h3 className="cattos__detail">
                    Connect to the SmartBCH network
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="cattos__slide">
                <h2 className="cattos__title">Get the power</h2>
                <h3 className="cattos__detail">
                  where cryptocurrency is used in real world problem. In this
                  application we will use it for passive
                </h3>
                <div className="cattos__bottom">
                  <ul className="d-flex cattos__tabBox cattos__tabBox--slider">
                    <li className="cattos__tab cattos__tab--slider">
                      <a href="">Buy USDT</a>
                    </li>
                    <li className="cattos__tab cattos__tab--slider">
                      <a href="">Buy smartBCH</a>
                    </li>
                    <li className="cattos__tab cattos__tab--slider">
                      <a href="">Buy smartBCH</a>
                    </li>
                  </ul>
                  <h5 className="cattos__cost">
                    1 CTN costs 0.0013 BCH Excluding gas fees,
                  </h5>
                  <h3 className="cattos__detail">
                    Connect to the SmartBCH network
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="cattos__slide">
                <h2 className="cattos__title">Inspiring header</h2>
                <h3 className="cattos__detail">
                  where cryptocurrency is used in real world problem. In this
                  application we will use it for passive
                </h3>
                <div className="cattos__bottom">
                  <ul className="d-flex cattos__tabBox cattos__tabBox--slider">
                    <li className="cattos__tab cattos__tab--slider">
                      <a href="">Stake</a>
                    </li>
                    <li className="cattos__tab cattos__tab--slider">
                      <a href="">Unstake</a>
                    </li>
                    <li className="cattos__tab cattos__tab--slider">
                      <a href="">Withdraw</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
