import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-base-content py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Nurul Afsar. All rights reserved.
        </p>

        {/* Right Side: Optional Links */}
        <div className="flex gap-4">
          <a href="#about" className="link link-hover text-sm">About</a>
          <a href="#projects" className="link link-hover text-sm">Projects</a>
          <a href="#contact" className="link link-hover text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
