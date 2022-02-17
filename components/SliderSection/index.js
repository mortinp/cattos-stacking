import React from "react";
import Slider from "react-slick";
import { SliderListItem } from "../../components";
import styles from "../../styles/slidersection.module.css";

export const SliderSection = function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container">
      <div className={`tab-content ${styles.cattos__tabInfo}`}>
        <div id="home" className="tab-pane fade in active show">
          <div className="cattos__slider">
            <Slider {...settings}>
              <div>
                <div className={`${styles.cattos__slide}`}>
                  <h2 className={`${styles.cattos__title}`}>
                    Welcome To The World of Cattos
                  </h2>
                  <h3 className={`${styles.cattos__detail}`}>
                    where cryptocurrency is used in real world problem. In this
                    application we will use it for passive
                  </h3>
                  <div className={`${styles.cattos__bottom}`}>
                    <h4 className={`${styles.cattos__number}`}>0 / 10000</h4>
                    <ul className={`d-flex ${styles.cattos__tabBox__slider}`}>
                      <SliderListItem title={"Road Map"} />
                      <SliderListItem title={"Oasis"} />
                      <SliderListItem title={"Rarity"} />
                    </ul>
                    <h5 className={`${styles.cattos__cost}`}>
                      1 CTN costs 0.0013 BCH Excluding gas fees,
                    </h5>
                    <h3 className={`${styles.cattos__detail}`}>
                      Connect to the SmartBCH network
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className={`${styles.cattos__slide}`}>
                  <h2 className={`${styles.cattos__title}`}>Get the power</h2>
                  <h3 className={`${styles.cattos__detail}`}>
                    where cryptocurrency is used in real world problem. In this
                    application we will use it for passive
                  </h3>
                  <div className={`${styles.cattos__bottom}`}>
                    <ul className={`d-flex ${styles.cattos__tabBox__slider}`}>
                      <SliderListItem title={"Buy USDT"} />
                      <SliderListItem title={"Buy smartBCH"} />
                      <SliderListItem title={"Buy smartBCH"} />
                    </ul>
                    <h5 className={`${styles.cattos__cost}`}>
                      1 CTN costs 0.0013 BCH Excluding gas fees,
                    </h5>
                    <h3 className={`${styles.cattos__detail}`}>
                      Connect to the SmartBCH network
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <div className={`${styles.cattos__slide}`}>
                  <h2 className={`${styles.cattos__title}`}>
                    Inspiring header
                  </h2>
                  <h3 className={`${styles.cattos__detail}`}>
                    where cryptocurrency is used in real world problem. In this
                    application we will use it for passive
                  </h3>
                  <div className={`${styles.cattos__bottom}`}>
                    <ul className={`d-flex ${styles.cattos__tabBox__slider}`}>
                      <SliderListItem title={"Stake"} />
                      <SliderListItem title={"Unstake"} />
                      <SliderListItem title={"Withdraw"} />
                    </ul>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
