import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import StatusPanel from "./StatusPanel";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "Shaik Ashik",
    role: "Frontend Developer",
    status: "Active"
  });

  const changeStatus = () => {
    setUser({
      ...user,
      status: user.status === "Active" ? "Inactive" : "Active"
    });
  };

  return (
    <div className="app">
      <h1 className="title">Profile Dashboard</h1>
      <ProfileCard name={user.name} role={user.role} />
      <StatusPanel status={user.status} onChangeStatus={changeStatus} />
    </div>
  );
}

export default App;
