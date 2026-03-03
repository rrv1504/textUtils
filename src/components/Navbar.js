import React from "react";
import { Link } from "react-router-dom";

function Navbar({ title, mode, toggleMode }) {
  const navbarThemes = {
    light: "linear-gradient(90deg, #ffffff, #e9ecef)",
    dark: "linear-gradient(90deg, #141e30, #243b55)",
    pink: "linear-gradient(90deg, #ff4e9b, #a4135c)",
    blue: "linear-gradient(90deg, #1e3c72, #2a5298)",
    green: "linear-gradient(90deg, #134e5e, #71b280)",
  };

  const navbarBackground = navbarThemes[mode];

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        mode === "light" ? "navbar-light" : "navbar-dark"
      }`}
      style={{
        background: navbarBackground,
        transition: "all 0.4s ease",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          {title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                style={{
                  background: "none",
                  border: "none",
                  color: mode === "light" ? "#000" : "#fff",
                }}
              >
                Change Theme
              </button>

              <ul
                className={`dropdown-menu ${
                  mode === "light"
                    ? "dropdown-menu-light"
                    : "dropdown-menu-dark"
                }`}
              >
                {["light", "pink", "blue", "green", "dark"].map((theme) => (
                  <li key={theme}>
                    <button
                      className={`dropdown-item ${
                        mode === theme ? "active fw-bold" : ""
                      }`}
                      onClick={() => toggleMode(theme)}
                    >
                      {theme.charAt(0).toUpperCase() + theme.slice(1)}
                      {mode === theme && " ✓"}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
