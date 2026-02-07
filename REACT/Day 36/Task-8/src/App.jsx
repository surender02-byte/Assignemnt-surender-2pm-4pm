import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup function
    return () => {
      clearInterval(timer);
    };
  }, []); // runs once on mount

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Timer with Cleanup</h2>
      <h1>{seconds} seconds</h1>
    </div>
  );
}

export default App;
