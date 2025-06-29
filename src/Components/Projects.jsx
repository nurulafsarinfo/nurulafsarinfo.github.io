import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img1 from '../assets/myProfile-Logo.png';
import { SiFirebase, SiJavascript, SiMongodb, SiTailwindcss, SiVite } from 'react-icons/si';
import { FaArrowRight, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';



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
            project_image: "",
            description: "A Gardening website whare if you a gardener you can share your tips. Also you can improve your Gardening knowladge by the Quize section. Your access will be delete and update your own tips. If your tip gain more like then your tips will show in the Trending section.",
            tech: [
                { name: 'JavaScript', icon: <SiJavascript size={24} className='text-yellow-400' /> },
                { name: 'React', icon: <FaReact size={24} className='text-cyan-400' /> },
                { name: 'Tailwind', icon: <SiTailwindcss size={24} className='text-teal-400' /> },
                { name: 'Node.js', icon: <FaNodeJs size={24} className='text-green-600' /> },
                { name: 'MongoDB', icon: <SiMongodb size={24} className='text-green-500' /> },
                { name: 'Firebase', icon: <SiFirebase size={24} className='text-yellow-500' /> },
                { name: 'GitHub', icon: <FaGithub size={24} className='text-black' /> },
                { name: 'Vite', icon: <SiVite size={24} className='text-purple-400' /> },
            ],
            liveLink: "This is live link",
            githubClientRepo: "github repo",
            challenges: [
                "When intregate trending tips here faced Database api",
                "Created dashboard faced when get data from database",
                "faced on dashboard handling responsive design accross all screen sizes"
            ],

            futurePlane: [
                "Add dark mode in Dashboard",
                "Optimize data for faster loading"
            ],

        },
        {
            id: 2,
            project_name: "Garden Hub",
            project_image: "",
        },
        {
            id: 3,
            project_name: "Garden Hub",
            project_image: "",
        },
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
        <div className='w-11/12 mx-auto my-12'>
            <div className='flex flex-col gap-1 items-center mb-8'>
                <h2 className='text-3xl font-bold'>Projects</h2>
                <div className='flex gap-2'>
                    <div className='w-12 h-0.5 -ml-4 bg-amber-300'></div>
                    <div className='w-5 h-0.5 bg-amber-300'></div>
                    <div className='w-2 h-0.5 bg-amber-300'></div>
                </div>
            </div>

            <div className='block md:flex flex-wrap gap-4 justify-center'>
                {
                    projects.map((project) => {
                        return (
                            <div key={project.id} className='w-full md:w-96 p-8 rounded-2xl bg-[#020b29] my-4'>
                                <img src={img1} alt="Project_1 photo" className='object-cover border  border-[#8a31af]/30 rounded-xl' />

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

                                    <div variants={childVariant}>
                                        <div className='flex gap-2 items-baseline'>
                                            <p className='text-xl font-medium italic'>Live link:</p>
                                            <a href={selectedProject.liveLink} target='_blank' className='text-blue-600'>{selectedProject.liveLink}</a>
                                        </div>

                                        <div className='flex gap-2 items-baseline'>
                                            <p className='text-xl font-medium italic'>Github repository: </p>
                                            <a href={selectedProject.liveLink} target='_blank' className='text-blue-600'>{selectedProject.githubClientRepo}</a>
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
                                <motion.div variants={childVariant}> 
                                    <p className='text-xl font-medium italic'>Description:</p>
                                    <p className='ml-6 font-semibold text-slate-600'>{selectedProject.description}</p>
                                </motion.div>

                                <motion.div variants={childVariant} className='my-4'>
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

                                <motion.div variants={childVariant}>
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