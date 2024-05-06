import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Bottom from "../Components/Bottom";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <Navbar setShow={setShow} />
      <Home show={show} />
      <About />
      <Projects />
      <Contact />
      <Bottom />
    </div>
  );
}

export default App;
