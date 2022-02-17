import React from "react";

export default function index({ title, dataToggle, hrefValue, onClick }) {
  return (
    <a data-toggle={dataToggle} href={hrefValue} onClick={onClick}>
      {title}
    </a>
  );
}
