import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar/navbar'
import { ModeProvider } from './mode'


function App() {
  

  return (
    <ModeProvider>
   <Navbar />
   </ModeProvider>
  )
}

export default App
