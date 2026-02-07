import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const cities =["Chennai","Salem","Coimbatore","Madurai","Erode"];

  function list (cities){
     return cities.map((city,intex)=>
      <li key={intex}>{city}</li>
    )
  }

  return (
    <>
     <ul>
          {list(cities)}
     </ul>

    </>
  )
}

export default App
