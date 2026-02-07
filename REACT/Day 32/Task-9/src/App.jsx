import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card title="React" description="React is a JavaScript library" />
      <Card title="JavaScript" description="JS is used for web development" />
      <Card title="CSS" description="CSS styles the web pages" />
    </>
  )
}

export default App
