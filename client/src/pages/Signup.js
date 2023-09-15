import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaGoogle, FaApple, FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";


const Signup = () => {

const [username,setUserName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
// const [bday,setBday] = useState('');


const handleSubmit = (e)=>{
    e.preventDefault();

    const userData = {
        username,
        email,
        password,
    };

    axios.post('http:localhost:3000/signup',userData)
    .then(result => console.log(result.data))
    .catch(err => console.error(err))
};
    let iconStyles = { fontSize: "1.5em" };
    return (
        <div className="signupPage">
            <div className="cntr">

                <div className="logCard">
                    <div className="signupHead">
                        <h1>Start Using MyAnimeList</h1>
                        <p className="accCreate">Join MyAnimeList to catalog your anime and manga, compare with your friends, create your own profile, and plenty more. It's Free. </p>
                    </div>
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


                    {/* <div className="partition">
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div> */}
                    <div class="or-divider">
                        <hr/>
                            <span>OR</span>
                            
                            </div>

                            <form className="signupForm" onSubmit={handleSubmit}>
                                <div className="signupInput">
                                    <label className="labelUp" htmlFor="email">Email</label>
                                    <input type="email" 
                                    className="in up" 
                                      name="email"  
                                      onChange={(e)=> setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="signupInput">
                                    <label className="labelUp" htmlFor="username">Username</label>
                                    <input type="text" 
                                    className="in up" 
                                     name="username"
                                      onChange={(e)=> setUserName(e.target.value)}
                                    />
                                    <p className="signupPara">(Between 2 and 16 characters)</p>
                                </div>



                                <div className="signupInput">
                                    <span className="checkBox">
                                        <input type="checkbox" className="showInput in" />
                                        <label>Show</label>
                                    </span>
                                    <label className="labelUp">Password</label>
                                    <input type="password" className="in up" />
                                </div>
                                <div className="signupInput">
                                    <label className="labelUp" htmlFor="date">Birthday</label>
                                    <input type="date" className="in up" 
                                        name="date"
                                        
                                    />
                                    <p className="signupPara">Your birthday won’t be shown publicly by default. </p>
                                </div>


                                <button className="signupCreatebtn">Create Account</button>
                                <p className="accCreate">
                                    By clicking Create Account, you agree to our
                                    <a href="https://myanimelist.net/about/terms_of_use?from=%2F">Terms</a>
                                    and
                                    <a href="https://myanimelist.net/about/privacy_policy?from=%2F">Privacy Policy.</a>
                                </p>

                                <div className="signupLogin">
                                    <p className="signupLpara">Already have an account?</p>
                                    <button className="signupLoginBtn">
                                     <Link to="/login">Login</Link>
                                    </button>
                                </div>
                                <div className="signupFoot"><a href="/">© 2023 MyAnimeList Co.,Ltd. All Rights Reserved.</a></div>


                            </form>
                    </div>
                </div>
            </div>
            );

}

            export default Signup;