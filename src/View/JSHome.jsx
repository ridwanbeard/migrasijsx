import React from 'react'
import Herofetchjs from '../Components/heroFetchjs';
import Joblisting from '../Components/joblisting';
import JSNavbar from '../Components/jsnavbar';
import Sorting from '../Components/sorting';

function Jshome() {

  return (
    <div>
      <JSNavbar/>
      <Herofetchjs/>
      <Sorting/>
      <Joblisting/>
    </div>
  );
}

export default Jshome;
