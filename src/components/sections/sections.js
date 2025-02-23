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

// <li className="p-[10px] transition hover:-translate-y-[3px] duration-300 text-secondaryText hover:text-themeBlue">
//   <a
//     href="https://auth.geeksforgeeks.org/user/tapeshdua420/"
//     target="_blank"
//     aria-label="GeeksforGeeks"
//     rel="noopener noreferrer"
//   >
//     <svg
//       stroke="currentColor"
//       fill="currentColor"
//       strokeWidth="0"
//       role="img"
//       viewBox="0 0 24 24"
//       className="w-[22px] h-[22px]"
//       height="1em"
//       width="1em"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"></path>
//     </svg>
//   </a>
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
