import React from "react";
import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="container mt-5" id="contact">
      <div className="row">
        <h1 className="d-flex justify-content-center fw-bolder">Contact</h1>
      </div>
      <div className="row">
        <h3 className="text-primary ms-3 fw-bold mt-3">Connect with me</h3>
        <p className="ms-3 fs-5 mt-3 col-lg-6 col">
          If you want to know more about me or my work, or if you would just
          like to say hello, send me a message. I'd love to hear from you.
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-lg-5 ms-3">
          <form>
            <label className="form-label fw-medium fs-5" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              style={{
                backgroundColor: "#374151",
                color: "white",
              }}
              id="name"
              placeholder="Enter your name"
            ></input>
            <label className="form-label fw-medium fs-5 mt-3" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              style={{
                backgroundColor: "#374151",
                color: "white",
              }}
              id="email"
              placeholder="Enter your email"
            ></input>
            <label className="form-label fw-medium fs-5 mt-3" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              style={{
                backgroundColor: "#374151",
                color: "white",
              }}
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary mt-3" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-lg-6 text-lg-end">
          <div>
            <h3 className="text-dark ms-3 fw-bold mt-3">Email</h3>
            <h3 className="text-primary ms-3 fw-medium mt-3">
              bharathiraja798@gmail.com
            </h3>
          </div>
          <div>
            <h3 className="text-dark ms-3 fw-bold mt-3">Address</h3>
            <h3 className="text-primary ms-3 fw-medium mt-3 fs-4 address">
              UPPILIAPURAM,TRICHY,
              <br />
              TAMILNADU,
              <br /> INDIA
            </h3>
          </div>
          <div>
            <h3 className="text-dark ms-3 fw-bold mt-3">Social</h3>
            <div className="ms-3">
              <a
                href="https://github.com/bharathiraja-developer"
                target="_blank"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/sf-regular/48/github.png"
                  alt="github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/bharathi-raja-0ab1a521a/"
                target="_blank"
              >
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
