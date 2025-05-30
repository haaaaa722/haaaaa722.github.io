import {useState} from 'react';
import "./NavMobile.css";
import { faBars, faXmark, faHouse, faCode, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavMobile = ()=>{
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
                    <li><Link to="/" onClick={closeMenu}><FontAwesomeIcon icon={faHouse} className='mobile-items-icon'/>Home</Link></li>
                    <li><Link to="/Develop" onClick={closeMenu}><FontAwesomeIcon icon={faCode} className='mobile-items-icon'/>Develop</Link></li>
                    <li><Link to="/Photos" onClick={closeMenu}><FontAwesomeIcon icon={faCamera} className='mobile-items-icon'/>Photos</Link></li>
                </ul>
            </div>

        </nav>
    );
};

export default NavMobile;