import { useState } from 'react'
import './App.css'
import { Desktop } from './components/Desktop/Desktop'
import { ScreenLoader } from './components/ScreenLoader/ScreenLoader'

import { Taskbar } from './components/Taskbar/Taskbar'

function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);

  const loadWindows =()=>{
    setTimeout(() => {
      setLoadingScreen(false);
    }, 3000);
  }

  loadWindows();

  return (
    <>
    {
      loadingScreen
      ?
      <ScreenLoader/>
      :
      <>
      <Desktop />
      <Taskbar  />
      </>
    }
      
    </>
    
  )
}

export default App
