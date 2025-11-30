import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import worksData, { CATEGORIES } from "./worksData";

import WorksFilter from "../../components/Works/WorksFilter";
import WorksGrid from "../../components/Works/WorksGrid";
import Pagination from "../../components/Photos/Pagination";

import "./Works.css";

const Works = () => {
    const location = useLocation();

    const [currentPage, setCurrentPage] = useState(0);

    const [itemsPerPage, setItemsPerPage] = useState(9);

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth <= 768){
                setItemsPerPage(6);
            }else{
                setItemsPerPage(9);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return ()=> window.removeEventListener("resize", handleResize);
    },[]);

    const getCategoryFromPath = ()=>{
        const path = location.pathname;
        if (path === "/Works" || path === "/Works/") return "All";
        return decodeURIComponent(path.split("/").pop());
    };
    const selectedCategory = getCategoryFromPath();

    useEffect(()=>{
        setCurrentPage(0);
    },[selectedCategory])

    const filteredWorks = selectedCategory === "All"
        ? worksData
        : worksData.filter((work) => work.category === selectedCategory);

    const totalPages = Math.ceil(filteredWorks.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const displayItems = filteredWorks.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChanege = (pageNumber)=>{
        setCurrentPage(pageNumber);
    };

    return(
        <div className="Works">
            <div className="works-nav">
                <h1>Works</h1>

                <WorksFilter 
                    categories={CATEGORIES} 
                    selectedCategory={selectedCategory}
                />
            </div>
            

            <WorksGrid
                works={displayItems}
                maxItems={itemsPerPage}
            />

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChanege}
            />
        </div>
    );
};

export default Works;