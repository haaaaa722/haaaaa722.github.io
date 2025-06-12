import { Link } from "react-router-dom";
import "./CategoryList.css";

const CategoryList = ( {categories} )=>{
    return(
        <section className="category-wrapper">
            <h1>Photos</h1>
            <nav>
                <p>Category</p>
                <ul className="category">
                    {categories.map((category,index)=>(
                        <li key={index}>
                            <Link to={`/Photos/${category}`} className="category-btn">
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}
export default CategoryList;