import { useParams } from "react-router-dom";
import photosData from "../../data/photosData";
import PhotoDisplay from "../../components/Photos/PhotoDisplay";
import "./CategoryPage.css";
import CategoryList from "../../components/Photos/CategoryList";

const categories = [
    "Animals",
    "Architecture",
    "Events",
    "Flowers",
    "Interiors",
    "Landscape"
];

const CategoryPage = ()=>{
    const {categoryName} = useParams();
    const filteredPhotos = photosData.filter(photo =>
        photo.categories.includes(categoryName)
    );

    return(
        <div className="CategoryPage">
            <CategoryList categories={categories}/>
            <PhotoDisplay photos={filteredPhotos}/>
        </div>
    );
};

export default CategoryPage;