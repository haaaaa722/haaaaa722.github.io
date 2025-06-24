import CategoryList from "../../components/Photos/CategoryList";
import PhotoDisplay from "../../components/Photos/PhotoDisplay";
import photosData from "../../data/photosData"
import "./Photos.css";

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

const Photos = ()=>{
    return(
        <div className="Photos">
            <CategoryList categories={categories}/>
            <PhotoDisplay photos={photosData}/>
        </div>
    );
};

export default Photos;