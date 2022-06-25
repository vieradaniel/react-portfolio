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
          <div className="startMenu-container-top"></div>
          <div className="startMenu-container-bottom"></div>
        </div>
      )
      }
    </>
  );
};
