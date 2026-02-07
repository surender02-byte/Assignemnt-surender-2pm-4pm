import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>Mistake 1: Missing dependency</h1>
      <h1>Mistake 2: No dependency array</h1>
      <h1>Mistake 3: Causing infinite loop</h1>
      <h1>Mistake 4: Using object or array directly</h1>
      <h1>Mistake 5: Function as dependency</h1>
      <h1>Mistake 6: Ignoring ESLint warning</h1>
     </div>
    </>
  )
}

export default App
