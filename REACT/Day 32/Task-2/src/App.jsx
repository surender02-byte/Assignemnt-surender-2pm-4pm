import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Liveyear from './Liveyear'

function App() {
  const [count, setCount] = useState(0)
  const year =  new Date().getFullYear();

  return (
    <>
     <Liveyear year={year}/>
    </>
  )
}

export default App
