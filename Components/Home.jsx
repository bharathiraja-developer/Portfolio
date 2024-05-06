import React from "react";
import "../Styles/Home.css";
import { motion } from "framer-motion";
import home from "../image.svg";
import resume from "../Bharathiraja B.pdf";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div id="home" className="container-fluid mt-5">
      <div className="container">
        <div className="row">
          <div className="col mt-4 mt-lg-5">
            <h1 className="bigSize text-dark">Hi, I am Bharathiraja</h1>

            <h1 className="box">
              <TypeAnimation
                className="typingtext bigSize text-primary"
                sequence={[
                  "Frontend Developer",
                  1000,
                  "React JS Developer",
                  1000,
                  "Node JS Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <div className="col-12">
              <p className="fs-4 fw-normal w-75 mt-3">
                I am a MERN Stack Developer. I am currently looking forward to
                kick start my carrer.
              </p>
            </div>
            <div className="col-12 mt-5">
              <div className="d-flex justify-content-center">
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
              <div className="d-flex justify-content-center mt-2">
                <a
                  href={resume}
                  target="_blank"
                  className="btn btn-primary btn-lg w-25"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <motion.div
            className="col-6 image"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: false }}
          >
            <img src={home} height="450px" width="650px"></img>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Home as default };
