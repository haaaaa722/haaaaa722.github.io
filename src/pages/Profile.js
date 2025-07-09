import icon from "../../src/images/IMG_9381.JPG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./Profile.css"

const Profile = ()=>{
    return(
        <div className="Profile">
            <div className="profile-wrapper">
                <h1 className="profile-title">Profile</h1>
                <h2>はっ！</h2>
                <p>
                    2003年生まれ<br/>
                    ただの大学生<br/>
                    エンジニアの園児<br/><br/>
                    好きなこと<br/>
                    ・写真を撮ること<br/>
                    ・ゲーム
                </p>
                <br/>
                <a href="https://x.com/haaaaa722" target="_brank">X <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a><br/>
                <a href="https://instagram.com/hyt_o_olll" target="_brank">Instagram <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a><br/>
                <a href="https://github.com/haaaaa722" target="_brank">GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
            </div>
            <div className="profile-image-wrapper">
                <img src={icon} alt="" className="profile-image"></img>
            </div>
            <div className="contact-wrapper">
                <h1>Contact</h1>
                <p>お問い合わせは、下記の各種SNSのDMにお願いします</p>
            </div>
        </div>
    );
};

export default Profile;