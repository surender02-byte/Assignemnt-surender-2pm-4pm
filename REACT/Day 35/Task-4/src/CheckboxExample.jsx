import React, { useState } from "react";

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h4>Checkbox State Handling</h4>

        <div className="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="agree">
            I agree to the terms
          </label>
        </div>

        <p className="mt-3">
          Status: <strong>{isChecked ? "Checked" : "Unchecked"}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckboxExample;
