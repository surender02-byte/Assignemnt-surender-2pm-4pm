import { useState } from "react";


function DarkModeWithButtonType() {
  const [active, setActive] = useState(false); // false = Light, true = Dark

  return (
    <div
      className={`min-vh-100 d-flex flex-column justify-content-center align-items-center
        page-transition
        ${active ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <h1 className="mb-4 fw-semibold">
        {active ? "Dark Mode Enabled" : "Light Mode Enabled"}
      </h1>

      {/* YOUR Button Type Toggle */}
      <button
        className={`btn px-4 py-2 toggle-btn
          ${active ? "btn-success" : "btn-primary"}`}
        onClick={() => setActive(!active)}
      >
        {active ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}

export default DarkModeWithButtonType;
