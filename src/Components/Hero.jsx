import React from 'react';
import Typewriter from 'typewriter-effect';
import heroImage from '../assets/HeroImage.png';
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";


const Hero = () => {
  const designations = [
    "Front-End Developer",
    "Full Stack Developer (MERN)",
    "Creative Web Developer & Designer",
  ];

  return (
    <section id='home' className="w-11/12 scroll-mt-20 max-w-7xl mx-auto py-12 md:py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 text-white space-y-6 text-center md:text-left">
          <p className="text-3xl md:text-5xl font-semibold flex items-baseline justify-center md:justify-start gap-2">
            Hello
            <span className="w-3 h-3 bg-[#c455f3] rounded-full animate-pulse"></span>
          </p>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-[#8a31af] text-2xl">____I'm</span> Nurul Afsar
            </h1>

            <p className="text-2xl md:text-3xl font-medium text-[#f3e00e]">
              <Typewriter
                options={{
                  strings: designations,
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 30,
                }}
              />
            </p>
          </div>

          <div>
            <a
              href="/Nurul_Afsar Resume.pdf" // change this to your resume path
              download
              className="inline-block mt-8 px-6 py-3 bg-[#1348e7] text-white font-semibold rounded-full hover:bg-[#112fb4] transition duration-300"
            >
              📥 Download Resume
            </a>
          </div>

          <div className='flex gap-4 my-4 md:justify-start justify-center'>
            <a href="https://www.linkedin.com/in/nurul-afsar-060285379/" target='_blank'><FaLinkedin size={38} fill='#1952ff'/></a>
            <a href="https://github.com/nurulafsarinfo" target='_blank'><FaGithub size={38} fill='#1952ff'/></a>
            <a href="#" title='Comming Soon'><FaXTwitter size={38} fill='#1952ff'/></a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={heroImage}
            alt="Hero"
            className="w-68 h-68 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-[#1348e7]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
