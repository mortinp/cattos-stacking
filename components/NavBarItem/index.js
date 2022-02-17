import React from "react";
import styles from "../../styles/navbaritem.module.css";

export const NavBarItem = function index({
  title,
  dataToggle,
  hrefValue,
  onClick,
  liClassName,
  children,
}) {
  return (
    <li className={liClassName}>
      <a
        className={styles.cattos__tab__anchor}
        href={hrefValue}
        data-toggle={dataToggle}
        href={hrefValue}
        onClick={onClick}
      >
        {children}
        {title}
      </a>
    </li>
  );
};
