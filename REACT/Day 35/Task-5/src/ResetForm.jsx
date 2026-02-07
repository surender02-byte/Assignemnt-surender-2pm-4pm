import React, { useState } from "react";

function ResetForm() {
  const initialState = {
    name: "",
    email: "",
    agree: false
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
  };

  const handleReset = () => {
    setFormData(initialState); // ⭐ Reset here
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h4>Reset Form Values</h4>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <input
            className="form-control mb-3"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label className="form-check-label">
              Agree to terms
            </label>
          </div>

          <button className="btn btn-primary me-2" type="submit">
            Submit
          </button>

          <button
            className="btn btn-secondary"
            type="button"
            onClick={handleReset}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetForm;
