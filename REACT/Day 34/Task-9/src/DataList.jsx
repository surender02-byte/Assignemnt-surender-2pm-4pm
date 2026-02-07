import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DataList() {
  const data = []; // try adding items to see the change

  return (
    <div className="container mt-4">
      {data.length === 0 ? (
        <div className="alert alert-warning text-center">
          No data available
        </div>
      ) : (
        <ul className="list-group">
          {data.map((item, index) => (
            <li key={index} className="list-group-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DataList;
