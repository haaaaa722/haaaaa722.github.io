import React from "react";
import { Link } from "react-router-dom";
import "./WorksFilter.css";

const WorksFilter = ({ categories, selectedCategory, onSelectCategory }) => {
    const allCategories = ["All", ...categories];

    return(
        <div className="works-filter">
            <h2>Category</h2>
            <div className="filter-buttons">
                {allCategories.map((category) => {
                    const path = category === "All" ? "/works" : `/works/category/${category}`;

                    return(
                        <Link 
                            key={category} 
                            to={path}
                            className={`filter-button ${selectedCategory === category ? "active" : ""}`}
                        >
                            {category}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default WorksFilter;