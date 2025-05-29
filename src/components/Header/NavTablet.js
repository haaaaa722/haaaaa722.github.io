import { Link } from "react-router-dom";
import { faHouse, faCode, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./NavTavlet.css";

const NavTablet = ()=>{
    return(
        <nav className='nav-tablet'>
            <div className="tablet-menu-overlay">
                <ul className="tablet-menu-items">
                    <li><Link to="/"><FontAwesomeIcon icon={faHouse} className="tablet-items-icon"/></Link></li>
                    <li><Link to="/Develop"><FontAwesomeIcon icon={faCode} className="tablet-items-icon"/></Link></li>
                    <li><Link to="/Photos"><FontAwesomeIcon icon={faCamera} className="tablet-items-icon"/></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavTablet;