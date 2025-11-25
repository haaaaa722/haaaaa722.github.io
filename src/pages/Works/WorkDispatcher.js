import React from "react";
import { useParams } from "react-router-dom";
import Works from "./Works";
import WorkDetail from "./WorkDetail";
import { CATEGORIES } from "./worksData";

const WorkDispatcher = ()=>{
    const { workId } = useParams();

    const isCategory = CATEGORIES.includes(workId);

    if (isCategory){
        return <Works />;
    } else {
        return <WorkDetail />;
    }
};

export default WorkDispatcher;