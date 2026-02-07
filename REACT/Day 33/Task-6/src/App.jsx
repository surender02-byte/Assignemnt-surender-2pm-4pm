import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4 text-center" style={{ width: "20rem" }}>
        <h3 className="mb-3">Click Counter</h3>

        <h1 className="text-primary mb-4">{count}</h1>

        <div className="d-flex justify-content-between gap-2">
          <button
            className="btn btn-success flex-fill"
            onClick={() => setCount(count + 1)}
          >
            ➕ Increase
          </button>

          <button
            className="btn btn-warning flex-fill"
            onClick={decrease}
            disabled={count === 0}
          >
            ➖ Decrease
          </button>

          <button
            className="btn btn-danger flex-fill"
            onClick={() => setCount(0)}
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
