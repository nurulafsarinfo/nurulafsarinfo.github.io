import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,      // animation duration in ms
      offset: 120,        // offset (in px) from the original trigger point
         // whether animation should happen only once
    });
  }, []);



  return (
    <div className='bg-[#060b1d] '>
      <Navbar></Navbar>
      <main className='mt-16'>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Projects></Projects>
        <Contact></Contact>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default App;
