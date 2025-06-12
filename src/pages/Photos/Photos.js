import CategoryList from "../../components/Photos/CategoryList";
import PhotoDisplay from "../../components/Photos/PhotoDisplay";
import photosData from "../../data/photosData"
import "./Photos.css";

const categories = [
    "Animals",
    "Architecture",
    "Events",
    "Flowers",
    "Interiors",
    "Landscape"
];

const Photos = ()=>{
    return(
        <div className="Photos">
            <CategoryList categories={categories}/>
            <PhotoDisplay photos={photosData}/>
        </div>
    );
};

export default Photos;