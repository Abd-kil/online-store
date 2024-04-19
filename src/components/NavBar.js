import { Link, useLocation } from "react-router-dom";
import '../css/navBar.css'
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import logo from '../images/logo.svg';
function NavBar(){
    const [isNavOpened,setIsNavOpened] = useState(false); //for mobile version
    document.body.style.overflow = isNavOpened? 'hidden' : 'auto';
    const [isSearchVisible,setIsSearchVisible] = useState(false); //for mobile version
    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    }
    const ToggleNav = ()=>{
        setIsNavOpened(!isNavOpened);
    }

    // show nav on scroll up
    const [isNavVisible,setIsNavVisisble] = useState(true);
    const [prevScrollPosition,setPrevScrollPosition] = useState(0);
    const handlScroll = ()=>{
        const currentScrollPosition = window.pageYOffset;
        if(currentScrollPosition - prevScrollPosition > 10) setIsNavVisisble(false)
        else if(currentScrollPosition - prevScrollPosition < -10) setIsNavVisisble(true);
        setPrevScrollPosition(currentScrollPosition);
    }
    useEffect(()=>{
        window.addEventListener("scroll",handlScroll);
        return ()=> window.removeEventListener("scroll",handlScroll);
    },[prevScrollPosition]);

    const location = useLocation();
    const currentPage = location.pathname;
    return(
        <nav id="topBar" style={(isNavOpened || isNavVisible)?{top:"0"}:{top:"-20vh"}}>
            <i className="bx bx-menu" onClick={ToggleNav} id="humberger"/>
            <Link to='/'>
                {/* <h2 className={isSearchVisible?'hide-nav-items':''}>Execlusive</h2> */}
                <img className={isSearchVisible?'hide-nav-items':''} src={logo} alt="" width='130px'/>
            </Link>
            <ul id="ulNav" className={isNavOpened?'show':''}>
                <li>
                    <Link to='/' className={currentPage==='/'?'clicked':''} onClick={()=>setIsNavOpened(false)}>Home</Link>
                </li>
                <li>
                    <Link to='/contact' className={currentPage==='/contact'?'clicked':''} onClick={()=>setIsNavOpened(false)}>Contact</Link>
                </li>
                <li>
                    <Link to='/about' className={currentPage==='/about'?'clicked':''} onClick={()=>setIsNavOpened(false)}>About</Link>
                </li>
                <li>
                    <Link to='/sign-up' className={currentPage==='/sign-up'?'clicked':''} onClick={()=>setIsNavOpened(false)}>Sign Up</Link>
                </li>
                
            </ul>
            <div id="layout-3">
                <SearchBar visible={isSearchVisible}/>
                <i className={isSearchVisible?'bx bx-right-arrow-alt':'bx bx-search'} id='search-icon' onClick={toggleSearch}/>
                <Link to='/wish-list' className={currentPage==='/wish-list'?'clicked':''}><i className={(isSearchVisible?'hide-nav-items ':'') + 'bx bx-heart'}/></Link>
                <Link to='/cart' className={currentPage==='/cart'?'clicked':''}><i className={(isSearchVisible?'hide-nav-items ':'') + 'bx bx-cart-alt'}/></Link>
            </div>
        </nav>
    )
}
export default NavBar;