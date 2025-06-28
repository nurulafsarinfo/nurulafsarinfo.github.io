import React from "react";
import logo from "../assets/myProfile-Logo.png";
const Navbar = () => {

    const navLinks = (
        <>
            <li><a href="#home" className="text-white"> Home </a></li>
            <li><a href="#about" className="text-white"> About </a></li>
            <li><a href="#skills" className="text-white"> Skills </a></li>
            <li><a href="#projects" className="text-white"> Projects </a></li>
            <li><a href="#contact" className="text-white"> Contact </a></li>
        </>
    )


    return (
        <div className="navbar bg-[#060b1d] text-white fixed top-0 z-50 shadow-md px-8">
            <div className="navbar-start">
                <a href="#home">
                    <img src={logo} alt="Profile logo" className="w-12 h-12 rounded-full " />
                </a>
                {/* <a href="#home" className="text-2xl">Nurul.dev</a> */}
            </div>


            {/* for Dackstop Nav  */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end space-x-2">
                <a href="/Afsar_Resume.pdf"
                    download
                    className="btn btn-sm bg-[#1348e7] text-white border-none hover:bg-blue-800 transition duration-300">Download Resume</a>

                {/* Form Mobile Dropdown  */}
                <div className="dropdown lg:hidden relative">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>

                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-[#060b1d] rounded-lg w-30 space-y-2 absolute right-2">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
