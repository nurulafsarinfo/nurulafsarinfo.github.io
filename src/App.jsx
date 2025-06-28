import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';

const App = () => {
  return (
    <div className='bg-[#060b1d] '>
      <Navbar></Navbar>
      <main className='mt-16'>
        <Hero></Hero>
        <About></About>
      </main>
    </div>
  );
};

export default App;
