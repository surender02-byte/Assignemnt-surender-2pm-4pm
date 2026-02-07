import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Day31 from './Day31'
import Task6 from './Task6'

function App() {
   
   document.title = "Surendher React App";

const city="AMBUR"
  return (
    <>
    <Day31/>
    <Task6/>
    <div>
      <h1>my name is SURENDER A</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, rerum?</p>
       <p>I am from {city}</p>
    </div>
    </>
  )
}

export default App
