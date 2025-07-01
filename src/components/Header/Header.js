import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./Header.css";
import NavMobile from './NavMobile';
import NavTablet from './NavTablet';
import NavDesktop from './NavDesktop';

const Header = ({ toggleMode, mode })=>{
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    useEffect(()=>{
        const handleResize = ()=> setWindowWidth(window.innerWidth);
        window.addEventListener("resize",handleResize);

        // クリーンアップ
        return ()=> window.removeEventListener("resize",handleResize);
    },[]);

    const renderNav = ()=> {
        if(windowWidth < 768){
            return<NavMobile toggleMode={toggleMode} mode={mode}/>;
        }else if(windowWidth >= 768 && windowWidth < 1024){
            return <NavTablet toggleMode={toggleMode} mode={mode}/>;
        }else{
            return <NavDesktop toggleMode={toggleMode} mode={mode}/>;
        }
    };

    return(
        <header>
            {renderNav()}
        </header>
    );
};

export default Header;