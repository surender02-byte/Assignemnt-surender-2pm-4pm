import React, { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Multiple Inputs – One State</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>

          <button className="btn btn-success">Submit</button>
        </form>

        <pre className="mt-3 bg-light p-2 rounded">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default MultiInputForm;
