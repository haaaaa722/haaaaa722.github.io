import React, { useState, useEffect} from "react";
import "./PhotoDisplay.css";

const PhotoDisplay = ({ photos })=>{
    const [columns, setColumns] = useState(1);

    useEffect(()=>{
        const updateColumns = ()=>{
            const width = window.innerWidth;
            if(width >= 1024){
                setColumns(8);
            }else if (width >= 768){
                setColumns(5);
            }else{
                setColumns(3);
            }
        };

        updateColumns();

        window.addEventListener("resize",updateColumns);
        return ()=> window.removeEventListener("resize",updateColumns);
    },[]);

    return(
        <div className="PhotoDisplay" style={{display:"grid",gridTemplateColumns:`repeat(${columns},1fr)`,gap:"10px",}}>
            {photos.map((photo) => (
                <img key={photo.id} src={photo.url} alt="" style={{width:"100%",height:"auto",objectFit:"cover"}}/>
            ))}
        </div>
    );
};

export default PhotoDisplay;