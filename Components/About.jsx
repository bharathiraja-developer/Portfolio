import React from "react";
import "../Styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="container" id="about">
      <div className="row">
        <h1 className="d-flex justify-content-center fw-bolder">About Me</h1>
      </div>
      <div className="row">
        <h3 className="text-primary ms-3 fw-bold mt-3">A bit about me</h3>
        <p className="ms-3 fs-5 mt-3">
          I'm a self-taught web developer with experience in designing new
          features from ideation to production, implementation of wireframes and
          design flows into high performance software applications. I take into
          consideration the user experience while writing reusable and efficient
          code. I passionately combine good design, technology, and innovation
          in all my projects, which I like to accompany from the first idea to
          release.
        </p>
      </div>
      <div className="row mt-2">
        <h3 className="text-primary ms-3 fw-bold">Technologies and Tools</h3>
        <p className="ms-3 fs-5 mt-3">
          Using a combination of cutting-edge technologies and reliable
          open-source software I build user-focused, performant websites for
          smartphones, tablets, and desktops.
        </p>
      </div>

      <div className="row ms-4 mb-3">
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">Mongo DB</h4>
        </motion.div>
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">Express</h4>
        </motion.div>
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">NodeJS</h4>
        </motion.div>
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">Postman</h4>
        </motion.div>
      </div>
      <div className="row ms-4 mb-3">
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">HTML</h4>
        </motion.div>
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">CSS</h4>
        </motion.div>
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">Bootstrap</h4>
        </motion.div>
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">Redux</h4>
        </motion.div>
      </div>
      <div className="row ms-4 mb-5">
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">Javascript</h4>
        </motion.div>
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">React</h4>
        </motion.div>
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">Git</h4>
        </motion.div>
        <motion.div
          className="py-2 px-4 mt-6 flex align-items-center col-6 col-lg-3"
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
          <img
            alt=""
            src="../src/images/mysql-logo-svgrepo-com.svg"
            className="image1"
          ></img>
          <h4 className="d-inline fs-6 ms-2 fw-normal">MySQl</h4>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
