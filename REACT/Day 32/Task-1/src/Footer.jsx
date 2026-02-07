import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 mt-auto">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5>My Website</h5>
            <p className="text-white opacity-75">
              Welcome to My page
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p className="mb-1">📧 deepanudhayakumar01@gmail.com</p>
            <p>📞 +91 7868829011</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center pb-3">
          © 2026 My Website
        </div>
      </div>
    </footer>
  )
}

export default Footer
