
// Education.js
import React from "react";

const educationData = [
    {
        degree: "Diploma in Engineering",
        institution: "Comilla Polytechnic Institute",
        depertment: "Computer Science & Technology",
        duration: "2021 - Present (Expected: Late 2025)",
        description: "Currently pursuing diploma, final year ongoing.",
    },
    {
        degree: "Secondary School Certificate",
        institution: "Bangodda Badsha Mia Moder High School",
        duration: "2019 - 2020",
        depertment: "Science Dept.",
        GPA: "5.0 / 5.0",
        description: "Passed SSC from Science group with GPA 5.00 out of 5.00",
    },
];

const Education = () => {
    return (
        <section id="education" className="scroll-mt-20 py-12">
            <div className="max-w-6xl mx-auto px-4">

                <div data-aos="zoom-in" className='flex flex-col gap-1 items-center mb-8'>
                    <h2 className='text-3xl font-bold'>Education</h2>
                    <div className='flex gap-2'>
                        <div className='w-20 h-0.5 -ml-4 bg-amber-300'></div>
                        <div className='w-5 h-0.5 bg-amber-300'></div>
                        <div className='w-2 h-0.5 bg-amber-300'></div>
                    </div>
                </div>


                <div className="grid gap-8 md:grid-cols-2 ">
                    {educationData.map((edu, index) => {
                        // const aosType = index % 2 === 0 ? 'fade-right' : 'fade-left';
                        return (<div
                            key={index}
                            data-aos="fade-up"
                            className="card bg-[#020b29] shadow-lg hover:shadow-xl transition-shadow rounded-lg p-6 cursor-default"
                        >
                            <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                            <p className="italic text-gray-600 mt-2">{edu.institution}</p>
                            <p className="text-sm font-medium text-gray-500 mt-1">{edu.depertment} {edu.GPA && `(${edu.GPA})`}</p>
                            <p className="text-sm font-medium text-gray-500 mt-1">{edu.duration}</p>
                            {edu.description && (
                                <p className="mt-3 text-gray-700">{edu.description}</p>
                            )}
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;
