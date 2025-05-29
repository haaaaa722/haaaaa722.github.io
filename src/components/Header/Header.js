import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./Header.css";
import NavMobile from './NavMobile';
import NavTablet from './NavTablet';
import NavDesktop from './NavDesktop';

const Header = ()=>{
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = ()=> setWindowWidth(window.innerWidth);
        window.addEventListener("resize",handleResize);

        // クリーンアップ
        return ()=> window.removeEventListener("resize",handleResize);
    },[]);

    const renderNav = ()=> {
        if(windowWidth < 768){
            return<NavMobile/>;
        }else if(windowWidth >= 768 && windowWidth < 1024){
            return <NavTablet/>;
        }else{
            return <NavDesktop/>;
        }
    };

    return(
        <header>
            <Link to="/" className='title'>はっ！</Link>
            {renderNav()}
        </header>
    );
};

export default Header;