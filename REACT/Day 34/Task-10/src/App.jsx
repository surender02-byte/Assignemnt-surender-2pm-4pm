import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleList from './ToggleList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ToggleList/>
    </>
  )
}

export default App
