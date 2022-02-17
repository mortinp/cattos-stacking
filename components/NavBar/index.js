import React from "react";
import styles from "../../styles/navbar.module.css";

export const NavBar = function index() {
  return (
    <div className={`${styles.cattos__content} d-flex`}>
      <img className={`${styles.cattos__logo}`} src="/logo.png" alt="missing" />

      <ul className={`nav nav-tabs ${styles.cattos__tabBox}`}>
        <li className={`active ${styles.cattos__tab}`}>
          <a
            className={styles.cattos__tab__anchor}
            data-toggle="tab"
            href="#home"
          >
            Buy
          </a>
        </li>
        <li className={`${styles.cattos__tab}`}>
          <a
            className={styles.cattos__tab__anchor}
            data-toggle="tab"
            href="#menu1"
          >
            Mint
          </a>
        </li>
        <li className={`${styles.cattos__tab}`}>
          <a
            className={styles.cattos__tab__anchor}
            data-toggle="tab"
            href="#menu2"
          >
            Stake
          </a>
        </li>
        <li className={`${styles.cattos__tab__change}`}>
          <a
            className={styles.cattos__tab__anchor}
            data-toggle="tab"
            href="#menu3"
          >
            <img
              className={`${styles.nftconnect__icon}`}
              src="/wallet-icon.png"
              alt="missing"
            />
            Connect Wallet
          </a>
        </li>
        <li className={`${styles.cattos__bar}`} onclick="myFunction(this)">
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </li>
      </ul>
    </div>
  );
};
