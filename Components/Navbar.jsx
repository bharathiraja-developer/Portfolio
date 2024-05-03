import React from "react";
import "../Styles/Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

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
            <button className="nav-link btn btn-outline-primary" type="button">
              <Link to="home">Home</Link>
            </button>
          </li>
          <li className="nav-item ">
            <button className="nav-link btn btn-outline-primary">
              <Link to="about">About</Link>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-outline-primary">
              <Link to="project">Projects</Link>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-outline-primary">
              <Link to="contact">Contact</Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
