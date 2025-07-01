import { faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        </footer>
    );
};

export default Footer;