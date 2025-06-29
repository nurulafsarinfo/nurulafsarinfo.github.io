import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/myProfile-Logo.png';
import img2 from '../assets/EnglishJanala.png';
import img3 from '../assets/GardenHub.png';
import img4 from '../assets/StadySphere.png';
import { SiAxios, SiExpress, SiFirebase, SiJavascript, SiJsonwebtokens, SiMongodb, SiNetlify, SiReactquery, SiTailwindcss, SiVite } from 'react-icons/si';
import { FaArrowRight, FaCss3Alt, FaGithub, FaHtml5, FaMicrophone, FaNodeJs, FaReact } from 'react-icons/fa';



const backdropVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariant = {
    hidden: { opacity: 0, scale: 0.9, y: -30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            when: "beforeChildren",
            staggerChildren: 0.2,
        },
    },
};

const childVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};









const Projects = () => {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null)

    const projects = [

        {
            id: 1,
            project_name: "Garden Hub",
            project_image: img3, // Add image URL here
            liveLink: "https://gardeners-user-auth.web.app/",
            githubClientRepo: "https://github.com/nurulafsarinfo/GardenHub-client-site",
            githubServerRepo: "https://github.com/nurulafsarinfo/GardenHub-server-site",
            description: (
                <>
                    <p>
                        <strong>Garden Hub</strong> is a gardening community platform where users can:
                    </p>
                    <ul className="list-disc list-inside ml-4 my-2">
                        <li>Post and manage their gardening tips</li>
                        <li>Participate in quizzes to improve gardening knowledge</li>
                        <li>View trending tips based on likes</li>
                        <li>Use a simple dashboard to manage their own posts</li>
                    </ul>
                    <p>
                        Built with a RESTful API using Express.js and protected routes based on Firebase Auth.
                    </p>
                </>
            ),
            tech: [
                { name: "JavaScript", icon: <SiJavascript size={24} className="text-yellow-400" /> },
                { name: "React", icon: <FaReact size={24} className="text-cyan-400" /> },
                { name: "Tailwind", icon: <SiTailwindcss size={24} className="text-teal-400" /> },
                { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-600" /> },
                { name: "Express.js", icon: <SiExpress size={24} className="text-gray-800" /> },
                { name: "MongoDB", icon: <SiMongodb size={24} className="text-green-500" /> },
                { name: "Firebase Auth", icon: <SiFirebase size={24} className="text-yellow-500" /> },
                { name: "GitHub", icon: <FaGithub size={24} className="text-black" /> },
                { name: "Vite", icon: <SiVite size={24} className="text-purple-400" /> }
            ],
            challenges: [
                "Faced issues while integrating the trending tips logic with backend filtering.",
                "Implemented basic dashboard layout and encountered responsiveness bugs initially.",
                "Faced difficulties ensuring user can edit/delete only their own posts securely."
            ],
            futurePlane: [
                "Integrate role-based dashboard for Admin and Users.",
                "Add dark mode and better visual analytics for tips.",
                "Enable comment section under each tip post."
            ]
        },

        {
            id: 2,
            project_name: "StudySphere",
            project_image: img4, // Add image path
            liveLink: "https://stadysphere-a11.firebaseapp.com/",
            githubClientRepo: "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-nurulafsarinfo.git",
            githubServerRepo: "https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-nurulafsarinfo.git",
            description: (
                <>
                    <p>
                        <strong>StudySphere</strong> is an assignment management platform designed for students and teachers, offering:
                    </p>
                    <ul className="list-disc list-inside ml-4 my-2">
                        <li>Authenticated users can create, view, and edit assignments</li>
                        <li>Teachers can give marks and feedback</li>
                        <li>Dynamic filtering and searching of assignments by title and difficulty</li>
                        <li>JWT-based protected routes and secure data flow</li>
                    </ul>
                    <p>
                        Though there’s no full dashboard yet, the system ensures role-based data control using backend logic.
                    </p>
                </>
            ),
            tech: [
                { name: "JavaScript", icon: <SiJavascript size={24} className="text-yellow-400" /> },
                { name: "React", icon: <FaReact size={24} className="text-cyan-400" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss size={24} className="text-teal-400" /> },
                { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-600" /> },
                { name: "Express.js", icon: <SiExpress size={24} className="text-gray-800" /> },
                { name: "MongoDB", icon: <SiMongodb size={24} className="text-green-500" /> },
                { name: "Firebase Auth", icon: <SiFirebase size={24} className="text-yellow-500" /> },
                { name: "JWT", icon: <SiJsonwebtokens size={24} className="text-red-600" /> },
                { name: "TanStack Query", icon: <SiReactquery size={24} className="text-red-500" /> },
                { name: "Axios", icon: <SiAxios size={24} className="text-blue-500" /> },
                { name: "GitHub", icon: <FaGithub size={24} className="text-black" /> },
                { name: "Vite", icon: <SiVite size={24} className="text-purple-400" /> }
            ],
            challenges: [
                "Faced challenges while integrating JWT authentication using Firebase-issued tokens.",
                "Encountered issues while combining search and filter features dynamically.",
                "Worked through secure Axios instance configuration using TanStack Query for data fetching."
            ],
            futurePlane: [
                "Implement full dashboard for Admin, Teacher, and Student roles.",
                "Add real-time notifications for submission updates and grading.",
                "Enable file uploads for assignment documents (PDF, DOCX).",
                "Build messaging feature for student-teacher communication.",
                "Add mobile responsiveness and dark mode for better accessibility."
            ]
        },

        {
            id: 3,
            project_name: "English জানালা",
            project_image: img2, // Optional: add if you have one
            liveLink: "https://ph-assignment-6-nurulafsar.netlify.app/",
            githubClientRepo: "https://github.com/programming-hero-web-course1/b11-a6-english-janala-nurulafsarinfo.git",
            description:
                "English জানালা is a vocabulary learning web app where users can explore English words categorized by lessons. It includes features like viewing word meanings, hearing pronunciation using browser's SpeechSynthesis API, and viewing detailed modals with synonyms and example usage.",
            tech: [
                { name: "JavaScript", icon: <SiJavascript size={24} className="text-yellow-400" /> },
                { name: "HTML5", icon: <FaHtml5 size={24} className="text-orange-600" /> },
                { name: "CSS3", icon: <FaCss3Alt size={24} className="text-blue-500" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss size={24} className="text-teal-400" /> },
                { name: "SweetAlert2", icon: <SiJavascript size={24} className="text-purple-400" /> },
                { name: "SpeechSynthesis API", icon: <FaMicrophone size={24} className="text-gray-600" /> },
                { name: "Netlify", icon: <SiNetlify size={24} className="text-blue-600" /> }
            ],
            challenges: [
                "Creating a manual PIN-based login system and managing UI visibility dynamically.",
                "Handling multiple UI sections conditionally based on login/logout flow without using any framework.",
                "Integrating and controlling SpeechSynthesis API for accurate pronunciation.",
                "Rendering vocabulary cards dynamically and loading modal content from a remote API using plain JavaScript."
            ],
            futurePlane: [
                "Implement actual authentication (e.g., Firebase or custom backend login).",
                "Allow users to mark favorite or difficult words for personalized practice.",
                "Add a quiz feature for testing vocabulary after each lesson.",
                "Introduce dark mode and make the UI more mobile-friendly.",
                "Show daily new word notifications and streak tracking system."
            ]
        }
    ]





    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setOpenModal(true);
    }
    // selectedProject.tech.map((tool) => console.log("tool is",tool))

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    return (
        <div id='projects' className="w-11/12 scroll-mt-20  mx-auto my-12">
            <div data-aos="zoom-in" className='flex flex-col gap-1 items-center mb-8'>
                <h2 className='text-3xl font-bold'>Projects</h2>
                <div className='flex gap-2'>
                    <div className='w-12 h-0.5 -ml-4 bg-amber-300'></div>
                    <div className='w-5 h-0.5 bg-amber-300'></div>
                    <div className='w-2 h-0.5 bg-amber-300'></div>
                </div>
            </div>

            <div className='block md:flex flex-wrap gap-4 justify-center'>
                {
                    projects.map((project, idx) => {
                        const delayTime = idx * 200;

                        return (
                            <div
                                data-aos="fade-up"
                                data-aos-delay={delayTime}

                                key={project.id} className='w-full md:w-96 p-8 rounded-2xl bg-[#020b29] my-4'>
                                <img src={project.project_image} alt="Project image" className='object-cover border  border-[#8a31af]/30 rounded-xl' />

                                <div className='flex justify-between items-center mt-4'>
                                    <h3 className='text-2xl font-semibold my-2'>{project.project_name}</h3>

                                    <button
                                        onClick={() => handleOpenModal(project)}
                                        className="inline-block px-6 py-2 bg-[#1348e7] text-white font-semibold rounded-full hover:bg-[#112fb4] transition duration-300"
                                    >
                                        View More
                                    </button>

                                </div>
                            </div>

                        )
                    })
                }
            </div>


            {/* Modal of details  */}
            <AnimatePresence>
                {
                    openModal && selectedProject && (
                        <motion.div
                            className='fixed inset-0 z-50 flex items-center justify-center bg-blue-950/97 backdrop-blur-sm'
                            variants={backdropVariant}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <motion.div className='text-black max-h-[90vh] overflow-y-auto bg-white w-11/12 md:w-[600px] p-6 rounded-xl relative'
                                variants={modalVariant}>
                                <button
                                    onClick={handleCloseModal}
                                    className='absolute top-2 right-3 text-xl font-bold'>
                                    ❌
                                </button>

                                <motion.h2
                                    variants={childVariant}
                                    className='text-2xl font-semibold text-center'>Hello</motion.h2>

                                <motion.h2
                                    variants={childVariant}
                                    className='text-2xl font-semibold text-center font-serif mb-8'>{selectedProject.project_name}</motion.h2>

                                <div>

                                    <div variants={childVariant} className='space-y-5'>
                                        <div className='flex gap-2 items-baseline'>
                                            <p className='text-xl font-medium italic w-30'>Live link:</p>
                                            <a href={selectedProject.liveLink} target='_blank' className='text-blue-600'>{selectedProject.liveLink}</a>
                                        </div>

                                        <div className='flex gap-2 items-baseline md:items-end'>
                                            <p className='text-xl font-medium italic w-30'>Github repository: </p>
                                            <a href={selectedProject.githubClientRepo} target='_blank' className='text-blue-600'>{selectedProject.githubClientRepo}</a>
                                        </div>

                                    </div>


                                    <motion.div variants={childVariant} className='my-5'>
                                        <p className='text-xl font-medium italic mb-2'>Tech Stack:</p>
                                        <div className='flex gap-4 flex-wrap ml-5'>
                                            {
                                                selectedProject.tech.map((tool, idx) => {
                                                    // console.log(tool);
                                                    return (
                                                        <div key={idx}
                                                            className='flex items-center gap-2 border border-[#8a31af]/30 p-2 rounded-full'
                                                        >
                                                            {tool.icon}
                                                            <p className='font-semibold text-gray-800'>{tool.name}</p>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.div variants={childVariant} className='my-5'>
                                    <p className='text-xl font-medium italic'>Description:</p>
                                    <p className='ml-6 font-semibold text-slate-600'>{selectedProject.description}</p>
                                </motion.div>

                                <motion.div variants={childVariant} className='my-5'>
                                    <p className='text-xl font-medium italic'>Challenge:</p>
                                    <ul>
                                        {
                                            selectedProject.challenges.map((challenge, idx) => {
                                                return (
                                                    <li key={idx} className='flex items-start gap-2 my-2 ml-5 font-semibold text-slate-600'> <FaArrowRight size={18} className='mt-1' /> {challenge}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </motion.div>

                                <motion.div variants={childVariant} className='my-5'>
                                    <p className='text-xl font-medium italic'>Future plan:</p>
                                    {
                                        selectedProject.futurePlane.map((plan, idx) => {
                                            return (
                                                <li key={idx} className='flex items-start gap-2 my-2 ml-5 font-semibold text-slate-600'> <FaArrowRight size={18} className='mt-1' /> {plan}</li>
                                            )
                                        })
                                    }
                                </motion.div>

                            </motion.div>

                        </motion.div>
                    )
                }
            </AnimatePresence>

        </div>
    );
};

export default Projects;