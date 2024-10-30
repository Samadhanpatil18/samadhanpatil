import profile from '../../assets/images/profile.jpg'; 

import "./home.css";

const Home = () => {
  return (
    <>
      <section>
        <div className=" lg:Texts flex justify-center h-screen min-h-screen lg:justify-between gap-8 lg:gap-0 items-center relative flex-wrap-reverse w-full">
          <div className="flex flex-col items-center lg:items-start max-w-[45rem] lg:max-w-[30rem]">
            <h1 
              className="text-themeBlue text-clamp1 tracking-wider leading-loose font-mono font-normal ml-[2px] sm:ml-[3px]" 
              style={{ opacity: 1, transform: 'none' }}
            >
              Hi, my name is
            </h1>
            <h2 
              className="text-clamp2 m-0 font-bold text-primaryText font-fontHeading" 
              style={{ opacity: 1, transform: 'none' }}
            >
              Samadhan Patil
            </h2>
            <h3 
              className="text-center lg:text-left text-clamp2 text-secondaryText font-bold font-fontHeading" 
              style={{ opacity: 1, transform: 'none' }}
            >
              Front-End React Developer
            </h3>
            <p 
              className="text-center lg:text-left m-0 mt-[20px] text-secondaryText font-fontParagraph" 
              style={{ opacity: 1, transform: 'none' }}
            >
              I'm a passionate front-end developer specialized in building exceptional web apps from Maharashtra, India 📍
            </p>
            <div 
              className="transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 mt-[50px]" 
              style={{ opacity: 1 }}
            >
              <a 
                href="/#contact" 
                className="font-mono text-themeBlue bg-transparent border border-themeBlue rounded-[4px] py-[10px] px-4 text-[14px] transition-all ease-in-out duration-300 hover:shadow-buttonShadow px-[1.75rem] py-[1rem] text-[14px] tracking-wide" 
                target="_self"
              >
                Get In Touch!
              </a>
            </div>
          </div>

          <div className="w-[18rem] h-[18rem] sm:w-[21rem] sm:h-[21rem]" style={{ opacity: 1, transform: 'none' }}>
            <div 
              className="w-full h-full rounded-custom animate-morph border border-themeBlue bg-no-repeat" 
              style={{ 

              backgroundImage: `url(${profile})`,

                backgroundPosition: 'center center', 
                backgroundSize: 'cover' 
              }}

            ></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
