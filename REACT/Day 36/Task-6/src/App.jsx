import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]); // updates title whenever count changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useEffect – Change Document Title</h2>
      <p>Button clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
