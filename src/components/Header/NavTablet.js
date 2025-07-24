import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { faHouse, faUser, faLayerGroup, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as SunIcon} from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon} from "../../assets/icons/moon.svg";

import "./NavTablet.css";

const NavTablet = ({ toggleMode, mode })=>{
    const location = useLocation();
    const menuRef = useRef(null);
    const [bgPos, setBgPos] = useState({left:0,width:0});

    // 背景位置更新
    const updateActiveBg = ()=>{
        if(!menuRef.current) return;
        const activeLink = menuRef.current.querySelector("a.Active");
        if(activeLink){
            const rect = activeLink.getBoundingClientRect();
            const containerRect = menuRef.current.getBoundingClientRect();
            setBgPos({
                left: rect.left - containerRect.left,
                width: rect.width,
            });
        }
    };

    useEffect(()=>{
        updateActiveBg();
        window.addEventListener("resize",updateActiveBg);
        return ()=> window.removeEventListener("resize",updateActiveBg);
    },[location.pathname]);

    return(
        <nav className='nav-tablet'>
            <div className="tablet-menu-overlay">
                <ul className="tablet-menu-items" ref={menuRef}>
                    <div className="tablet-active-bg" style={{left: `${bgPos.left}px`, width: `${bgPos.width}px`}}></div>

                    <li>
                        <NavLink to="/" className={({ isActive })=>(isActive ? "Active":"")} end>
                            <FontAwesomeIcon icon={faHouse} className="tablet-items-icon" />Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Profile" className={({ isActive })=>(isActive ? "Active":"")}>
                            <FontAwesomeIcon icon={faUser} className="tablet-items-icon" />Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Works" className={({ isActive })=>(isActive ? "Active":"")}>
                            <FontAwesomeIcon icon={faLayerGroup} className="tablet-items-icon" />Works
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Photos" className={({ isActive })=>(isActive ? "Active":"")}>
                            <FontAwesomeIcon icon={faCamera} className="tablet-items-icon" />Photos
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={toggleMode} className={`tablet-mode ${mode === "light" ? "light":"dark"}`}>
                        {mode === "light" ? <SunIcon/> : <MoonIcon/>}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavTablet;