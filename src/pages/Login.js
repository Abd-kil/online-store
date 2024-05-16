import SideImage from "../images/Side Image.png";
import googleLogo from '../images/google-logo.png';
import '../css/signUp.css';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { auth, setAuth } = useContext(AuthContext);

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'login',
                JSON.stringify({ username, password }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            )
            if (response.data) {
                console.log('login succeed.\n' + response.data)
                setAuth(response.data);
                setUsername('');
                setPassword('');
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="sign-up">
            <img src={SideImage} alt="" className="side-image" />
            <div>
                {
                    auth?
                    <h1>Your already logged in</h1>:
                    <form onSubmit={handelSubmit}>
                        <h1>Log in to Execlusive</h1>
                        <p>Enter your details below</p>
                        <label htmlFor='email'>email</label>
                        <input
                            type="text"
                            placeholder="Email or Username"
                            name="email"
                            id="email"
                            onChange={handleChangeUsername}
                            value={username}
                        />
                        <label htmlFor="password">password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            id="password"
                            onChange={handleChangePassword}
                            value={password}
                        />
                        <button type="submit" className="red-button">Log in</button>
                        <button type="button" className="red-button google-sign-up">
                            <img src={googleLogo} width='15' height='15' />
                            sign up with google
                        </button>
                        <p className="link-to-login">
                            Don't have account?
                            <Link to='../sign-up'>Sign up</Link>
                        </p>
                    </form>
                }
            </div>
        </div>
    );
}
export default Login;