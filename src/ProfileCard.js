import React from "react";

function ProfileCard({ name, role }) {
  return (
    <div className="card">
      <div className="avatar">{name.charAt(0)}</div>
      <h2>{name}</h2>
      <p className="role">{role}</p>
    </div>
  );
}

export default ProfileCard;
