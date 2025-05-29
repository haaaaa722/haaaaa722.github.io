import React,{useState} from 'react';
import "./NavMobile.css";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavMobile = ()=>{
const [isOpen,setIsOpen] = useState(false);

const toggleMenu = ()=> setIsOpen(!isOpen);

    return(
        <nav className="nav-mobile">
            <button className="menu-btn" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className='menu-icon'/>
            </button>

            <div className={`menu-overlay ${isOpen ? "show" : ""}`}>
                <ul className="menu-items">
                    <li><a href='#'>Home</a></li>
                    <li><a href="#">Develop</a></li>
                    <li><a href="#">Photos</a></li>
                </ul>
            </div>

        </nav>
    );
};

export default NavMobile;