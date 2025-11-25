import React from "react";
import { useParams, Link } from "react-router-dom";
import worksData from "./worksData";
import "./Works.css";

const WorkDetail = ()=>{
    const {workId} = useParams;
    const work = worksData.find((item)=>item.id === workId);

    if (!work){
        return(
            <div className="Works">
                <p>記事が見つかりませんでした</p>
                <Link to="/Works">戻る</Link>
            </div>
        );
    }

    return (
        <div className="Works work-detail">
            <h1>{work.title}</h1>
            <div className="back-link">
                <Link to="/Works">Works一覧に戻る</Link>
            </div>
        </div>
    );
};

export default WorkDetail;