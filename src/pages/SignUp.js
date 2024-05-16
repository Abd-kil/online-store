import SideImage from "../images/Side Image.png";
import '../css/signUp.css';
import googleLogo from '../images/google-logo.png';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "../api/axios";
import AuthContext from "../context/AuthProvider";
function SignUp() {
    const [username, setUsername] = useState('');
    const [usernameValidateMessage, setUsernameValidateMessage] = useState('');
    const [email, setEmail] = useState('');
    const [emailValidateMessage, setEmailValidateMessage] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValidateMessage, setPasswordValidateMessage] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordValidateMessage, setConfirmPasswordValidateMessage] = useState('');
    const { auth, setAuth } = useContext(AuthContext);

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const usernameRegex = /^[a-zA-Z0-9._-]{3,16}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    const validateUsername = () => {
        if (!usernameRegex.test(username)) {
            setUsernameValidateMessage("Username must be 3-16 characters long and can only contain letters, numbers, periods, underscores, and hyphens.");
            return false;
        } else {
            setUsernameValidateMessage('');
            return true;
        }
    };

    const validateEmail = () => {
        if (!emailRegex.test(email)) {
            setEmailValidateMessage("Please enter a valid email address.");
            return false;
        } else {
            setEmailValidateMessage('');
            return true;
        }
    };

    const validatePassword = () => {
        if (!passwordRegex.test(password)) {
            setPasswordValidateMessage("Password must be at least 8 characters long and contain both letters and numbers.");
            return false;
        } else {
            setPasswordValidateMessage('');
            return true;
        }
    };

    const validateConfirmPassword = () => {
        if (confirmPassword !== password) {
            setConfirmPasswordValidateMessage("Passwords do not match.");
            return false;
        } else {
            setConfirmPasswordValidateMessage('');
            return true;
        }
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {

            try {
                const response = await axios.post(
                    'post',
                    JSON.stringify({ username, password }),
                    {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true
                    }
                )
                if (response.data) {
                    console.log('login succeed.\n' + response.data)
                    setAuth(response.data)
                    setUsername('');
                    setEmail('')
                    setPassword('');
                    setConfirmPassword('')
                }
            }
            catch (error) {
                console.error(error);
            }
        }
    }
    return (
        <div className="sign-up">
            <img src={SideImage} alt="" className="side-image" />
            <div>
                {
                    auth ?
                        <h1>You are already logged in</h1> :
                        <form onSubmit={handelSubmit}>
                            <h1>Create an account</h1>
                            <p>Enter your details below</p>
                            <label htmlFor="username">username:</label>
                            <input
                                type="text"
                                placeholder="Username"
                                name="username"
                                id="username"
                                onChange={handleChangeUsername}
                                onBlur={validateUsername}
                                value={username}
                            />
                            {
                                usernameValidateMessage?
                                <div className="validation-message">{usernameValidateMessage}</div>:
                                null
                            }
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                id="email"
                                onChange={handleChangeEmail}
                                onBlur={validateEmail}
                                value={email}
                            />
                            {
                                emailValidateMessage?
                                <div className="validation-message">{emailValidateMessage}</div>:
                                null
                            }
                            <label htmlFor="password">password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                id="password"
                                onChange={handleChangePassword}
                                onBlur={validatePassword}
                                value={password}
                            />
                            {
                                passwordValidateMessage?
                                <div className="validation-message">{passwordValidateMessage}</div>:
                                null
                            }
                            <label htmlFor="confirm-password">confirm password</label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="confirm-password"
                                id="confirm-password"
                                onChange={handleChangeConfirmPassword}
                                onBlur={validateConfirmPassword}
                                value={confirmPassword}
                            />
                            {
                                confirmPasswordValidateMessage?
                                <div className="validation-message">{confirmPasswordValidateMessage}</div>:
                                null
                            }
                            <button type="submit" className="red-button">Create Account</button>
                            <button type="button" className="red-button google-sign-up">
                                <img src={googleLogo} width='15' height='15' />
                                sign up with google
                            </button>
                            <p className="link-to-login">
                                Already have account?
                                <Link to='../login'>Log in</Link>
                            </p>
                        </form>
                }
            </div>
        </div>
    );
}
export default SignUp;