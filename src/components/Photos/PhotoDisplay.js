import React, { useState, useEffect, use} from "react";
import useResponsiveColumns from "./useResponsiveColumns";
import Pagination from "./Pagination";
import PhotoModal from "./PhotoModal";
import "./PhotoDisplay.css";

const PhotoDisplay = ({ photos })=>{
    const columns = useResponsiveColumns();
    const rows = 3;
    const itemsPerPage = columns * rows;
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const sortedPhotos = [...photos].sort((a,b)=>{
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });

    const startIdx = currentPage * itemsPerPage;
    const curretPhotos = sortedPhotos.slice(startIdx, startIdx + itemsPerPage);
    const totalPages = Math.ceil(photos.length / itemsPerPage);

    return(
        <div className="photo-display-wrapper">
            <div className="photo-grid" style={{gridTemplateColumns:`repeat(${columns},1fr)`}}>
                {curretPhotos.map((photo,index)=>(
                    <img key={index} src={photo.src} alt={photo.title || "photo"} onClick={()=>setSelectedPhoto(photo)} className="photo-item"/>
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>

            <PhotoModal photo={selectedPhoto} onClose={()=>setSelectedPhoto(null)}/>
        </div>
    )
};

export default PhotoDisplay;