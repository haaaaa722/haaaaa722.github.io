import React from 'react';
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange})=>{
    return(
        <div className='Pagination'>
            <button onClick={()=>onPageChange(currentPage-1)} disabled={currentPage===0}>Prev</button>
            <span>{currentPage+1} / {totalPages}</span>
            <button onClick={()=>onPageChange(currentPage+1)} disabled={currentPage === totalPages-1}>Next</button>
        </div>
    );
};

export default Pagination;