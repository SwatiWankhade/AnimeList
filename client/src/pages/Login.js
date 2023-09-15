import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaGoogle, FaApple, FaExclamationCircle } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";


const Login = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handleSubmit = (e)=>{
           e.preventDefault();
           axios.post('http://localhost:3000/login',{email,password})
           .then(result =>{
            console.log(result)
            if(result.data==='success'){
                Navigate('/')
            }
           
           })
           .catch(err => console.log(err))
    }
    let iconStyles = { fontSize: "1.5em" };
    return (
        <div className="LoginPage">
            <h1 className="headLog">Login</h1>
            <div className="cntr">
                <div className="logCard">
                    <div className="upperCard">
                        <p>Login with</p>
                        <div className="upTwoBtn">
                            <button className="logGoogle btn"><FaGoogle style={iconStyles} /><span>Google</span></button>
                            <button className="logApple btn"><FaApple style={iconStyles} /><span>Apple</span></button>
                        </div>
                        <div className="lowTwoBtn">
                            <button className="logFacebook btn"><FaFacebookF style={iconStyles} /><span>Facebook</span></button>
                            <button className="logTwitter btn"><FaTwitter style={iconStyles} /><span>Twitter</span></button>
                        </div>

                    </div>
                    <p style={{ color: "white" }}>or</p>
                    <form onSubmit={handleSubmit}>
                        <div className="formDiv">
                            <label>Username</label>
                            <input type="text"  className="username in" />


                            <span className="checkBox">
                                <input type="checkbox" className="showInput in" />
                                <label>Show</label>

                            </span>

                            <label>Password</label>
                            <input type="password"  className="in pass" />
                            <div className="checkBox2">

                                <input type="checkbox" />
                                <label>Stay logged in?</label>
                            </div>

                            <div className="userPasswordNote">
                                <FaExclamationCircle /> Beware of phishing sites pretending to be MAL. Always check the domain is myanimelist.net before entering your password
                            </div>
                            <button className="loginform">Login</button>
                            <p className="para">Forgot username? | Forgot password</p>
                            <button className="loginup"><Link to="/signup" >Sign up</Link> </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default Login;