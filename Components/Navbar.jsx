import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-brand ms-3 fw-medium">𝕭𝖍𝖆𝖗𝖆𝖙𝖍𝖎𝖗𝖆𝖏𝖆</div>
      <button
        className="navbar-toggler me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#Externalcontent"
        aria-controls="Externalcontent"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end me-3"
        id="Externalcontent"
      >
        <ul className="navbar-nav ms-3">
          <li className="nav-item">
            <button
              className="nav-link btn btn-outline-primary"
              type="button"
              href="#home"
            >
              Home
            </button>
          </li>
          <li className="nav-item ">
            <button className="nav-link btn btn-outline-primary" href="#about">
              About
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-outline-primary"
              href="#project"
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn btn-outline-primary"
              href="#contact"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
