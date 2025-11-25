import React from "react";
import { Link } from "react-router-dom";
import "./WorkCard.css";

const WorkCard = ({ work })=>{
    return(
        <div className="work-card">
            <Link to={work.path}>
                <div className="work-icon-wrapper">
                    <img src={work.icon} alt={`${work.title} icon`} className="work-icon" />
                </div>
                <div className="work-info">
                    <h2>{work.title}</h2>
                    <span className="work^category">{work.category}</span>
                </div>
            </Link>
        </div>
    );
};

export default WorkCard;