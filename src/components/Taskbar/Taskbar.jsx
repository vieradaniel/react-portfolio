import React, { useState } from "react";
import { StartMenu } from "../StartMenu/StartMenu";
import "./Taskbar.css";

export const Taskbar = () => {
  const [startButton, setStartButton] = useState(false);

  const handleStartClick = () => {
    setStartButton( startButton ? false : true);
    
  };

  return (
    <>
      <div className="Taskbar-Container" onClick={handleStartClick}>
        <div className="taskbar-icon-container">
          <img
            className={`taskbar-icon ${startButton && 'active'}`}
            src="assets/icons/start.png"
            alt="hi"
          />
        </div>
      </div>
      <StartMenu startButton={startButton}/>
    </>
  );
};
