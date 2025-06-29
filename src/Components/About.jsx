import React from 'react';
import { FaCode } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { FaBug } from 'react-icons/fa'




const About = () => {
    return (
        <div data-aos="fade-up" className='w-11/12 mx-auto bg-[#020b29] rounded-2xl p-4 md:p-8 my-12'>
            <div data-aos="zoom-in" className='flex flex-col items-center mb-8'>
                <p className='text-3xl font-bold'>About Me</p>
                <div className='flex gap-2'>
                    <div className='w-20 h-0.5 -ml-5 bg-amber-300'></div>
                    <div className='w-5 h-0.5 bg-amber-300'></div>
                    <div className='w-2 h-0.5 bg-amber-300'></div>
                </div>
            </div>





            <div  className='grid md:grid-cols-5 '>
                <div className='col-span-2 space-y-2 md:block hidden pl-10'>
                    <div data-aos="fade-right" data-aos-delay="100" className='flex items-center space-x-4 border-l-3 border-[#8a31af] p-4'>
                        <FaCode size={48} color="white" />
                        <p className='text-xl font-medium'>Website Development</p>
                    </div>
                    <div className='w-2 h-2 -ml-0.5 bg-[#8a31af] rounded-full mr-6'></div>

                    <div data-aos="fade-right" data-aos-delay="300" className='flex items-center space-x-4 border-l-3 border-[#8a31af] p-4'>
                        <FaBug size={48} color="white" />
                        <p className='text-xl font-medium'>Debug Error</p>
                    </div>
                    <div className='w-2 h-2 -ml-0.5 bg-[#8a31af] rounded-full mr-6'></div>

                    <div data-aos="fade-right" data-aos-delay="500" className='flex items-center space-x-4 border-l-3 border-[#8a31af] p-4'>
                        <FaServer size={48} color="white" />
                        <p className='text-xl font-medium'>Website Hosting</p>
                    </div>
                </div>



                <div data-aos="fade-left" data-aos-delay="200" className='col-span-3 md:ml-10 h-[420px] overflow-scroll'>
                    <p className="text-lg leading-8 text-gray-500 font-medium text-wrap">
                        Assalamu Alaikum! <br />
                        I'm <span className="text-[#f3e00e] font-semibold">Nurul Afsar</span>, a passionate Front-End and MERN Stack Developer. <br /> My programming journey began during my diploma studies, where I first started exploring Python. That curiosity quickly grew into a deep interest in web development. I started from the basics — learning HTML and CSS — and then gradually discovered the power of JavaScript. As I explored further, I found that JavaScript could be used for both frontend and backend development, which drew me deeper into the world of interactive and full-stack web applications.
                        <br /><br />

                        Since childhood, I’ve been curious about computers and technology. This passion led me to pursue a diploma in CST (Computer Science & Technology). I enjoy building responsive UI/UX designs and creating user-friendly, accessible websites. I particularly love working on projects that require both strong logic and aesthetic design — even if they’re challenging, they grab my attention the most.
                        <br /><br />

                        I strive to improve by understanding complex concepts and always seek guidance from experienced developers. I'm a firm believer in learning from others and growing through collaboration.
                        <br /><br />
                        Outside of coding, I enjoy playing cricket, traveling, and occasionally sketching. These hobbies help me stay creative and refreshed.
                        <br /><br />
                        My goal is to become a skilled and impactful developer, contributing to meaningful web applications. I love learning new technologies and thrive in collaborative team environments.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default About;