import { faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as SunIcon} from "../../assets/icons/sun.svg";
import { ReactComponent as MoonIcon} from "../../assets/icons/moon.svg";

import "./Footer.css";

const Footer = ({ toggleMode, mode})=>{
    return(
        <footer>
            <div className="footer-link-wrapper">
                <ul className="footer-link">
                    <li><a href="https://x.com/haaaaa722" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faXTwitter} className="footer-links-icon"/></a></li>
                    <li><a href="https://github.com/haaaaa722" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="footer-links-icon"/></a></li>
                </ul>
            </div>
            <button onClick={toggleMode} className={`mode ${mode === "light" ? "light":"dark"}`}>
                {mode === "light" ? <SunIcon/> : <MoonIcon/>}
            </button>
        </footer>
    );
};

export default Footer;