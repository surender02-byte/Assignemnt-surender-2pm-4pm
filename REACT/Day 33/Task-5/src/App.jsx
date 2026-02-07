import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}> Add Count
        </button>
         <p>Count value is {count}</p>
        <button onClick={() => setCount(0)}>Reset </button>
       
    </>
  )
}

export default App
