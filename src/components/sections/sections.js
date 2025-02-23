import React, { useState } from 'react';
import "./sections.css"

const Sections = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
<section>
  <div
    className="sections w-[40px] hidden fixed bottom-0 md:block left-[20px] right-auto lg:left-[40px] z-10 h-19vh text-primaryText"
    style={{ opacity: 1 }}
  >
    <ul className="flex flex-col items-center m-0 p-0 list-none">
      <li className="p-[10px] transition hover:-translate-y-[3px] duration-300 text-secondaryText hover:text-themeBlue">
        <a
          href="https://github.com/Samadhanpatil18/"
          target="_blank"
          aria-label="Github"
          rel="noopener noreferrer"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[22px] h-[22px]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
      </li>

     <li className="p-[10px] transition hover:-translate-y-[3px] duration-300 text-secondaryText hover:text-themeBlue">
  <a
    href="https://www.linkedin.com/in/samadhan-patil18/"
    target="_blank"
    aria-label="Linkedin"
    rel="noopener noreferrer"
  >
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[22px] h-[22px]"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </a>
</li>






    </ul>
   <div class="block w-[1px] h-[90px] mx-auto my-0 mt-[15px] bg-secondaryText"></div>
  </div>

</section>


  <div
  className="sections w-[40px] hidden fixed bottom-0 md:block left-auto right-[20px] lg:right-[40px] z-10 text-primaryText"
  style={{ opacity: 1 }}
>
  <div className="flex flex-col items-center relative">
    <a
      href="samadhanpatil0018@gmail.com"
      rel="noopener noreferrer"
      target="_blank"
      className="font-mono text-sm my-[20px] mx-auto p-[10px] tracking-widest transition hover:-translate-y-[3px] duration-300 text-secondaryText hover:text-themeBlue"
      style={{ writingMode: 'vertical-rl' }}
    >
      samadhanpatil0018@gmail.com
    </a>
  </div>
  <div className="block w-[1px] h-[90px] mx-auto my-0 bg-secondaryText"></div>
</div>
    </>
  );
};

export default Sections;
