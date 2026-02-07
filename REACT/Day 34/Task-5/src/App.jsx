import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [button ,setButton]=useState(false)

  return (
    <>
       <button onClick={()=>(setButton(true))}> Cilck</button>
       <p>{button ? "Hey there i'm using ternary operator " : "i'm waiting for some to cilck "}</p>
    </>
  )
}

export default App
