import { useState, useEffect } from "react";

const useResponsiveColumns = ()=>{
    const [columns,setColumns] = useState(3);

    useEffect(()=>{
        const updateColumns = ()=>{
            const width = window.innerWidth;
            if(width >= 1024){
                setColumns(6);
            }else if(width >= 768){
                setColumns(4);
            }else{
                setColumns(3);
            }
        };

        updateColumns();
        window.addEventListener("resize",updateColumns);
        return ()=> window.removeEventListener("resize",updateColumns);
    },[])

    return columns;
}

export default useResponsiveColumns;