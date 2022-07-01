import React from "react";
import { Icon } from "../Icon/Icon";
import "./Folder.css";

export const Folder = ({ openFolder, handleFolderClick }) => {
  return (
    <>
      <div className={openFolder ? "folder-container" : "inactive"}>
        <div className="folder-navbar">
          <img
            className="min-max-close-icons"
            src="assets/icons/minimize.png"
            alt=""
          />
          <img
            className="min-max-close-icons"
            src="assets/icons/maximize.png"
            alt=""
          />
          <img
            className="min-max-close-icons"
            src="assets/icons/close.png"
            alt=""
            onClick={handleFolderClick}
          />
        </div>
        <div className="folder-main">
          <Icon
            name="Viera"
            src="assets/icons/vieraAPP.png"
            href="https://viera1.web.app/"
          />
        </div>
      </div>
    </>
  );
};
