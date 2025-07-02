import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { faHouse, faUser, faLayerGroup, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as SunIcon} from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon} from "../../assets/icons/moon.svg";

import "./NavDesktop.css";

const NavDesktop = ({ toggleMode, mode})=>{
    const location = useLocation();
    const menuRef = useRef(null);
    const [bgPos, setBgPos] = useState({left:0,width:0});

    const isActive = (path)=>location.pathname.startsWith(path);

    useEffect(()=>{
        if(!menuRef.current) return;

        const ul = menuRef.current;
        const activeItem = ul.querySelector(".Active");

        if(activeItem){
            const rect = activeItem.getBoundingClientRect();
            const containerRect = ul.getBoundingClientRect();

            setBgPos({
                left: rect.left - containerRect.left,
                width: rect.width,
            });
        }
    },[location.pathname]);

    const activeBgStyle = {
        left: `${bgPos.left}px`,
        width: `${bgPos.width}px`,
    };

    return(
        <nav className='nav-desktop'>
            <div className="desktop-menu-overlay">
                <ul className="desktop-menu-items" ref={menuRef}>
                    <div className="active-bg" style={activeBgStyle}></div>

                    <li className={isActive("/Home") ? "Active" : ""}><Link to="/Home"><FontAwesomeIcon icon={faHouse} className="desktop-items-icon"/>Home</Link></li>
                    <li className={isActive("/Profile") ? "Active" : ""}><Link to="/Profile"><FontAwesomeIcon icon={faUser} className="desktop-items-icon"/>Profile</Link></li>
                    <li className={isActive("/Works") ? "Active" : ""}><Link to="/Works"><FontAwesomeIcon icon={faLayerGroup} className="desktop-items-icon"/>Works</Link></li>
                    <li className={isActive("/Photos") ? "Active" : ""}><Link to="/Photos"><FontAwesomeIcon icon={faCamera} className="desktop-items-icon"/>Photos</Link></li>
                    <li>
                        <button onClick={toggleMode} className={`desktop-mode ${mode === "light" ? "light":"dark"}`}>
                            {mode === "light" ? <SunIcon/> : <MoonIcon/>}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavDesktop;