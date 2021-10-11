import React, { Component }  from "react";
import './Navbar.css'
import Popup from "reactjs-popup";
import Contact from "../pages/Contact";
import { Link } from 'react-router-dom';



class Navbar extends Component{

    render(){
        return(
            <nav className="navbar"> 
                <div className = "navbar-container">
                    <Link to ='/' className = 'navbar-logo'>
                    <i class="fas fa-power-off"></i>
                    </Link>
                    <div className = 'nav-item'> 
                        <Link to ='../pages/Inspiration' className = 'nav-item'> 
                            Inspiration -
                        </Link>
                        <Popup modal className = 'contact-popup' trigger={<div className = 'nav-item'>Contact +</div>}>
                            {close => <Contact close={close} />}
                        </Popup>
                    </div>    
                </div>
            </nav>

        )
    }
}

export default Navbar;
