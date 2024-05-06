import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar({ setShow }) {
  const [value, setValue] = useState([true, false, false, false]);
  const [scroll, setScroll] = useState(window.scrollY);
  function changeActive(index) {
    let newValue = [];
    for (let i = 0; i < value.length; i++) {
      if (index == i) {
        newValue.push(true);
      } else {
        newValue.push(false);
      }
    }
    setValue(newValue);
  }

  setInterval(() => {
    if (window.innerWidth < 730) {
      if (window.scrollY < 665) {
        setValue([true, false, false, false]);
        setShow(true);
      } else if (window.scrollY < 1610) {
        setValue([false, true, false, false]);
        setShow(false);
      } else if (window.scrollY < 4320) {
        setValue([false, false, true, false]);
        setShow(false);
      } else {
        setValue([false, false, false, true]);
        setShow(false);
      }
    } else {
      if (window.scrollY < 612) {
        setValue([true, false, false, false]);
        setShow(true);
      } else if (window.scrollY < 1260) {
        setValue([false, true, false, false]);
        setShow(false);
      } else if (window.scrollY < 2720) {
        setValue([false, false, true, false]);
        setShow(false);
      } else {
        setValue([false, false, false, true]);
        setShow(false);
      }
    }
  }, [1000]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white">
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
              type="button"
              className={
                value[0]
                  ? "nav-link btn btn-outline-primary active text-white me-2"
                  : "nav-link btn btn-outline-primary me-2"
              }
            >
              <Link
                to="home"
                onClick={(e) => {
                  e.preventDefault();
                  changeActive(0);
                  setShow(true);
                }}
              >
                Home
              </Link>
            </button>
          </li>
          <li className="nav-item ">
            <button
              className={
                value[1]
                  ? "nav-link btn btn-outline-primary active text-white me-2"
                  : "nav-link btn btn-outline-primary me-2"
              }
            >
              <Link
                to="about"
                onClick={(e) => {
                  e.preventDefault();
                  changeActive(1);
                  setShow(false);
                }}
              >
                About
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                value[2]
                  ? "nav-link btn btn-outline-primary active text-white me-2"
                  : "nav-link btn btn-outline-primary me-2"
              }
            >
              <Link
                to="project"
                onClick={(e) => {
                  e.preventDefault();
                  changeActive(2);
                  setShow(false);
                }}
              >
                Projects
              </Link>
            </button>
          </li>
          <li className="nav-item">
            <button
              className={
                value[3]
                  ? "nav-link btn btn-outline-primary active text-white me-2"
                  : "nav-link btn btn-outline-primary me-2"
              }
            >
              <Link
                to="contact"
                onClick={(e) => {
                  e.preventDefault();
                  changeActive(3);
                  setShow(false);
                }}
              >
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
