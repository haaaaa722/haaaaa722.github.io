import "./Photos.css";
import photosData from "./photosData";

function Photos() {
    return (
        <div className='Photos'>
            <div className="category-wrapper">
                <h1>Photos</h1>
                <nav>
                    <p>category</p>
                    <ul className="category">
                        <li><button className="category-btn">Animals</button> <button className="sub-category-open">+</button></li>
                        <li><button className="category-btn">Architecture</button> <button className="sub-category-open">+</button></li>
                        <li><button className="category-btn">Attractions</button> <button className="sub-category-open">+</button></li>
                        <li><button className="category-btn">Events</button> <button className="sub-category-open">+</button></li>
                        <li><button className="category-btn">Flowers</button> <button className="sub-category-open">+</button></li>
                        <li><button className="category-btn">Interios</button> <button className="sub-category-open">+</button></li>
                        <li><button className="category-btn">Landscape</button> <button className="sub-category-open">+</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Photos;