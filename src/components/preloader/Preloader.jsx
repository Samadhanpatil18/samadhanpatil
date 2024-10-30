import React from "react";
import "./Preloader.css"; // Import your CSS
import preloaderLogo from '../../assets/images/logo.jpg'; // Import the logo

const Preloader = () => {
  return (
    <div className="preloader" id="preloader">
      <div className="container_s"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <img src={preloaderLogo} alt="Loading..." className="preloader-logo" />
    </div>
  );
};

export default Preloader;
