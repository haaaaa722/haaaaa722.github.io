import React,{useState} from 'react';
import "./NavMobile.css";

const NavMobile = ()=>{
const [isOpen,setIsOpen] = useState(false);

const toggleMenu = ()=> setIsOpen(!isOpen);

    return(
        <nav className="nav-mobile">
            <button className={`hamburger${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul className={`menu${isOpen ? "show" : ""}`}>
                <li><a href='#'>Home</a></li>
                <li><a href="#">Develop</a></li>
                <li><a href="#">Photos</a></li>
            </ul>
        </nav>
    );
};

export default NavMobile;