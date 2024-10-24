import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"

const App = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    Aos.init();
    // Set the initial theme based on the system's preference or default to 'light'
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    // Apply the theme to the body element
    document.body.className = theme;
    // Store the selected theme in local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
