import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="container mt-5" id="project">
      <div className="row">
        <h1 className="d-flex justify-content-center fw-bolder">Projects</h1>
      </div>
      <div className="row">
        <h3 className="text-primary ms-3 fw-bold mt-3">What I build</h3>
      </div>
      <div className="row justify-content-center mt-4">
        <motion.div
          className="card col-10 col-lg-5 mx-auto"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: false }}
        >
          <img
            src="rent-bike-logo-101992_101992-original.webp"
            height="250px"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Bike Rental Portal</h5>
            <p className="card-text">
              This is a completly MERN stack project . In this project I used
              React JS for frontend and Node JS for backend.
            </p>
            <a
              target="_blank"
              href="https://famous-manatee-37eaae.netlify.app/"
              className="btn btn-primary"
            >
              Open project
            </a>
          </div>
        </motion.div>
        <motion.div
          className="card col-10 col-lg-5 mx-auto mt-4 mt-lg-0"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: false }}
        >
          <img
            src="url-shortener.jpg"
            height="250px"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">URL shortener</h5>
            <p className="card-text">
              This is a completly MERN stack project . In this project I used
              React JS for frontend and Node JS for backend.
            </p>
            <a
              target="_blank"
              href="https://golden-parfait-2efa66.netlify.app/"
              className="btn btn-primary"
            >
              Open project
            </a>
          </div>
        </motion.div>
      </div>
      <div className="row justify-content-center mt-4">
        <motion.div
          className="card col-10 col-lg-5 mx-auto"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: false }}
        >
          <img
            src="mobilestore-future.png"
            height="250px"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Online Mobile shopping</h5>
            <p className="card-text">
              This is a frontend project using React JS with Redux.
            </p>
            <a
              target="_blank"
              href="https://comfy-otter-6d8217.netlify.app/"
              className="btn btn-primary"
            >
              Open project
            </a>
          </div>
        </motion.div>
        <motion.div
          className="card col-10 col-lg-5 mx-auto mt-4 mt-lg-0"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: false }}
        >
          <img
            src="CRUD.jpeg"
            height="250px"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">CRUD project</h5>
            <p className="card-text">
              This is a frontend project by using React JS.
            </p>
            <a
              target="_blank"
              href="https://whimsical-pika-4289e1.netlify.app/"
              className="btn btn-primary"
            >
              Open project
            </a>
          </div>
        </motion.div>
      </div>
      <div className="row justify-content-center mt-4">
        <motion.div
          className="card col-10 col-lg-5 mx-auto"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: false }}
        >
          <img
            src="router.png"
            height="250px"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Page Router</h5>
            <p className="card-text">
              This is a frontend project using React JS with React router.
            </p>
            <a
              target="_blank"
              href="https://polite-clafoutis-9f7f46.netlify.app/"
              className="btn btn-primary"
            >
              Open project
            </a>
          </div>
        </motion.div>
        <motion.div
          className="card col-10 col-lg-5 mx-auto mt-4 mt-lg-0"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1.5,
            },
          }}
          viewport={{ once: false }}
        >
          <img
            src="todo.jpg"
            height="250px"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">TODO project</h5>
            <p className="card-text">
              This is a frontend project by using React JS with Hooks.
            </p>
            <a
              target="_blank"
              href="https://golden-gecko-557c89.netlify.app/"
              className="btn btn-primary"
            >
              Open project
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
