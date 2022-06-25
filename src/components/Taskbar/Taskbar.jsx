import React from 'react'
import { StartMenu } from '../StartMenu/StartMenu';
import './Taskbar.css'

export const Taskbar = () => {

  const handleStartClick= ()=>{
    console.log('hi');
  }

  return (
    <>
    <div className="Taskbar-Container" onClick={handleStartClick}>
        <div className="taskbar-icon-container">

            <img className="taskbar-icon" src="../src/assets/icons/start.png" alt="hi" />
            
        </div>
    </div>
    <StartMenu  />
    </>
  )
}
