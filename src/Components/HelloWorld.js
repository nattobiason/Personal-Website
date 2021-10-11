import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import comp from '../pink-retro-comp.jpg'
import './HelloWorld.css'

function HelloWorld(){
    return(
        <div className = "hello-container">
            <img src={comp} className = 'comp-img' height={500} width={500}/>
            <div className='hello-world'>
                <h1>HelloWorld()</h1>
                <div className = 'hello-world-text'> 
                    My name is Natalie Tobiason. I am a student and aspiring Software Developer.
                </div>
            </div>
        </div>
    )
}

export default HelloWorld