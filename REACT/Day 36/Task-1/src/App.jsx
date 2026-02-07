import { useState } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    console.log("This runs only once");
    return () => {
      console.log("Component unmounted");
    };
  }, []); 

  return (
    <>
     <h1>Hello React</h1>
    </>
  )
}

export default App
