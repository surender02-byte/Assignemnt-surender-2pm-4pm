import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    // 🧹 cleanup function
    return () => {
      clearInterval(timer);
      console.log("Timer cleared");
    };
  }, []); // runs once

  return (
    <div>
      <h2>Timer: {count}</h2>
    </div>
  );
}

export default App;
