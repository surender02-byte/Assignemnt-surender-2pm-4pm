import React, { useState } from "react";

function PreventReloadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ⭐ KEY LINE
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h4>Prevent Form Reload</h4>

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

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PreventReloadForm;
