import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
  
        React renders the component first and updates the DOM.
        <br />
        After the UI is painted, useEffect runs (never during render).
        <br />
        On re-render or unmount, cleanup runs first, then the next effect runs.
      </h1>
    </>
  );
}

export default App;
