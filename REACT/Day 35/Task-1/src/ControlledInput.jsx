import React, { useState } from "react";

function ControlledInput() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered Name: ${name}`);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Controlled Input </h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>

        <p className="mt-3 text-muted">
          Live Value: <strong>{name}</strong>
        </p>
      </div>
    </div>
  );
}

export default ControlledInput;
