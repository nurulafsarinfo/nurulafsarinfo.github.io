import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5ejx3jm', 'template_w0r2p1p', form.current, {publicKey: 'kkVlmK_ewd7ZHUeGL'})
        .then(
            () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Email sent successfully!',
                    text: 'Thanks for your message. I will contact with you very soon. ',
                    timer: 3000,
                    showConfirmButton: false
                });

                form.current.reset();
            }, (error) => {
                console.log('error', error.text);

                Swal.fire({
                    icon: 'error',
                    title: 'Sorry...',
                    text: "Your message can't send. Please try again."
                });
            }
        )
    }


    return (
        <form ref={form} onSubmit={sendEmail} className='space-y-4 bg-[#020b29] text-left p-6'>
            <h2 className='text-white font-bold text-xl'>Send Message</h2>

            <label className='text-sm font-medium text-gray-700'>Name</label>
            <input type="text" name="user_name" placeholder='Your Name' required className='w-full px-3 text-white py-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />


            <label className='text-sm font-medium text-gray-700'>Email</label>
            <input type="email" name="user_email" placeholder='Your email' required className='w-full px-3 text-white py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500' />



            <label className='text-sm font-medium text-gray-700'>Message</label>
            <textarea type="text" name="message" placeholder='Type message' required className='w-full px-3 text-white py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'> 
            </textarea>

            <input type="submit" value={'Send'} className='px-4 py-2 font-bold text-white bg-blue-600 rounded-md cursor-pointer hover:bg-blue-700 w-full'/>
        </form>
    )
}

export default ContactUs;