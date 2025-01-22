// src/components/Contact.js


const Contact = () => {
    return (
       <section
      id="contact"
      className="px-0 py-[60px] sm:py-[80px] md:py-[100px] max-w-[600px] text-center mt-[0px] mx-auto mb-[50px] md:mb-[0px]"
      style={{ opacity: 1, transform: 'none' }}
    >
      <h2 className="mx-0 mt-[10px] mb-[20px] w-full leading-[1.1] block text-themeBlue font-mono text-lg tracking-wider">
        <span className="text-base relative bottom-0 -mb-[3px] mr-[5px] sm:mr-[10px] sm:mb-0">04.</span>
        What's Next?
      </h2>

      <h2 className="font-fontHeading text-primaryText text-clamp3 mb-[10px] font-semibold leading-[1.1]">
        Get In Touch
      </h2>
      
      
      <p className="font-sans text-secondaryText text-lg leading-[1.5] tracking-wide">
        I am actively seeking new career opportunities, and my inbox is always open. 
        Whether you have a job opportunity or just want to connect, feel free to reach out.
        <br />
      </p>
      
      <div
        className="transition-all ease-in-out duration-300 hover:-translate-x-1 hover:-translate-y-1 mt-[50px]"
        style={{ opacity: 1 }}
      >
        <a
          href="mailto:samadhanpatil0018@gmail.com" 
          className="font-mono text-themeBlue bg-transparent border border-themeBlue rounded-[4px] py-[10px] px-4 text-[14px] transition-all ease-in-out duration-300 hover:shadow-buttonShadow px-7 !py-4 !font-fontHeading tracking-widest"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
      </div>
    </section>
    );
};

export default Contact;
