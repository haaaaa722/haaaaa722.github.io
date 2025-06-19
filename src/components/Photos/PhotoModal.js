import React from 'react';
import "./PhotoModal.css";
import { Link } from 'react-router-dom';

const PhotoModal = ({ photo, onClose}) =>{
    if(!photo) return null;

    return(
        <div className='photo-modal-overlay' onClick={onClose}>
            <div className='photo-modal-content' onClick={(e)=>e.stopPropagation()}>
                <div className='photo-modal-body'>
                    <button className='photo-modal-close' onClick={onClose}><span className='modal-close-btn'></span></button>
                    <img src={photo.src} alt="" className='modal-photo'/>
                    <div className='photo-info'>
                        <p>Camera: {photo.camera}</p>
                        <p>Lens: {photo.lens}</p>
                        <p>Place: {photo.place}</p>
                        <p>Category: {photo.categories?.map((category,index)=>(
                            <span key={index}>
                                <Link to={`/Photos/${category}`} className='modal-category-link'>{category}</Link>
                                {index < photo.categories.length - 1 && ", "}
                            </span>
                        ))}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;