import {useState} from 'react';
import { faBars, faXmark, faHouse, faUser, faLayerGroup, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon} from "../../assets/icons/moon.svg";

import "./NavMobile.css";

const NavMobile = ({ toggleMode, mode })=>{
const [isOpen,setIsOpen] = useState(false);

const toggleMenu = ()=> setIsOpen(!isOpen);
const closeMenu = ()=> setIsOpen(false);

    return(
        <nav className="nav-mobile">
            <button className="menu-btn" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className='menu-icon'/>
            </button>

            <div className={`mobile-menu-overlay ${isOpen ? "show" : ""}`}>
                <ul className="mobile-menu-items">
                    <li><Link to="/Home" onClick={closeMenu}><FontAwesomeIcon icon={faHouse} className='mobile-items-icon'/>Home</Link></li>
                    <li><Link to="/Profile" onClick={closeMenu}><FontAwesomeIcon icon={faUser} className='mobile-items-icon'/>Profile</Link></li>
                    <li><Link to="/Works" onClick={closeMenu}><FontAwesomeIcon icon={faLayerGroup} className='mobile-items-icon'/>Works</Link></li>
                    <li><Link to="/Photos" onClick={closeMenu}><FontAwesomeIcon icon={faCamera} className='mobile-items-icon'/>Photos</Link></li>
                </ul>
                <button onClick={toggleMode} className={`mobile-mode ${mode === "light" ? "light":"dark"}`}>
                    {mode === "light" ? <SunIcon/> : <MoonIcon/>}
                </button>
            </div>

        </nav>
    );
};

export default NavMobile;