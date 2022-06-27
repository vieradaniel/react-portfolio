import React from 'react';
import './Desktop.css';

export const Desktop = () => {
  return (
    <div className='desktop-container'>
        <div className='desktop-top'>
            <a href="http://www.google.com" target="_blank">
                <img src="assets/icons/Chrome.ico" alt="img"  className='app-icon'/>
            </a>
            <a href="https://www.linkedin.com/in/viera-daniel" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/linkedin.png" alt="img"  className='app-icon'/>
            </a>
            
            <img src="assets/icons/folder.png" alt="img"  className='app-icon'/> 

            <a href="https://github.com/vieradaniel" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/github.png" alt="img"  className='app-icon'/>
            </a>
                    
        </div>
    </div>
    
  )
}
