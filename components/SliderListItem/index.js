import React from "react";
import styles from "../../styles/sliderlistitem.module.css";

export const SliderListItem = function index({ title, onClick, hrefValue }) {
  return (
    <li className={styles.cattos__tab__slider}>
      <a href={hrefValue} onClick={onClick}>
        {title}
      </a>
    </li>
  );
};
