import React from "react";

function StatusPanel({ status, onChangeStatus }) {
  return (
    <div className="card">
      <h3>
        Status:{" "}
        <span className={status === "Active" ? "active" : "inactive"}>
          {status}
        </span>
      </h3>
      <button onClick={onChangeStatus}>
        Toggle Status
      </button>
    </div>
  );
}

export default StatusPanel;
