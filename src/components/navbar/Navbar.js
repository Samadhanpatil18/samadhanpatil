import "./navbar.css";
import React, { useState } from 'react';
import LOGO from '../../assets/images/logo.jpg'; 

const Navbar = () => {
  // State to manage menu visibility
  const [menuVisible, setMenuVisible] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <div
        className="pointer-events-none inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: 'radial-gradient(400px at 1108px 59px, rgba(29, 78, 216, 0.15), transparent 80%)',
        }}
      ></div>

      <div className="flex items-center fixed top-0 w-full bg-mainBg justify-between z-[11] h-[100px] backdrop-blur-md py-0 px-4 bg-opacity-75">

        <nav className="flex justify-between items-center relative w-full text-primaryText font-fontParagraph z-[12]">
          {/* Logo */}
          <div
            className="w-14 cursor-pointer transition-all hover:-translate-x-[4px] hover:-translate-y-[4px]"
            style={{ opacity: 1, transform: 'none' }}
          >
            <img
              src={LOGO}
              alt="SP"
              className="w-full h-full transition-all hover:drop-shadow-buttonShadow"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center md:flex">
            <ol className="flex ol justify-between items-center p-0 m-0 list-none">
              <li
                className="p-[10px] my-0 mx-1 relative text-smallSize font-mono tracking-wide"
                style={{ opacity: 1, transform: 'none' }}
              >
                <span className="text-themeBlue mr-1 text-[12px]">01.</span>
                <a href="/#" className="hover:text-themeBlue transition-all duration-200 text-[14px]">
                  Home
                </a>
              </li>
              <li
                className="p-[10px] my-0 mx-1 relative text-smallSize font-mono tracking-wide"
                style={{ opacity: 1, transform: 'none' }}
              >
                <span className="text-themeBlue mr-1 text-[12px]">02.</span>
                <a href="/#about" className="hover:text-themeBlue transition-all duration-200 text-[14px]">
                  About
                </a>
              </li>
              <li
                className="p-[10px] my-0 mx-1 relative text-smallSize font-mono tracking-wide"
                style={{ opacity: 1, transform: 'none' }}
              >
                <span className="text-themeBlue mr-1 text-[12px]">03.</span>
                <a href="/#projects" className="hover:text-themeBlue transition-all duration-200 text-[14px]">
                  Projects
                </a>
              </li>
              <li
                className="p-[10px] my-0 mx-1 relative text-smallSize font-mono tracking-wide"
                style={{ opacity: 1, transform: 'none' }}
              >
                <span className="text-themeBlue mr-1 text-[12px]">04.</span>
                <a href="/#contact" className="hover:text-themeBlue transition-all duration-200 text-[14px]">
                  Contact
                </a>
              </li>
            </ol>

            {/* Resume Button */}
            <div
              className="transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 ml-[15px]"
              style={{ opacity: 1 }}
            >
              <a
                href="https://drive.google.com/file/d/12GLvmudaCgV1D6mmT6C-_Vc1ClhT4o5A/view?usp=drive_link"
                className="font-mono text-themeBlue bg-transparent border border-themeBlue rounded-[4px] py-[10px] px-4 text-[14px] transition-all ease-in-out duration-300 hover:shadow-buttonShadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="flex items-center md:hidden cursor-pointer"
            style={{ opacity: 1, transform: 'none' }}
            onClick={toggleMenu}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-themeBlue text-4xl hover:brightness-50"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
            </svg>
          </div>
        </nav>
      </div>

      <div
        className={`flex items-center fixed top-0 w-full bg-mainBg h-full z-50 justify-center transition-all duration-300 ${
          menuVisible ? 'right-0 opacity-100' : 'right-full opacity-0'
        }`}
      >
        {/* Close Button */}
        <div className="absolute top-10 right-10 cursor-pointer z-[51]" onClick={toggleMenu}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="text-themeBlue text-3xl hover:brightness-50"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
          </svg>
        </div>

        {/* Mobile Main Navigation Menu */}
        <div className="flex flex-col items-center gap-4 justify-center relative w-full h-full text-primaryText">
          <ol className="flex justify-between items-center p-0 m-0 list-none flex-col">
            <li className="p-[10px] text-lg flex flex-col items-center font-mono tracking-wide">
              <span className="text-themeBlue text-base mr-1">01.</span>
              <a href="/#" className="hover:text-themeBlue transition-all duration-200">
                Home
              </a>
            </li>
            <li className="p-[10px] text-lg flex flex-col items-center font-mono tracking-wide">
              <span className="text-themeBlue text-base mr-1">02.</span>
              <a href="/#about" className="hover:text-themeBlue transition-all duration-200">
                About
              </a>
            </li>
            <li className="p-[10px] text-lg flex flex-col items-center font-mono tracking-wide">
              <span className="text-themeBlue text-base mr-1">03.</span>
              <a href="/#projects" className="hover:text-themeBlue transition-all duration-200">
                Projects
              </a>
            </li>
            <li className="p-[10px] text-lg flex flex-col items-center font-mono tracking-wide">
              <span className="text-themeBlue text-base mr-1">04.</span>
              <a href="/#contact" className="hover:text-themeBlue transition-all duration-200">
                Contact
              </a>
            </li>
          </ol>

          <div className="transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 mt-[15px]">
            <a
              href="https://drive.google.com/file/d/19hQBLe0TDeFqaCWM36tt0ug6Wfsq67df/view?usp=drive_link"
              className="font-mono text-themeBlue bg-transparent border border-themeBlue rounded-[4px] py-[10px] px-4 text-[14px] transition-all ease-in-out duration-300 hover:shadow-buttonShadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
