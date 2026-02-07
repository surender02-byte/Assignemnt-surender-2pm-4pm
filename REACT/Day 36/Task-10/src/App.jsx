import { useEffect, useState } from "react";
import './App.css'
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]); // ❌ infinite loop

  return <h1>{count}</h1>;
}

export default App;
