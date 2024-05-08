import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Home from "../Components/Home";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Bottom from "../Components/Bottom";

function App() {
  const [show, setShow] = useState(true);
  const [mood, setMood] = useState(true);
  return (
    <div>
      <Navbar setShow={setShow} mood={mood} setMood={setMood} />
      <Home show={show} mood={mood} />
      <About mood={mood} />
      <Projects mood={mood} />
      <Contact mood={mood} />
      <Bottom mood={mood} />
    </div>
  );
}

export default App;
