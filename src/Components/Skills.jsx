import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { SiTailwindcss, SiMongodb, SiJavascript, SiFirebase, SiVite } from 'react-icons/si';

const skills = [
    { name: 'HTML', icon: <FaHtml5 size={36} className='text-orange-500' /> },
    { name: 'CSS', icon: <FaCss3Alt size={36} className='text-blue-500' /> },
    { name: 'JavaScript', icon: <SiJavascript size={36} className='text-yellow-400' /> },
    { name: 'React', icon: <FaReact size={36} className='text-cyan-400' /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={36} className='text-teal-400' /> },
    { name: 'Node.js', icon: <FaNodeJs size={36} className='text-green-600' /> },
    { name: 'MongoDB', icon: <SiMongodb size={36} className='text-green-500' /> },
    { name: 'Firebase', icon: <SiFirebase size={36} className='text-yellow-500' /> },
    { name: 'GitHub', icon: <FaGithub size={36} className='text-white' /> },
    { name: 'Vite', icon: <SiVite size={36} className='text-purple-400' /> },

]


const Skills = () => {
    return (
        <div className='w-11/12 mx-auto py-10'>

            <div className='flex flex-col gap-1 items-center mb-8'>
                <h2 className='text-3xl font-bold'>My Skills</h2>
                <div className='flex gap-2'>
                    <div className='w-16 h-0.5 -ml-4 bg-amber-300'></div>
                    <div className='w-5 h-0.5 bg-amber-300'></div>
                    <div className='w-2 h-0.5 bg-amber-300'></div>
                </div>
            </div>

            <div>
                <Marquee gradient={false} speed={60}>
                    {
                        skills.map((skill, indx) => {
                            return (
                                <div key={indx} className='flex items-center gap-4 mx-4 rounded-2xl p-4 border border-[#8a31af] bg-slate-950'>
                                    {skill.icon}
                                    <p className='text-xl font-medium'>
                                        {skill.name}
                                    </p>
                                </div>
                            )
                        })
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Skills;




// system two |  show skills by category 

// import React from 'react';
// import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
// import { SiTailwindcss, SiMongodb, SiJavascript, SiFirebase, SiVite } from 'react-icons/si';

// const skills = {
//   Frontend: [
//     { name: 'HTML', icon: <FaHtml5 size={30} className='text-orange-500' /> },
//     { name: 'CSS', icon: <FaCss3Alt size={30} className='text-blue-500' /> },
//     { name: 'JavaScript', icon: <SiJavascript size={30} className='text-yellow-400' /> },
//     { name: 'React', icon: <FaReact size={30} className='text-cyan-400' /> },
//     { name: 'Tailwind', icon: <SiTailwindcss size={30} className='text-teal-400' /> },
//   ],
//   Backend: [
//     { name: 'Node.js', icon: <FaNodeJs size={30} className='text-green-600' /> },
//     { name: 'MongoDB', icon: <SiMongodb size={30} className='text-green-500' /> },
//     { name: 'Firebase', icon: <SiFirebase size={30} className='text-yellow-500' /> },
//   ],
//   Tools: [
//     { name: 'Git', icon: <FaGitAlt size={30} className='text-red-500' /> },
//     { name: 'Vite', icon: <SiVite size={30} className='text-purple-400' /> },
//   ]
// };

// const Skills = () => {
//   return (
//     <div className='w-11/12 mx-auto py-10'>
//       <h2 className='text-3xl font-bold text-center mb-8 text-white'>My Skills</h2>

//       <div className='grid md:grid-cols-3 gap-8'>
//         {Object.entries(skills).map(([category, items]) => (
//           <div key={category} className='bg-[#060b1d] rounded-xl p-6 shadow-md'>
//             <h3 className='text-xl font-semibold text-[#f3e00e] mb-4'>{category}</h3>
//             <div className='grid grid-cols-2 gap-4'>
//               {items.map((skill, idx) => (
//                 <div key={idx} className='flex items-center space-x-3 text-white'>
//                   {skill.icon}
//                   <span>{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

