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

    const startIdx = currentPage * itemsPerPage;
    const curretPhotos = photos.slice().sort((a,b)=>new Date(b.date) - new Date(a.date)).slice(startIdx, startIdx + itemsPerPage);
    const totalPages = Math.ceil(photos.length / itemsPerPage);

    // ダミー
    const placeholders = Array.from({
        length: Math.max(itemsPerPage - curretPhotos.length, 0)
    });

    return(
        <div className="photo-display-wrapper">
            <div className="photo-grid" style={{gridTemplateColumns:`repeat(${columns},1fr)`,gridTemplateRows:`repeat(${rows},1fr)`}}>
                {curretPhotos.map((photo,index)=>(
                    <div className="photo-item" onClick={()=>setSelectedPhoto(photo)}>
                        <img
                            key={index}
                            src={photo.thumb}
                            alt={photo.title || "photo"}
                        />
                    </div>
                ))}

                {/* ダミー */}
                {placeholders.map((_, idx)=>(
                    <div key={`placeholder-${idx}`} className="photo-item empty"></div>
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>

            <PhotoModal photo={selectedPhoto} onClose={()=>setSelectedPhoto(null)}/>
        </div>
    )
};

export default PhotoDisplay;