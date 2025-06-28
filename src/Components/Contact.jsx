import React from 'react';
import { MdEmail, MdPhone, MdWhatsapp } from 'react-icons/md';

const Contact = () => {
    return (
        <section id="contact" className="py-12">

            <div className="max-w-[1100px] mx-auto px-4 text-center">

                <div className='flex flex-col gap-1 items-center mb-8'>
                    <h2 className='text-3xl font-bold'>Contact Me</h2>
                    <div className='flex gap-2'>
                        <div className='w-25 h-0.5 -ml-4 bg-amber-300'></div>
                        <div className='w-5 h-0.5 bg-amber-300'></div>
                        <div className='w-2 h-0.5 bg-amber-300'></div>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-3 text-left border">
                    {/* Email */}
                    <div className="card shadow-md bg-[#020b29] p-6">
                        <div className="flex items-center gap-3">
                            <MdEmail className="text-4xl text-primary" />
                            <div>
                                <h4 className="text-lg font-semibold">Email</h4>
                                <p className=" text-gray-500">mdnurulafsar123afsar@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="card bg-[#020b29] shadow-md p-6">
                        <div className="flex items-center gap-3">
                            <MdPhone className="text-4xl text-primary" />
                            <div>
                                <h4 className="text-lg font-semibold">Phone</h4>
                                <p className=" text-gray-500">+8801612452826</p>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp (Optional) */}
                    <div className="card bg-[#020b29] shadow-md p-6">
                        <div className="flex items-center gap-3">
                            <MdWhatsapp className="text-4xl text-green-500" />
                            <div>
                                <h4 className="text-lg font-semibold">WhatsApp</h4>
                                <p className=" text-gray-500">+8801633355971</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Optional: Contact form or message button can be added here */}
            </div>
        </section>
    );
};

export default Contact;
