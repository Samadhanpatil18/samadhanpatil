import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/About/About';
import Sections from './components/sections/sections';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Preloader from './components/preloader/Preloader';
import MiniProjects from './components/Miniprojects/MiniProjects';

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true); // Preloader state

  useEffect(() => {
    // Hide preloader after 1.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader /> // Show Preloader during loading
      ) : (
        <>
          <div className="flex flex-col w-full h-full bg-mainBg min-h-screen relative">

            <Navbar /> 
           
           

            <Sections />

            <div id="content">
              <main className="main px-[25px] sm:px-[50px] py-0 md:px-[100px] lg:px-[150px] my-0 mx-auto w-full max-w-[1600px] min-h-screen">
                {/* Animate Home component on load */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                >
                  <Home />
                </motion.div>

                <About />
                <Projects />
                <MiniProjects />
                <Contact />
              </main>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
