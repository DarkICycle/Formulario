import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'




import Listas from './components/Listas'
import { Formulario } from './components/Formulario'

function App() {

  return (
    <>
      <Formulario></Formulario>
      <Listas></Listas>
      
    </>
  )
}

export default App
