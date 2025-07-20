import icon from "../../src/images/IMG_9381.JPG";
import xIcon from "../../src/images/x-icon.png";
import instagramIcon from "../../src/images/instagram-icon.png";
import githubIcon from "../../src/images/github-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css"

const Profile = ()=>{
    return(
        <div className="Profile">
            <div className="profile-main">
                <div className="profile-main-left">
                    <h1 className="profile-title">Profile</h1>
                    <div className="profile-image-wrapper">
                        <img src={icon} alt="" className="profile-image"></img>
                    </div>
                </div>

                <div className="profile-wrapper">
                    <div className="profile-text">
                        <h2>はっ！</h2>
                        <p>
                            2003年生まれ<br/>
                            ただの大学生<br/>
                            エンジニアの園児<br/><br/>
                            好きなこと<br/>
                            ・写真を撮ること<br/>
                            ・ゲーム
                        </p>
                    </div>
                </div>
            </div>

            <div className="profile-links-wrapper">
                <h1>Links</h1>

                <div className="profile-links">
                    <div>
                        <a href="https://x.com/haaaaa722" target="_blank" rel="noopener noreferrer"><img src={xIcon} alt="X Icon" className="profile-link-icon"/></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/pics._.hyt" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram Icon" className="profile-link-icon"/></a>
                    </div>
                    <div>
                        <a href="https://github.com/haaaaa722" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub Icon" className="profile-link-icon"/></a>
                    </div>
                </div>
            </div>

            <div className="contact-wrapper">
                <h1>Contact</h1>
                <p>お問い合わせは、下記の各種SNSのDMにお願いします</p>
            </div>
        </div>
    );
};

export default Profile;