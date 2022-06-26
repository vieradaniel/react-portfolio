import React from "react";
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
            
              <img src="/src/assets/icons/Chrome.ico" alt="img"  className='app-icon'/>
            
           
          </div>
          <div className="startMenu-container-bottom">
            <div className='profile-container'>
              <img src="/src/assets/images/profile-picture.jpg" alt="profile-picture" className='profile-picture' />
              
              <div className='profile-name'>Viera, Daniel</div>
            </div>
            {/* <div className='powerOff-button'>power off picture</div> */}
            <img src="/src/assets/images/shutdown.png" alt="img"  className='shutDown-icon'/>
          </div>
        </div>
      )
      }
    </>
  );
};
