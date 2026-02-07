import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Routing Flow in React (1-Minute Explanation)</h1>
      <p>
        In a React application, routing is handled on the client side using
        React Router. First, the app is wrapped with BrowserRouter, which
        listens to URL changes using the browser history API. When a user clicks
        a Link, the URL changes without reloading the page. React Router then
        matches the URL with a Route inside the Routes component. The matched
        route’s component is rendered dynamically, while the rest of the app
        remains unchanged. This creates a single-page application experience
        with fast navigation and preserved state.
      </p>
    </>
  );
}

export default App;
