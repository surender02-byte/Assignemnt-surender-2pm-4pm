import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h3>
        In a React application, we replace a tags with Link from
        react-router-dom for internal navigation. a tag causes a full page
        reload, which breaks the single-page application behavior. Link enables
        client-side routing without refreshing the page. This helps preserve
        application state and improves performance. a tag tags are mainly used
        only for external links or file downloads.
      </h3>
    </>
  );
}

export default App;
