import React from 'react';
import "./PhotoModal.css";

const PhotoModal = ({ photo, onClose}) =>{
    if(!photo) return null;

    return(
        <div className='photo-modal-overlay' onClick={onClose}>
            <div className='photo-modal' onClick={(e)=>e.stopPropagation()}>
                <button className='close-btn' onClick={onClose}>x</button>
                <img src={photo.src} alt=""/>
                <div className='photo-info'>
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;