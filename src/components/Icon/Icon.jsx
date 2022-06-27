import React from "react";
import './Icon.css'

export const Icon = ({name,src,href}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="app-icon-container"
    >
      <img src={src} alt="img" className="app-icon" />
      {/* <p className="app-icon-title">{name}</p> */}
    </a>
  );
};
