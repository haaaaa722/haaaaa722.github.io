import { Link } from "react-router-dom";
import "./NavTavlet.css";

const NavTablet = ()=>{
    return(
        <nav className='nav-tablet'>
            <div className="tablet-menu-overlay">
                <ul className="tablet-menu-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Develop">Develop</Link></li>
                    <li><Link to="/Photos">Photos</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavTablet;