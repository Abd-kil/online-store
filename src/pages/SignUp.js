import SideImage from "../images/Side Image.png";
import '../css/signUp.css';
import googleLogo from '../images/google-logo.png';
import { Link } from "react-router-dom";
function SignUp(){
    return(
        <div className="sign-up">
            <img src={SideImage} alt="" className="side-image"/>
            <div>
                <form>
                    <h1>Create an account</h1>
                    <p>Enter your details below</p>
                    <input type="text" placeholder="Username" name="username"/>
                    <input type="email" placeholder="Email" name="email"/>
                    <input type="password" placeholder="Password" name="password"/>
                    <input type="password" placeholder="Repeat Password" name="repeat-password"/>
                    <button type="submit" className="red-button">Create Account</button>
                    <button className="red-button google-sign-up">
                        <img src={googleLogo} width='15' height='15'/>
                        sign up with google
                    </button>
                    <p className="link-to-login">
                        Already have account?
                        <Link to='../login'>Log in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
export default SignUp;