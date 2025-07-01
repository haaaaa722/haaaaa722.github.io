import { Link } from "react-router-dom";
import { faHouse, faUser, faLayerGroup, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as SunIcon} from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon} from "../../assets/icons/moon.svg";

import "./NavDesktop.css";

const NavDesktop = ({ toggleMode, mode})=>{
    return(
        <nav className='nav-desktop'>
            <div className="desktop-menu-overlay">
                <ul className="desktop-menu-items">
                    <li><Link to="/Home"><FontAwesomeIcon icon={faHouse} className="desktop-items-icon"/>Home</Link></li>
                    <li><Link to="/Profile"><FontAwesomeIcon icon={faUser} className="desktop-items-icon"/>Profile</Link></li>
                    <li><Link to="/Works"><FontAwesomeIcon icon={faLayerGroup} className="desktop-items-icon"/>Works</Link></li>
                    <li><Link to="/Photos"><FontAwesomeIcon icon={faCamera} className="desktop-items-icon"/>Photos</Link></li>
                </ul>
                <button onClick={toggleMode} className={`desktop-mode ${mode === "light" ? "light":"dark"}`}>
                    {mode === "light" ? <SunIcon/> : <MoonIcon/>}
                </button>
            </div>
        </nav>
    );
};

export default NavDesktop;