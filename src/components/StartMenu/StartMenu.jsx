import React from "react";
import { Icon } from "../Icon/Icon";
import "./StartMenu.css";

export const StartMenu = ({ startButton }) => {
  return (
    <>
      {
      startButton 
      && 
      (
        <div className="startMenu-container">
          <div className="startMenu-container-top">
            <div>
              <Icon name='' src="assets/icons/Chrome.ico" href="http://www.google.com"/>
              
            </div>
           
          </div>
          <div className="startMenu-container-bottom">
            <div className='profile-container'>
              <img src="assets/images/profile-picture.jpg" alt="profile-picture" className='profile-picture' />
              
              <div className='profile-name'>Viera, Daniel</div>
            </div>
            {/* <div className='powerOff-button'>power off picture</div> */}
            <img src="assets/images/shutdown.png" alt="img"  className='shutDown-icon'/>
          </div>
        </div>
      )
      }
    </>
  );
};
