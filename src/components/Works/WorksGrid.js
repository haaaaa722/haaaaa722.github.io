import React from "react";
import WorkCard from "./WorkCard";
import "./WorksGrid.css";

const WorksGrid = ({ works,  maxItems }) => {
    const emptyCount = Math.max(0, maxItems - works.length);

    const emptySlots = Array(emptyCount).fill(null);
    return(
        <div className="works-grid">
            {works.length > 0 ? (
                works.map((work)=>(
                    <WorkCard key={work.id} work={work} />
                ))
            ) : (
                <p>該当する制作物がありません</p>
            )}

            {works.length > 0 && emptySlots.map((_, index)=>(
                <div key={`empty-${index}`} className="work-card empty-card"></div>
            ))}
        </div>
    );
};

export default WorksGrid;