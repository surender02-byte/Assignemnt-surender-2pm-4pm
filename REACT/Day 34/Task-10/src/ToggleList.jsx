import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function ToggleList() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="container mt-5">
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowList(!showList)}
      >
        {showList ? "Hide List" : "Show List"}
      </button>

      {showList && (
        <ul className="list-group">
          <li className="list-group-item">HTML</li>
          <li className="list-group-item">CSS</li>
          <li className="list-group-item">JavaScript</li>
          <li className="list-group-item">React</li>
        </ul>
      )}
    </div>
  );
}

export default ToggleList;
