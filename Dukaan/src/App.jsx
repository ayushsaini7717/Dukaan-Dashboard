import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cardblue, Topbar } from './components/Cards'
import { SidebarComponent } from './components/Sidebar'
import { OverviewComponent } from './assets/Overview'
function App() {
 

  return (
    <>
    <div className='bg-gray-50'>
    <SidebarComponent></SidebarComponent>
    <div className='bg-white'>
    <Topbar></Topbar>
    </div>
    <OverviewComponent></OverviewComponent>
    </div>
    </>
  )
}

export default App
