import { Link } from "react-router-dom";
import { faHouse, faUser, faLayerGroup, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as SunIcon} from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon} from "../../assets/icons/moon.svg";

import "./NavTablet.css";

const NavTablet = ({ toggleMode, mode })=>{
    return(
        <nav className='nav-tablet'>
            <div className="tablet-menu-overlay">
                <ul className="tablet-menu-items">
                    <li><Link to="/Home"><FontAwesomeIcon icon={faHouse} className="tablet-items-icon"/>Home</Link></li>
                    <li><Link to="/Profile"><FontAwesomeIcon icon={faUser} className="tablet-items-icon"/>Profile</Link></li>
                    <li><Link to="/Works"><FontAwesomeIcon icon={faLayerGroup} className="tablet-items-icon"/>Works</Link></li>
                    <li><Link to="/Photos"><FontAwesomeIcon icon={faCamera} className="tablet-items-icon"/>Photos</Link></li>
                </ul>
                <button onClick={toggleMode} className={`tablet-mode ${mode === "light" ? "light":"dark"}`}>
                    {mode === "light" ? <SunIcon/> : <MoonIcon/>}
                </button>
            </div>
        </nav>
    );
};

export default NavTablet;