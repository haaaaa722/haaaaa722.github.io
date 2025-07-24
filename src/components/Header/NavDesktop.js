import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { faHouse, faUser, faLayerGroup, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as SunIcon} from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon} from "../../assets/icons/moon.svg";

import "./NavDesktop.css";

const NavDesktop = ({ toggleMode, mode})=>{
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
        <nav className='nav-desktop'>
            <div className="desktop-menu-overlay">
                <ul className="desktop-menu-items" ref={menuRef}>
                    <div className="desktop-active-bg" style={{left: `${bgPos.left}px`, width: `${bgPos.width}px`}}></div>

                    <li>
                        <NavLink to="/" className={({ isActive})=>(isActive ? "Active":"")} end>
                            <FontAwesomeIcon icon={faHouse} className="desktop-items-icon"/>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Profile" className={({ isActive})=>(isActive ? "Active":"")} end>
                            <FontAwesomeIcon icon={faUser} className="desktop-items-icon"/>Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Works" className={({ isActive})=>(isActive ? "Active":"")} end>
                            <FontAwesomeIcon icon={faLayerGroup} className="desktop-items-icon"/>Works
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Photos" className={({ isActive})=>(isActive ? "Active":"")} end>
                            <FontAwesomeIcon icon={faCamera} className="desktop-items-icon"/>Photos
                        </NavLink>
                    </li>
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