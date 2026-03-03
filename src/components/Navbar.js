import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ title, mode, toggleMode }) {
  const navbarThemes = {
    light: "#f8f9fa",
    dark: "#1f1f1f",
    pink: "#800f4f",
    blue: "#1d3557",
    green: "#2d6a4f",
  };

  const navbarBackground = navbarThemes[mode];

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        mode === "light" ? "navbar-light" : "navbar-dark"
      }`}
      style={{
        backgroundColor: navbarBackground,
        transition: "all 0.3s ease",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
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
                  color: mode === "light" ? "#000" : "#fff",
                  background: "none",
                  border: "none",
                }}
              >
                Change Theme
              </button>

              <ul className="dropdown-menu dropdown-menu-dark">
                {["light", "pink", "blue", "green", "dark"].map((theme) => (
                  <li key={theme}>
                    <button
                      className="dropdown-item"
                      onClick={() => toggleMode(theme)}
                    >
                      {theme.charAt(0).toUpperCase() + theme.slice(1)}
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

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
};

export default Navbar;
