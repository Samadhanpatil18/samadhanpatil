// MiniProjects.jsx
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'PDF-Merger',
    description: "A PDF Merger Web App built with HTML, CSS, and JavaScript allows users to seamlessly upload and merge multiple PDF files into a single document..",
    githubLink: 'https://github.com/Samadhan0018/PDF_MERGER',
    liveLink: 'https://tapesh-youtube-clone.vercel.app/',
    techStack: [' HTML' ,'CSS', 'javaScript', 'API' ],
  },
  {
    title: 'Scientific Calculator',
    description: 'This calculator provides a lifelike feel, complete with a responsive design for various devices. Switch effortlessly between light and dark modes.',
    githubLink: 'https://github.com/Samadhan0018/Scientific_Calculator',
    liveLink: 'https://portfolio.vercel.app/',
    techStack: ['HTML', 'CSS', 'JavaScript ', 'DOM'],
  },

  {
    title: 'Image-Search-WebApp',
    description: "The Image Search Web App, developed using HTML, CSS, and JavaScript, allows users to search and browse. Users can effortlessly explore, view, and download images sourced",
    githubLink: 'https://github.com/Samadhan0018/image-search-app',
    liveLink: 'https://tapesh-youtube-clone.vercel.app/',
    techStack: [' HTML' ,'CSS', 'javaScript', 'API'],
  },

  {
    title: 'Dynamic Currency Converter',
    description: 'Seamless currency conversion using my React-powered tool. Switch b/w currencies real-time data from a reliable API.',
    githubLink: 'https://github.com/Samadhan0018/Currency_Converter',
    liveLink: 'https://portfolio.vercel.app/',
    techStack: ['React', 'API ', 'TailwindCSS'],
  },
 
 
  // Add more projects here...
];

const MiniProjects = () => {
  const [showAll, setShowAll] = useState(false);

  // Show the first 3 projects by default, and all if 'showAll' is true.
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      className="flex flex-col items-center py-[60px] px-0 sm:py-[80px] max-w-[1000px] mx-auto"
      style={{ opacity: 1 }}
    >
      <h2 className="text-sectionHeading font-bold text-primaryText mb-[10px]">
        Other Noteworthy Projects
      </h2>

     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[15px] mt-[50px]">
      {displayedProjects.map((project, index) => (
       <ProjectCard key={index} {...project} />
      ))}
     </ul>


      {!showAll && (
        <button
          type="button"
          className="font-mono leading-4 text-themeBlue bg-transparent border border-themeBlue rounded-[4px] px-7 py-5 mt-[40px] text-[14px] transition-all duration-300 hover:shadow-buttonShadow hover:-translate-x-1 hover:-translate-y-1"
          onClick={() => setShowAll(true)}
        >
            
          Show More
        </button>
      )}
    </section>
   


  );
};

export default MiniProjects;
