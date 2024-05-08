import React, { useState } from "react";
import "../Styles/Contact.css";
import axios from "axios";

function Contact({ mood }) {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [load, setLoad] = useState(false);
  const [done, setDone] = useState(false);
  return (
    <div className={mood ? "" : "bg-dark"}>
      <div className="container" id="contact">
        <div className="row"></div>
        <div className="row mt-5">
          <h1
            className={
              mood
                ? "d-flex justify-content-center fw-bolder"
                : "d-flex justify-content-center fw-bolder text-white"
            }
          >
            Contact
          </h1>
        </div>
        <div className="row">
          <h3 className="text-primary ms-3 fw-bold mt-3">Connect with me</h3>
          <p
            className={
              mood
                ? "ms-3 fs-5 mt-3 col-lg-6 col"
                : "ms-3 fs-5 mt-3 col-lg-6 col text-white"
            }
          >
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-lg-5 ms-3">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setLoad(true);
                await axios
                  .post(
                    "https://portfolio-backend-iogk.onrender.com/api/send",
                    {
                      name: msg.name,
                      email: msg.email,
                      message: msg.message,
                    }
                  )
                  .then(() => {
                    setMsg({
                      name: "",
                      email: "",
                      message: "",
                    });
                    setLoad(false);
                    setDone(true);
                    setTimeout(() => {
                      setDone(false);
                    }, [5000]);
                  });
              }}
            >
              <label
                className={
                  mood
                    ? "form-label fw-medium fs-5"
                    : "form-label fw-medium fs-5 text-white"
                }
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                className="form-control"
                placeholder="Enter your name"
                value={msg.name}
                required={true}
                onChange={(e) => {
                  setMsg({
                    name: e.target.value,
                    email: msg.email,
                    message: msg.message,
                  });
                }}
                style={{
                  backgroundColor: "#374151",
                  color: "white",
                }}
              ></input>
              <label
                className={
                  mood
                    ? "form-label fw-medium fs-5 mt-3"
                    : "form-label fw-medium fs-5 mt-3 text-white"
                }
                htmlFor="email"
              >
                Email
              </label>
              <input
                required={true}
                value={msg.email}
                onChange={(e) => {
                  setMsg({
                    name: msg.name,
                    email: e.target.value,
                    message: msg.message,
                  });
                }}
                className="form-control"
                style={{
                  backgroundColor: "#374151",
                  color: "white",
                }}
                id="email"
                placeholder="Enter your email"
              ></input>
              <label
                className={
                  mood
                    ? "form-label fw-medium fs-5 mt-3"
                    : "form-label fw-medium fs-5 mt-3 text-white"
                }
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                required={true}
                value={msg.message}
                onChange={(e) => {
                  setMsg({
                    name: msg.name,
                    email: msg.email,
                    message: e.target.value,
                  });
                }}
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
                {load ? (
                  <button
                    className="btn btn-primary mt-3"
                    type="submit"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status">Loading...</span>
                  </button>
                ) : (
                  <button className="btn btn-primary mt-3" type="submit">
                    Send
                  </button>
                )}
              </div>
              <div className="d-flex justify-content-center">
                {done ? (
                  <p className="text-success d-block fs-3">
                    Message sent successfully
                  </p>
                ) : (
                  <p></p>
                )}
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-6 text-lg-end">
            <div>
              <h3
                className={
                  mood
                    ? "text-dark ms-3 fw-bold mt-3"
                    : "text-dark ms-3 fw-bold mt-3 text-white"
                }
              >
                Email
              </h3>
              <h3 className="text-primary ms-3 fw-medium mt-3">
                bharathiraja798@gmail.com
              </h3>
            </div>
            <div>
              <h3
                className={
                  mood
                    ? "text-dark ms-3 fw-bold mt-3"
                    : "text-dark ms-3 fw-bold mt-3 text-white"
                }
              >
                Address
              </h3>
              <h3 className="text-primary ms-3 fw-medium mt-3 fs-4 address">
                UPPILIAPURAM,TRICHY,
                <br />
                TAMILNADU,
                <br /> INDIA
              </h3>
            </div>
            <div>
              <h3
                className={
                  mood
                    ? "text-dark ms-3 fw-bold mt-3"
                    : "text-dark ms-3 fw-bold mt-3 text-white"
                }
              >
                Social
              </h3>
              <div className="ms-3">
                <a
                  href="https://github.com/bharathiraja-developer"
                  target="_blank"
                >
                  {mood ? (
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/sf-regular/48/github.png"
                      alt="github"
                    />
                  ) : (
                    <img
                      width="37"
                      height="37"
                      className="bg-white rounded"
                      src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                      alt="github"
                    />
                  )}
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
    </div>
  );
}

export default Contact;
