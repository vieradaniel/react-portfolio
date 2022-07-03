import React from "react";
import { Icon } from "../Icon/Icon";
import "./Folder.css";

export const Folder = ({ openFolder, handleFolderClick }) => {
  return (
    <>
      <div className={openFolder ? "folder-container" : "inactive"}>
        <div className="folder-navbar">
          <div className="folder-navbar-name-container">MY PROJECTS</div>
          <div className="folder-navbar-minMaxClose-container">
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
              className="min-max-close-icons pointer"
              src="assets/icons/close.png"
              alt=""
              onClick={handleFolderClick}
            />
          </div>
        </div>
        <div className="folder-main">
          {/* VIERA APP */}

         
          <div className="folder-main-icon-container">
            <div className="folder-main-icon-top">
              <Icon
                name="Viera"
                src="assets/icons/vieraAPP.png"
                href="https://viera1.web.app/"
              />
            </div>
            <div className="folder-main-icon-bottom">
              <div className="folder-main-icon-bottom-options">
                <form action="https://viera1.web.app/" target="_blank">
                  <button
                    type="submit"
                    className="button-icon-action"
                    href="https://viera1.web.app/"
                  >
                    PLAY
                  </button>
                </form>

                <button
                  className="button-icon-action"
                  disabled
                >
                  REPO
                </button>
              </div>
              <div className="folder-main-icon-bottom-description">
                <p>READING APP</p>
                <p>REACT</p>
              </div>
            </div>
          </div>

          {/* GITHUB CLONE */}

          <div className="folder-main-icon-container">
            <div className="folder-main-icon-top">
              <Icon
                name="Github"
                src="assets/icons/github.png"
                href="https://vieradaniel.github.io/DD-TrabajoIntermedio2020-FE/"
              />
            </div>
            <div className="folder-main-icon-bottom">
              <div className="folder-main-icon-bottom-options">
                <form
                  action="https://vieradaniel.github.io/DD-TrabajoIntermedio2020-FE/"
                  target="_blank"
                >
                  <button type="submit" className="button-icon-action">
                    PLAY
                  </button>
                </form>
                <form
                  action="https://github.com/vieradaniel/DD-TrabajoIntermedio2020-FE"
                  target="_blank"
                >
                  <button className="button-icon-action">REPO</button>
                </form>
              </div>
              <div className="folder-main-icon-bottom-description">
                <p>GITHUB CLONE</p>
                <p>HTML/CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
