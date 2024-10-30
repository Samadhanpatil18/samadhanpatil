import React from 'react';

const ProjectCard = ({ title, description, githubLink, liveLink, techStack }) => (
   
  <section>
    <li className="relative card1 transition-all duration-200 ease-in-out" style={{ opacity: 1 }}>
      <div className="group flex flex-col justify-center items-start relative h-full px-7 py-8 rounded-[4px] bg-[#112240] transition-all duration-200 ease-in-out overflow-auto shadow-aboutShadow cursor-pointer">
        <header>
          <div className="flex justify-between items-center mb-[35px]">
            <div className="text-themeBlue text-5xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Folder_On">
                  <path d="M19.435,19.94H4.565a2.5,2.5,0,0,1-2.5-2.5V6.56a2.5,2.5,0,0,1,2.5-2.5h5.27A2.5,2.5,0,0,1,12.292,6.1l.042.222a.5.5,0,0,0,.491.408h6.61a2.5,2.5,0,0,1,2.5,2.5v8.21A2.5,2.5,0,0,1,19.435,19.94ZM4.565,5.06a1.5,1.5,0,0,0-1.5,1.5V17.44a1.5,1.5,0,0,0,1.5,1.5h14.87a1.5,1.5,0,0,0,1.5-1.5V9.23a1.5,1.5,0,0,0-1.5-1.5h-6.61a1.5,1.5,0,0,1-1.474-1.225l-.042-.221A1.5,1.5,0,0,0,9.835,5.06Z" />
                </g>
              </svg>
            </div>

            <div className="flex items-center -mr-[10px]">
              <a
                href={githubLink}
                className="flex justify-center items-center px-[7px] py-[5px] relative z-[1] text-2xl text-secondaryText transition-all duration-200 hover:text-themeBlue"
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
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>

              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center px-[7px] py-[5px] relative z-[1] text-2xl text-secondaryText transition-all duration-200 hover:text-themeBlue"
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
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>
          </div>

          <h3 className="mb-[10px] text-primaryText transition-all duration-500 group-hover:text-themeBlue text-xl font-bold leading-[1.1] font-fontHeading">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="block absolute z-0 w-full h-full top-0 left-0"></div>
             {title}
            </a>
          </h3>

          <div className="text-secondaryText text-[14px] font-semibold font-fontParagraph">
            <p>
              {description}
            </p>
          </div>
        </header>

        <footer>
          <ul className="flex items-end flex-wrap p-0 mt-[20px] list-none">
            {techStack.map((tech, index) => (
            <li
              key={index}
              className="font-mono text-[13px] text-secondaryText mr-[12px]"
            >
              {tech}
            </li>
          ))}
          </ul>
        </footer>
      </div>
    </li> 

</section>








);

export default ProjectCard;
