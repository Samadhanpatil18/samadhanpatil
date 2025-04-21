// src/components/About.js

import profile1 from '../../assets/images/profile1.jpg'; 

const About = () => {
    return (

    <section id="about" className="py-20">
     <section
  id="about"
  className="my-[100px] md:my-0 mx-auto py-[100px] md:px-0 max-w-[900px]"
  style={{ opacity: 1, transform: 'none' }}
>
  <div className="flex items-center justify-end relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-sectionHeading text-primaryText font-bold">
    <div className="hidden md:block w-full md:w-[200px] lg:w-[300px] h-[1px] bg-blue-400/20 relative top-[5px] mr-[20px]"></div>
    <span className="relative -bottom-1 text-themeBlue font-mono text-smallSize font-semibold mr-[10px]">02.</span>
    <h2 className="text-sectionHeading">About me</h2>
    <div className="block md:hidden w-full h-[1px] bg-blue-400/20 relative top-[5px] ml-[10px]"></div>
  </div>

  <div className="flex justify-center lg:justify-between place-items-start gap-10 flex-wrap-reverse md:flex-nowrap">
    {/* Image Section */}
    <div className="group w-full max-w-[300px] relative h-[340px]">
      <div className="absolute top-[14px] right-[14px] w-full h-[320px] border-2 border-themeBlue rounded-lg transition-all duration-200 group-hover:top-[24px] group-hover:right-[24px]"></div>
      <div className="block relative w-full bg-themeBlue shadow-aboutShadow max-h-[400px] h-[320px] rounded-lg transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
        <div
          className="w-full h-full bg-no-repeat rounded-lg relative z-[1] transition-all duration-300 mix-blend-multiply grayscale group-hover:mix-blend-normal group-hover:filter-none"
          style={{
            
            backgroundImage: `url(${profile1})`,

            backgroundPosition: 'center 25%',
            backgroundSize: 'cover',
          }}
        ></div>
      </div>
    </div>

    {/* Text Section */}
   <div className="text-secondaryText font-fontParagraph text-base md:text-justify w-full md:max-w-[350px] lg:max-w-[500px]">
     <p className="mb-3">
    I’m a passionate <span className="text-themeBlue">MERN Stack Developer</span> skilled in building full-stack web applications using{' '}
    <span className="text-themeBlue">MongoDB</span>, <span className="text-themeBlue">Express.js</span>,{' '}
    <span className="text-themeBlue">React.js</span>, and <span className="text-themeBlue">Node.js</span>. I specialize in creating clean,
    responsive user interfaces and building robust backend APIs with a focus on performance and scalability.
  </p>
       <p className="mb-3">
    I’ve worked on various real-world projects like a <span className="text-themeBlue">Food Delivery App (FoodEasy)</span>,{' '}
    a <span className="text-themeBlue">Real-Time Chat App</span>, and a <span className="text-themeBlue">CSS Generator Tool</span>,
    each helping me strengthen my development workflow and understand user-focused design.
  </p>
      <p className="mb-3">
        I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web
        applications.
      </p>
      <p className="mb-4">Here are a few technologies I’ve been working with recently:</p>

     <ul className="grid grid-cols-custom gap-x-3 overflow-hidden list-none">
    <li>
      <i className="text-themeBlue leading-3 mr-[7px]">▹</i>Java
    </li>
    <li>
      <i className="text-themeBlue leading-3 mr-[7px]">▹</i>JavaScript (ES+)
    </li>
    <li>
      <i className="text-themeBlue leading-3 mr-[7px]">▹</i>React Js
    </li>
    <li>
      <i className="text-themeBlue leading-3 mr-[7px]">▹</i>Node.js
    </li>
    <li>
      <i className="text-themeBlue leading-3 mr-[7px]">▹</i>Express.js
    </li>
    <li>
      <i className="text-themeBlue leading-3 mr-[7px]">▹</i>MongoDB
    </li>
    <li>
      <i className="text-themeBlue leading-3 mr-[7px]">▹</i>API Handling
    </li>
  </ul>
    </div>
  </div>

</section>
   



    </section>
    );
};

export default About;
