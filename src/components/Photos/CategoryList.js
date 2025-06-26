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
                    {openIndex === null ? (
                        // カテゴリ一覧を表示
                        categories.map((item, index)=>(
                            <li key={index}>
                                <Link to={`/Photos/${item.category}`} className="category-btn">{item.category}</Link>
                                <button onClick={()=> toggleSubcategories(index)} className="sub-category-toggle">
                                    <span className={`sub-category-toggle-btn sub-category-open`}></span>
                                </button>
                            </li>
                        ))
                    ) : (
                        // 展開中のカテゴリのみ表示
                        <li key={openIndex} className="category-item">
                            <div className="category-header">
                                <Link to={`/Photos/${categories[openIndex].category}`} className="category-btn">{categories[openIndex].category}</Link>
                                <button onClick={()=> toggleSubcategories(openIndex)} className="sub-category-toggle">
                                    <span className={`sub-category-toggle-btn sub-category-close`}></span>
                                </button>
                            </div>
                            <ul className="sub-category">
                                {categories[openIndex].subcategory.map((sub,i)=>(
                                    <li key={i}>
                                        <Link to={`/Photos/${categories[openIndex].category}/${sub}`} className="sub-category-btn">{sub}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )}
                </ul>
            </nav>
        </section>
    )
}
export default CategoryList;