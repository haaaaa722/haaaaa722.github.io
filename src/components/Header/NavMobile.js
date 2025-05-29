import {useState} from 'react';
import "./NavMobile.css";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavMobile = ()=>{
const [isOpen,setIsOpen] = useState(false);

const toggleMenu = ()=> setIsOpen(!isOpen);

    return(
        <nav className="nav-mobile">
            <button className="menu-btn" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className='menu-icon'/>
            </button>

            <div className={`mobile-menu-overlay ${isOpen ? "show" : ""}`}>
                <ul className="mobile-menu-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Develop">Develop</Link></li>
                    <li><Link to="/Photos">Photos</Link></li>
                </ul>
            </div>

        </nav>
    );
};

export default NavMobile;