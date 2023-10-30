import { Link } from "react-router-dom";
import "../css/footer.css";
function Footer(){
    return(
        <div className="footer">
            <ul>
                <li><h4 style={{fontSize:'large',fontWeight:'600'}}>Exclusive</h4></li>
                <li><h4>Subscribe</h4></li>
                <li>Get 10% off your first order</li>
                <form>
                <input type="email" placeholder="Enter your email"/>
                <button className="bx bx-send"/>
                </form>
            </ul>
            <ul>
                <li><h4>Developed By</h4></li>
                <li>Abdulrahman Alkilani</li>
                <li>abood.kil2003123@gmail.com</li>
                <li><Link to="https://github.com/Abd-kil">My Github</Link></li>
                <li>+963991091158</li>
            </ul>
            <ul>
                <li><h4>Account</h4></li>
                <li><Link>My Account</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
                <li><Link to="/">Shop</Link></li>
            </ul>
            <ul>
                <li><h4>Quick Link</h4></li>
                <li><Link>Privacy Policy</Link></li>
                <li><Link>Terms Of Use</Link></li>
                <li><Link>FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <small className="copy-right">&copy; Copyright Remil 2022. all rights reserved</small>
        </div>
    );
}
export default Footer;