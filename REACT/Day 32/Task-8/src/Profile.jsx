import React from "react";
import profileImg from "./assets/profile.jpg";

function Profile() {
  return (
    <div className="profile-card text-center p-4">
    

      {/* Profile Image */}
      <img
        src={profileImg}
        alt="profile"
        className="rounded-circle border border-info profile-img mt-4"
      />

      {/* Name & Location */}
      <h4 className="mt-3 text-white">Deepan Udhayakumar</h4>
      <p className="text-secondary mb-1">Salem</p>
      <p className="text-light small">
        Full-Stack Java Developer
      </p>

      {/* Buttons */}
      <div className="d-flex justify-content-center gap-2 my-3">
        <button className="btn btn-info px-4">Message</button>
        <button className="btn btn-outline-info px-4">Following</button>
      </div>

      {/* Skills */}
      <div className="text-start mt-4">
        <h6 className="text-white">SKILLS</h6>
        <div className="d-flex flex-wrap gap-2 mt-2">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">Java</span>
        </div>
      </div>

    </div>
  );
}

export default Profile;
