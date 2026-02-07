import { useState } from "react";

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mt-5 d-flex flex-column align-items-center">
      <button
        className={`btn ${open ? "btn-outline-danger" : "btn-primary"} mb-3 px-4`}
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide Profile" : "Show Profile"}
      </button>

      <div className={`collapse ${open ? "show" : ""}`}>
        <div className="card profile-card shadow-lg border-0">
          {/* Header */}
          <div className="card-header text-center text-white bg-gradient fw-bold">
            Deepan
          </div>

          {/* Body */}
          <div className="card-body text-center">
            <div className="container p-4 rounded shadow bg-primary bg-opacity-10 border border-primary mb-3">
              <h1 className="h4 fw-bold text-primary">DEEPAN UDHAYAKUMAR</h1>
            </div>
            <h6 className="text-muted mb-2">Full Stack Developer</h6>

            <p className="mb-1">📍 Salem, India</p>
            <p className="mb-3">💻 React • Java • Bootstrap</p>

            <button className="btn btn-sm btn-outline-primary">
              View Portfolio
            </button>
          </div>

          {/* Footer */}
          <div className="card-footer text-center text-muted small">
            Available for projects 🚀
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
