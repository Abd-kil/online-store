import { Link } from "react-router-dom";
import '../css/sideBar.css';
function SideBar (){
    return(
        <nav id="sideBar">
            <ul>
                <li>
                    <Link to=''><span>Woman's Fation</span> <i className="bx bx-right-arrow-alt"/></Link>
                </li>
                <li>
                    <Link to=''><span>Men's Fation</span> <i className="bx bx-right-arrow-alt"/> </Link>
                </li>
                <li>
                    <Link to=''>Electronics</Link>
                </li>
                <li>
                    <Link to=''>Home & Life style</Link>
                </li>
                <li>
                    <Link to=''>Medicine</Link>
                </li>
                <li>
                    <Link to=''>Sport & Outdoor</Link>
                </li>
                <li>
                    <Link to=''>Baby's & Toys</Link>
                <li>
                    <Link to=''>Groceries & Pets</Link>
                </li>
                </li>
                <li>
                    <Link to=''>Helth & Beauty</Link>
                </li>
                
            </ul>
        </nav>
    );
}
export default SideBar;