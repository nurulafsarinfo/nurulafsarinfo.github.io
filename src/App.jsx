import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className='bg-[#060b1d] '>
      <Navbar></Navbar>
      <main className='mt-16'>
        <Hero></Hero>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        {/* <Projects></Projects> */}
        <Contact></Contact>
      </main>
    </div>
  );
};

export default App;
