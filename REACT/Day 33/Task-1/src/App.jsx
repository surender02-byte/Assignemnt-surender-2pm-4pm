import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Add count  
        </button>
        <p>count is {count}</p>
        <button onClick={() => setCount((count) => count - 1)}>
          decrease count 
        </button>
      </div>
    </>
  )
}

export default App
