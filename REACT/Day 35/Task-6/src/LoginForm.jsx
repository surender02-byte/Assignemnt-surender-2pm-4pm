import React, { useState } from "react";

function LoginForm() {
  const initialState = {
    email: "",
    password: ""
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ⛔ prevent reload

    console.log("Login Data:", formData);
    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);

    // Optional: reset after submit
    setFormData(initialState);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h4 className="text-center mb-4">Login</h4>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
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
                  required
                />
              </div>

              <button className="btn btn-primary w-100" type="submit">
                Login
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
