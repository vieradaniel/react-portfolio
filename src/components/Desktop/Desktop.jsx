import React from 'react';
import { Icon } from '../Icon/Icon';
import './Desktop.css';
import { iconObjects } from './iconObjects';

export const Desktop = () => {
  

  return (
    
        <div className='desktop-top'>
            <div className='app-icon-container'>
                <img src="assets/icons/folder.png" alt="img" className='app-icon' /> 
                {/* <p className='app-icon-title'>My Projects</p> */}
            </div>
            
            
            {
                iconObjects.map((e)=>{
                    return <Icon name={e.name} src={e.src} href={e.href}/>
                    
                })
            }
            
                    
        </div>
    
    
  )
}
