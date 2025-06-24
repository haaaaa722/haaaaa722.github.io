import { useParams } from "react-router-dom";
import photosData from "../../data/photosData";
import PhotoDisplay from "../../components/Photos/PhotoDisplay";
import "./CategoryPage.css";
import CategoryList from "../../components/Photos/CategoryList";

const categories = [
    {
        category:"Animals",
        subcategory:["Cats","Fish","Marine Life"]
    },
    {
        category:"Architecture",
        subcategory:["Bridges","Historical Buildings","Modern Architecture","Shrines&Temples"]
    },
    {
        category:"Attractions",
        subcategory:["Aquariums"]
    },
    {
        category:"Events",
        subcategory:["Festivals","Fireworks","Installations"]
    },
    {
        category:"Flowers",
        subcategory:["Cherry Blossom","Nemophila","Tulip"]
    },
    {
        category:"Interiors",
        subcategory:["Architectural Details","Cafes","Decor"]
    },

    {
        category:"Landscape",
        subcategory:["Flower Fields","Mountains","Night View","Rivers","Sea","Street Scenes","Sunset"]
    }
];
const CategoryPage = ()=>{
    const {categoryName,subcategoryName} = useParams();
    const filteredPhotos = photosData.filter(photo =>{
        const matchCategory = photo.categories.includes(categoryName);
        const matchSub = subcategoryName ? photo.subcategories.includes(subcategoryName) : true;
        return matchCategory && matchSub;   
    });

    return(
        <div className="CategoryPage">
            <CategoryList categories={categories}/>
            <PhotoDisplay photos={filteredPhotos}/>
        </div>
    );
};

export default CategoryPage;