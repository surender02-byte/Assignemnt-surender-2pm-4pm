import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [state, setState] = useState(true);
 
 

  return (
    <>
     <button onClick={()=>{
      setState(!state)
     }}>Change Text</button>
     <p>{state ? "Hi" : "Bye"}</p> 
    </>
  )
}

export default App
