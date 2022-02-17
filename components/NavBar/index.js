import React from "react";
import styles from "../../styles/navbar.module.css";
import { NavBarItem } from "../NavBarItem";

export const NavBar = function index() {
  return (
    <div className={`${styles.cattos__content} d-flex`}>
      <img className={`${styles.cattos__logo}`} src="/logo.png" alt="missing" />

      <ul className={`nav nav-tabs ${styles.cattos__tabBox}`}>
        <NavBarItem
          dataToggle={"tab"}
          title={"Buy"}
          hrefValue={"#home"}
          liClassName={`active ${styles.cattos__tab}`}
        />
        <NavBarItem
          dataToggle={"tab"}
          title={"Mint"}
          hrefValue={"#menu1"}
          liClassName={`${styles.cattos__tab}`}
        />
        <NavBarItem
          dataToggle={"tab"}
          title={"Stake"}
          hrefValue={"#menu2"}
          liClassName={`${styles.cattos__tab}`}
        />
        <NavBarItem
          dataToggle={"tab"}
          title={"Connect Wallet"}
          hrefValue={"#menu3"}
          liClassName={`${styles.cattos__tab__change}`}
        >
          <img
            className={`${styles.nftconnect__icon}`}
            src="/wallet-icon.png"
            alt="missing"
          />
        </NavBarItem>
        <li className={`${styles.cattos__bar}`}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </li>
      </ul>
    </div>
  );
};
