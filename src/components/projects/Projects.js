
import React, { useState } from 'react';

import cssGenImage from '../../assets/images/project_css_gen-Sj8kHjfR.jpg'; 
import chatAppImage from '../../assets/images/project_ChatApp.jpg'; 

const Projects = () => {
    const [showMore, setShowMore] = useState(false);


    return (

<section
  id="projects"
  className="my-[100px] md:my-0 mx-auto py-[100px] md:mx-0"
  style={{ opacity: 1, transform: 'none' }}
>
  <div className="flex items-center justify-start relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-sectionHeading text-primaryText font-bold">
    <span className="relative -bottom-1 text-themeBlue font-mono text-smallSize font-semibold mr-[10px]">
      03.
    </span>
    <h2 className="text-sectionHeading">Some Things I've Built</h2>
    <div className="block sm:hidden w-full h-[1px] bg-blue-400/20 relative top-[5px] ml-[10px]" />
    <div className="hidden sm:block w-full md:w-[200px] lg:w-[300px] h-[1px] bg-blue-400/20 relative top-[5px] ml-[20px]" />
  </div>
  <ul className="list-none p-0 m-0 w-full">

    {/* First Project */}

    <li className="relative grid gap-[10px] grid-cols-12 items-center mb-[70px] md:mb-[100px] transition-all duration-200 shadow-aboutShadow md:shadow-none">
      <div
        className="p-[2s5px] pb-[20px] !col-full md:!col-mdScreenRev lg:!col-lgScreen md:text-right sm:p-[40px] sm:pb-[30px] flex flex-col justify-center h-full z-[5] md:block md:h-auto relative"
        style={{ gridArea: '1 / 1 / -1 / 7' }}
      >
        <p className="my-[10px] text-themeBlue font-mono text-sm font-semibold tracking-wider">
          Featured Project
        </p>
        <h3 className="text-primaryText font-bold leading-[1.1] text-sectionHeading transition-all duration-200 hover:text-themeBlue font-fontHeading md:mb-[20px]">
          <a
            href="https://snapgram-omega.vercel.app/"
            target="_blank" 
            rel="noopener noreferrer"
          >
           Real-Time ChatApp
          </a>
        </h3>
        <div className="shadow-none md:shadow-aboutShadow transition-all duration-200 relative z-[2] py-[20px] md:p-[25px] rounded text-secondaryText text-base bg-transparent md:bg-[#112240] font-fontParagraph md:hover:shadow-bigShadow">
          <p>
             A real-time chat app built with React and JavaScript a Firebase for secure authenticatio, real-time data fetching, and cloud storage using Firestore,enabling dynamic and interactive messaging. As a SaaS solution.This App provides fast, seamless communication with a smooth user experience.
          </p>
        </div>
        <ul className="flex flex-wrap md:justify-end relative z-[2] my-[10px] md:mt-[25px] md:mb-[10px] p-0 list-none">
          <li className="font-mono whitespace-nowrap text-sm text-secondaryText mr-[10px] mb-[5px] md:mr-[20px] md:mb-[5px]">
            React
          </li>
          <li className="font-mono whitespace-nowrap text-sm text-secondaryText mr-[10px] mb-[5px] md:mr-[20px] md:mb-[5px]">
            JavaScript
          </li>
          <li className="font-mono whitespace-nowrap text-sm text-secondaryText mr-[10px] mb-[5px] md:mr-[20px] md:mb-[5px]">
           Firebase 
          </li>
          <li className="font-mono whitespace-nowrap text-sm text-secondaryText mr-[10px] mb-[5px] md:mr-[20px] md:mb-[5px]">
            SaaS
          </li>
          <li className="font-mono whitespace-nowrap text-sm text-secondaryText mr-[10px] mb-[5px] md:mr-[20px] md:mb-[5px]">
            
          </li>
        </ul>
        <div className="flex items-center relative mt-[10px] ml-[10px] md:justify-end md:ml-0 md:mr-[10px] text-primaryText text-[22px]">
          <a
            href="https://github.com/Samadhan0018/RealTimeChatApp"
            className="flex justify-center items-center p-[10px] transition-all duration-200 hover:text-themeBlue"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* GitHub Icon */}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://snapgram-omega.vercel.app/"
            className="flex justify-center items-center p-[10px] transition-all duration-200 hover:text-themeBlue"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* External Link Icon */}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
      <div
        className="!col-full h-full opacity-25 md:!col-lgScreenRev md:h-auto md:opacity-100 shadow-aboutShadow transition-all duration-200 relative"
        style={{ gridArea: '1 / 6 / -1 / -1' }}
      >
        <a
          href="https://snapgram-omega.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-full"
        >
          <div className="group w-full relative max-w-[700px] h-full">
            <div className="block relative w-full bg-themeBlue shadow-aboutShadow rounded-lg transition-all duration-500 mix-blend-screen group-hover:mix-blend-normal h-full z-[3]">
              <img
                className="w-auto md:w-full h-full min-h-[400px] bg-no-repeat rounded-lg relative object-cover transition-all duration-500 mix-blend-multiply grayscale contrast-[70%] brightness-50 md:brightness-95 group-hover:mix-blend-normal group-hover:filter-none opacity-85 md:opacity-100 z-[4]"
                 src={chatAppImage}
                alt="Real-time-ChatApp"
              />
            </div>
          </div>
        </a>
      </div>
    </li>




    <li
  className="relative grid gap-[10px] grid-cols-12 items-center mb-[70px] md:mb-[100px] transition-all duration-200 shadow-aboutShadow md:shadow-none"
  style={{ opacity: 1, transform: 'none' }}
>
  <div
    className="p-[25px] pb-[20px] !col-full md:!col-mdScreen lg:!col-lgContent sm:p-[40px] sm:pb-[30px] flex flex-col justify-center h-full z-[5] md:block md:h-auto relative"
    style={{ gridArea: '1 / 1 / -1 / 7' }}
  >
    <p className="my-[10px] text-themeBlue font-mono text-sm font-semibold tracking-wider">
      Featured Project
    </p>
    <h3 className="text-primaryText font-bold leading-[1.1] text-sectionHeading transition-all duration-200 hover:text-themeBlue font-fontHeading md:mb-[20px]">
      <a
        href="www.//diploye appplink"
        target="_blank"
        rel="noopener noreferrer"
      >
        CSS Generator
      </a>
    </h3>
    <div className="shadow-none md:shadow-aboutShadow transition-all duration-200 relative z-[2] py-[20px] md:p-[25px] rounded text-secondaryText text-base bg-transparent md:bg-[#112240] font-fontParagraph md:hover:shadow-bigShadow">
      <p>
        This web app is a powerful CSS generator developed using React and
        Context API. Users can generate shadows, gradients, and glassmorphism
        effects and get CSS code with a single click.
      </p>
    </div>
    <ul className="flex flex-wrap relative z-[2] my-[10px] md:mt-[25px] md:mb-[10px] p-0 list-none">
      <li className="font-mono whitespace-nowrap text-sm text-secondaryText mr-[10px] mb-[5px] md:mr-[20px]">
        React
      </li>
      <li className="font-mono whitespace-nowrap text-sm text-secondaryText mr-[10px] mb-[5px] md:mr-[20px]">
        Context API
      </li>
      <li className="font-mono whitespace-nowrap text-sm text-secondaryText mr-[10px] mb-[5px] md:mr-[20px]">
        CSS Code
      </li>
      <li className="font-mono whitespace-nowrap text-sm text-secondaryText mr-[10px] mb-[5px] md:mr-[20px]">
        Tailwind CSS
      </li>
    </ul>
    <div className="flex items-center relative mt-[10px] ml-[10px] text-primaryText text-[22px]">
      <a
        href="https://github.com/Samadhan0018/css-generator"
        className="flex justify-center items-center p-[10px] transition-all duration-200 hover:text-themeBlue"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="#http://www.w3.org/2000/svg"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </a>
      <a
        href="#deployement link of css generator"
        className="flex justify-center items-center p-[10px] transition-all duration-200 hover:text-themeBlue"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
    </div>
  </div>

  <div
    className="!col-full h-full opacity-25 md:!col-lgScreen lg:!col-lgImage md:h-auto md:opacity-100 shadow-aboutShadow transition-all duration-200 relative"
    style={{ gridArea: '1 / 6 / -1 / -1' }}
  >
    <a
      href="https://css-generator-by-tapesh.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="h-full"
    >
      <div className="group w-full relative max-w-[700px] h-full">
        <div className="block relative w-full bg-themeBlue shadow-aboutShadow rounded-lg transition-all duration-500 mix-blend-screen group-hover:mix-blend-normal h-full z-[3]">
          <img
            

            src= {cssGenImage}
          
            
            className="w-auto md:w-full h-full min-h-[400px] bg-no-repeat rounded-lg relative object-cover transition-all duration-500 mix-blend-multiply grayscale contrast-[70%] brightness-50 md:brightness-95 group-hover:mix-blend-normal group-hover:filter-none opacity-85 md:opacity-100 z-[4]"
           
            alt="CSS Generator Project Screenshot"
          />
        </div>
      </div>
    </a>
  </div>
</li>



    {/* Repeat similar structure for other projects */}
  </ul>








</section>




           
        
    );
};

export default Projects;
