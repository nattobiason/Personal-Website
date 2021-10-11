import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Home.css'
import HelloWorld from '../Components/HelloWorld'
import Education from '../Components/Education';


function Home() {
  return (
    <div className='home-container'>
        <Navbar/>
        <HelloWorld/>
        <div classname = 'github-link' width={100} height={100}>
            <i class="fab fa-github-square"></i>
        </div>
        <Education/>
    </div>
    
  )
}

export default Home;