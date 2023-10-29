import { Link, useLocation } from "react-router-dom";
import '../css/navBar.css'
import { useState } from "react";
import SearchBar from "./SearchBar";
function NavBar(){
    const [isNavVisible,setIsNavVisible] = useState(false);
    const [isSearchVisible,setIsSearchVisible] = useState(false);
    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    }
    const ToggleNav = ()=>{
        setIsNavVisible(!isNavVisible);
        document.body.style.overflow = isNavVisible? 'auto' : 'hidden';
    }
    const location = useLocation();
    const currentPage = location.pathname;
    return(
        <nav id="topBar" style={isNavVisible?{position:"sticky",top:0}:{}}>
            <i className="bx bx-menu" onClick={ToggleNav} id="humberger"/>
            <Link to='/'><h2 className={isSearchVisible?'hide-nav-items':''}>Execlusive</h2></Link>
            <ul id="ulNav" className={isNavVisible?'show':''}>
                <li>
                    <Link to='/' className={currentPage==='/'?'clicked':''} onClick={()=>setIsNavVisible(false)}>Home</Link>
                </li>
                <li>
                    <Link to='/contact' className={currentPage==='/contact'?'clicked':''} onClick={()=>setIsNavVisible(false)}>Contact</Link>
                </li>
                <li>
                    <Link to='/about' className={currentPage==='/about'?'clicked':''} onClick={()=>setIsNavVisible(false)}>About</Link>
                </li>
                <li>
                    <Link to='/sign-up' className={currentPage==='/sign-up'?'clicked':''} onClick={()=>setIsNavVisible(false)}>Sign Up</Link>
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