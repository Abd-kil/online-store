import SideImage from "../images/Side Image.png";
import '../css/signUp.css';
import googleLogo from '../images/google-logo.png';
import { Link } from "react-router-dom";
function Login(){
    return(
        <div className="sign-up">
            <img src={SideImage} alt="" className="side-image"/>
            <div>
                <form onSubmit={e=>e.preventDefault()}>
                    <h1>Log in to Execlusive</h1>
                    <p>Enter your details below</p>
                    <input type="text" placeholder="Email or Username" name="email" required/>
                    <input type="password" placeholder="Password" name="password" required/>
                    <button type="submit" className="red-button">Log in</button>
                </form>
            </div>
        </div>
    );
}
export default Login;