import React from 'react'
import Navbar from '../Components/navbar';
import Hero from '../Components/hero';
import Sorting from '../Components/sorting';
import Joblisting from '../Components/joblisting';

function home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Sorting/>
      <Joblisting/>
    </div>
  );
}

export default home;
