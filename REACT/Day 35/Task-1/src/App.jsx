import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledInput from './ControlledInput';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ControlledInput/>
    </>
  )
}

export default App
