import React from "react";
import { FaTwitter, FaFacebookF, FaGoogle, FaApple, FaExclamationCircle } from "react-icons/fa";
import '../css/Home.css';
import ContentPage from './ContentPage';


const Home = ()=>{
    let iconStyles = { fontSize: "1.5em" };
    return(
        <section>
        
           <div className="mainHome">
            <div className="intro">
                <span className="caption1">
                Never forget what you've seen. Save what you want to watch next.
                </span>
                <br/>
                <span className="caption2">
                Start tracking your anime today.
                </span>
            </div>
            <div className="bubble">
                <img src="/images/bubbles.png"/>
            </div>
            <div className="signupHome">
              <div className="signupBlock">                
                <button className="btnHome btnA"><FaApple style={iconStyles}/>Sign up with apple</button>                
                <button className="btnHome btnG"><FaGoogle style={iconStyles}/>Sign up with Google</button>
                <button className="btnHome btnF"><FaFacebookF style={iconStyles}/>Sign up with Facebook</button>
                <button className="btnHome btnT"><FaTwitter style={iconStyles}/>Sign up with Twitter</button>
              </div>
              <div className="emailHome">
                <a href="#">Sign up with email</a>
              </div>
            </div>
           </div>

          <ContentPage/>
        </section>
    );
}

export default Home;