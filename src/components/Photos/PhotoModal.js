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
                        <p>
                            Category:{" "}
                            {photo.categories?.map((pair, index)=>(
                                <span key={index} className='modal-category-pair'>
                                    <Link to={`/Photos/${pair.category}`} className='modal-category-link'>
                                        {pair.category}
                                    </Link>
                                    {pair.subcategory && (
                                        <>
                                            <span className='modal-slash'>/</span>
                                            <Link to={`/Photos/${pair.category}/${pair.subcategory}`} className='modal-category-link'>
                                                {pair.subcategory}
                                            </Link>
                                        </>
                                    )}
                                    {index < photo.categories.length - 1 && <br/>}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;