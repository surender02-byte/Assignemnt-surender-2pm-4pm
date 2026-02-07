import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextToggle from './TextToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TextToggle/>
    </>
  )
}

export default App
