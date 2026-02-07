import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state,setState]= useState(false);


  return (
    <>
      
      <button onClick={()=>setState(!state)}>{state ? "Log In" : "Log Out" }</button>
      <p>{state ? "Logged In" : "Logged Out" }</p>
    </>
  )
}

export default App
