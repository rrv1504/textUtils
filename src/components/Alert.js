import React from "react";

function Alert({ alert }) {
  if (!alert) return null;

  return (
    <div
      className="container mt-3"
      style={{
        position: "fixed",
        top: "70px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: "1050",
        width: "90%",
        maxWidth: "600px",
      }}
    >
      <div
        className={`alert alert-${alert.type} shadow`}
        role="alert"
        style={{
          borderRadius: "12px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        }}
      >
        <strong>
          {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
        </strong>{" "}
        : {alert.msg}
      </div>
    </div>
  );
}

export default Alert;
