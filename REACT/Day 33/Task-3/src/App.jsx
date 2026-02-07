import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("");

  return (
    <>
    <form action="">
      <input type="text" placeholder='Enter the Message'  onChange={(e) => setMessage(e.target.value) }/>
    </form>
    <p>{message}</p>
     
    </>
  )
}

export default App
