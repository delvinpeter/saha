import React,{useState} from 'react'
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <nav className='main-nav'>
        <div className='logo'>
            <h2>
           LoGo
            </h2>
        </div>
        <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
            </div>
        <div  className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          
            <ul>
                <li>
                <NavLink exact to='/'>Home</NavLink>
                </li>
                <li>
                <NavLink to='/login'>Training</NavLink>
                </li>
                <li>
                <NavLink to='/Placement'>Placements</NavLink>
                </li>
                                <li>
                <NavLink to='/about'>Placements</NavLink>
                </li>
                <li>
                <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                <NavLink to='/contact'>Contact</NavLink>
                
                </li>
                <li>
                <NavLink to='/student'>Student</NavLink>
                </li>
            </ul>
            

        </div>
        
    </nav>
    </>
  )
}

export default Navbar