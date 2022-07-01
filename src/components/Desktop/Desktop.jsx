import React, { useState } from 'react';
import { Folder } from '../Folder/Folder';
import { Icon } from '../Icon/Icon';
import './Desktop.css';
import { iconObjects } from './iconObjects';

export const Desktop = () => {
  
    
    const [openFolder, setOpenFolder] = useState(false);

    const handleFolderClick = () => {
      setOpenFolder( openFolder ? false : true);
      
    };

  return (
    
        <div className='desktop-top'>
            
            <div className='app-icon-container' onClick={ handleFolderClick }>
                <img src="assets/icons/folder.png" alt="img" className='app-icon' /> 
                {/* <p className='myProjectsTitle'>My Projects</p> */}
                {/* <p className='app-icon-title'>My Projects</p> */}
            </div>
            <Folder openFolder={openFolder} handleFolderClick={handleFolderClick} />
            
            
            {
                iconObjects.map((e,i)=>{
                    return <Icon key={e.name + i} name={e.name} src={e.src} href={e.href}/>
                    
                })
            }
           
                    
        </div>
    
    
  )
}
