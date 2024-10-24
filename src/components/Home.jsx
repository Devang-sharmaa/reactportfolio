import React, { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";  // Importing the hero JSON file
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "I'm Devang Sharma",
        "I'm a frontend dev",
      ],
      typeSpeed: 50,       // Slightly faster typing speed
      backSpeed: 30,       // Slightly faster backspace speed
      startDelay: 500,     // Delay before typing starts
      backDelay: 1000,     // Pause before starting to backspace
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <div className="typed-text-container">
            <h1 ref={typedRef}></h1>
          </div>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3 download-resume"
          >
            Download Resume.
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={hero.imgSrc} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;  
