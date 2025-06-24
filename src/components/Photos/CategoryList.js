import { Link } from "react-router-dom";
import { useState } from 'react';
import "./CategoryList.css";

const CategoryList = ( {categories} )=>{
    const [openIndex, setOpenIndex] = useState(null);

    const toggleSubcategories = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };

    return(
        <section className="category-wrapper">
            <h1><Link to={"/Photos"}>Photos</Link></h1>
            <nav>
                <p>Category</p>
                <ul className="category">
                    {categories.map((item,index)=>(
                        <li key={index}>
                            <Link to={`/Photos/${item.category}`} className="category-btn">
                                {item.category}
                            </Link>
                            <button onClick={()=>toggleSubcategories(index)} className="sub-category-toggle">
                                <span className={`sub-category-toggle-btn ${openIndex === index ? "sub-category-close" : "sub-category-open"}`}></span>
                            </button>
                            {openIndex === index && item.subcategory.length > 0 && (
                                <ul className="sub-category">
                                    {item.subcategory.map((sub,i)=>(
                                        <li key={i}>
                                            <Link to={`/Photos/${item.category}/${sub}`} className="sub-category-btn">
                                                {sub}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}
export default CategoryList;